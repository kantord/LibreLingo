from django.core.exceptions import ValidationError
from django.db import models
from pathlib import Path
import csv

from .utils import clean_word


with open(Path('./docs/image_attributions.csv').resolve()) as f:
    VALID_IMAGE_NAMES = [(o["image_name"], o["image_name"], )
                         for o in csv.DictReader(f)]


class LearnWord(models.Model):
    class Meta:
        verbose_name = "Learn a new word"

    def __str__(self):
        return self.formInTargetLanguage

    def clean(self):
        if (not self.meaningInSourceLanguage2 and self.formInTargetLanguage2) or (
                not self.formInTargetLanguage2 and self.meaningInSourceLanguage2):
            raise ValidationError(
                'If there are alternative forms, they should exist in both languages.')

    skill = models.ForeignKey('Skill', on_delete=models.CASCADE)
    meaningInSourceLanguage = models.TextField(
        verbose_name="Meaning in source language")
    formInTargetLanguage = models.TextField(
        verbose_name="Meaning in target language")
    meaningInSourceLanguage2 = models.TextField(
        verbose_name="Alternative form in source language", null=True, blank=True)
    formInTargetLanguage2 = models.TextField(
        verbose_name="Alternative form in target language", null=True, blank=True)
    image1 = models.TextField(choices=VALID_IMAGE_NAMES)
    image2 = models.TextField(choices=VALID_IMAGE_NAMES)
    image3 = models.TextField(choices=VALID_IMAGE_NAMES)


class DictionaryItem(models.Model):
    class Meta:
        verbose_name = "Dictionary Item"
        unique_together = ('course', 'word', 'reverse')

    def __str__(self):
        return 'Word "{}" in {}'.format(self.word, self.course)

    course = models.ForeignKey('Course', on_delete=models.CASCADE)
    reverse = models.BooleanField()
    word = models.TextField()
    definition = models.TextField(blank=True)


class LearnSentence(models.Model):
    class Meta:
        verbose_name = "Learn a new sentence"

    def __str__(self):
        return self.formInTargetLanguage

    def ensure_word(self, word, reverse):
        course = self.skill.module.course
        try:
            DictionaryItem.objects.get(
                course=course, word=clean_word(word), reverse=reverse)
        except BaseException:
            DictionaryItem.objects.create(
                course=course, word=clean_word(word), reverse=reverse)

    def ensure_all_words(self):
        for word in self.formInTargetLanguage.split():
            self.ensure_word(word, reverse=False)

        for word in self.meaningInSourceLanguage.split():
            self.ensure_word(word, reverse=True)

    def save(self, *args, **kwargs):
        self.ensure_all_words()
        super(LearnSentence, self).save(*args, **kwargs)

    skill = models.ForeignKey('Skill', on_delete=models.CASCADE)
    meaningInSourceLanguage = models.TextField(
        verbose_name="Meaning in source language")
    formInTargetLanguage = models.TextField(
        verbose_name="Meaning in target language")


class AlternativeSolutionInSourceLanguage(models.Model):
    class Meta:
        verbose_name = "Alternative solution in source language"
        verbose_name_plural = "Alternative solutions in source language"
        unique_together = ('sentence', 'word', 'solution')

    sentence = models.ForeignKey(
        'LearnSentence', on_delete=models.CASCADE, null=True, blank=True)
    word = models.ForeignKey(
        'LearnWord', on_delete=models.CASCADE, null=True, blank=True)
    solution = models.TextField(
        verbose_name="Alternative solution")


class AlternativeSolutionInTargetLanguage(models.Model):
    class Meta:
        verbose_name = "Alternative solution in target language"
        verbose_name_plural = "Alternative solutions in target language"
        unique_together = ('sentence', 'word', 'solution')

    sentence = models.ForeignKey(
        'LearnSentence', on_delete=models.CASCADE, null=True, blank=True)
    word = models.ForeignKey(
        'LearnWord', on_delete=models.CASCADE, null=True, blank=True)
    solution = models.TextField(
        verbose_name="Alternative solution")


class Course(models.Model):
    class Meta:
        verbose_name = "Language course"

    def __str__(self):
        return "{} for {} speakers course".format(
            self.language_name, self.source_language_name)

    language_name = models.TextField(verbose_name="Language name")
    source_language_name = models.TextField(
        verbose_name="Source langauge name")
    target_language_code = models.TextField(
        verbose_name="Target langauge IETF BCP 47 code")
    special_characters = models.TextField(
        verbose_name="Space-separated list of characters for the virtual keyboard")


class Module(models.Model):
    class Meta:
        verbose_name = "Module"
        ordering = ['order']

    def __str__(self):
        return "{} in {} ".format(self.name, str(self.course))

    course = models.ForeignKey('Course', on_delete=models.CASCADE)
    name = models.TextField(verbose_name="Module name")
    order = models.PositiveIntegerField(default=0, blank=False, null=False)


class Skill(models.Model):
    class Meta:
        verbose_name = "Skill"
        ordering = ['order']

    def __str__(self):
        return "{} in {} ".format(self.name, str(self.module))

    def clean(self):
        images = [self.image1, self.image2, self.image3]
        if not all(images):
            if any(images):
                raise ValidationError(
                    "Either exactly 0 or exactly 3 images are needed")

    def save(self, *args, **kwargs):
        self.clean()
        return super(Skill, self).save(*args, **kwargs)

    module = models.ForeignKey('Module', on_delete=models.CASCADE)
    name = models.TextField(verbose_name="Skill")
    order = models.PositiveIntegerField(default=0, blank=False, null=False)
    image1 = models.TextField(choices=VALID_IMAGE_NAMES, null=True, blank=True)
    image2 = models.TextField(choices=VALID_IMAGE_NAMES, null=True, blank=True)
    image3 = models.TextField(choices=VALID_IMAGE_NAMES, null=True, blank=True)
