# Generated by Django 2.2.3 on 2019-08-07 07:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('variety_store', '0002_createlist_jer'),
    ]

    operations = [
        migrations.CreateModel(
            name='SaveValueList',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('baki', models.IntegerField(default=0)),
            ],
        ),
    ]
