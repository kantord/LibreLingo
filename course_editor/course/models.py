from django.db import models


class LearnWord(models.Model):
    class Meta:
        verbose_name = "Learn a new word"
    meaningInSourceLanguage = models.TextField(verbose_name="Meaning in source language")
    formInTargetLanguage = models.TextField(verbose_name="Meaning in target language")


class Course(models.Model):
    class Meta:
        verbose_name = "Language course"
    language_name = models.TextField(verbose_name="Language name")


class Module(models.Model):
    class Meta:
        verbose_name = "Module"
    course = models.ForeignKey('Course', on_delete=models.CASCADE)
    name = models.TextField(verbose_name="Language name")


class Skill(models.Model):
    class Meta:
        verbose_name = "Skill"
    module = models.ForeignKey('Module', on_delete=models.CASCADE)
    name = models.TextField(verbose_name="Skill")
