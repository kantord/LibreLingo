from django.db import models


class LearnWord(models.Model):
    class Meta:
        verbose_name = "Learn a new word"
    meaningInSourceLanguage = models.TextField(verbose_name="Meaning in source language")
    formInTargetLanguage = models.TextField(verbose_name="Meaning in target language")
