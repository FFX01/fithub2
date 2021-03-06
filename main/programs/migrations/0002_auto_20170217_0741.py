# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-17 07:41
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('programs', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='program',
            name='created',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='program',
            name='updated',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='program',
            name='exercises',
            field=models.ManyToManyField(related_name='programs', to='exercises.Exercise'),
        ),
    ]
