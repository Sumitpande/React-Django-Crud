# Generated by Django 3.0.8 on 2020-09-11 19:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_auto_20200911_1250'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='marks',
            name='student',
        ),
        migrations.AddField(
            model_name='student',
            name='marks',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='app.Marks'),
        ),
    ]