# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations
import pytz
import datetime

def load_data(apps, schema_editor):
    User = apps.get_model('auth', 'User')

    User.objects.get_or_create(is_superuser=True, username='admin',
        first_name="System", last_name="Admin",
        is_staff=True, is_active=True,
        password='pbkdf2_sha256$24000$fN6qopRLxdN0$BYCSpjV9J3GEw167zHQnIKRxIN9gVIqyCWBdxfCI7AA=',
        last_login=datetime.datetime.now(pytz.utc))


def revert(apps, schema_editor):
    pass


class Migration(migrations.Migration):

    dependencies = [
        ('common', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(load_data, revert)
    ]
