from django.db import models


class LearnWord(models.Model):
    meaningInSourceLanguage = models.TextField()
    formInTargetLanguage = models.TextField()
