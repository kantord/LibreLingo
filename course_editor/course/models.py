from django.db import models


class LearnWord(models.Model):
    class Meta:
        verbose_name = "Learn a new word"
    skill = models.ForeignKey('Skill', on_delete=models.CASCADE)
    meaningInSourceLanguage = models.TextField(verbose_name="Meaning in source language")
    formInTargetLanguage = models.TextField(verbose_name="Meaning in target language")


class Course(models.Model):
    class Meta:
        verbose_name = "Language course"

    def __str__(self):
        return "{} for {} speakers course".format(self.language_name, self.source_language_name)

    language_name = models.TextField(verbose_name="Language name")
    source_language_name = models.TextField(verbose_name="Source langauge name")


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

    module = models.ForeignKey('Module', on_delete=models.CASCADE)
    name = models.TextField(verbose_name="Skill")
    order = models.PositiveIntegerField(default=0, blank=False, null=False)
