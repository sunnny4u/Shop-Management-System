# Generated by Django 2.2.3 on 2019-08-06 03:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('variety_store', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='createlist',
            name='jer',
            field=models.IntegerField(default=0),
        ),
    ]
