# Generated by Django 3.0.8 on 2020-09-12 13:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_auto_20200912_1621'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='student',
            name='marks',
        ),
        migrations.AddField(
            model_name='marks',
            name='student',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='students', to='app.Student'),
        ),
    ]
