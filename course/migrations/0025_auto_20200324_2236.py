# Generated by Django 3.0.4 on 2020-03-24 22:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0024_auto_20200324_2224'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dictionaryitem',
            name='definition',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='dictionaryitem',
            name='word',
            field=models.TextField(),
        ),
    ]
