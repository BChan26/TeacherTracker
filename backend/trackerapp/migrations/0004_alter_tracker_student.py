# Generated by Django 4.1.4 on 2023-01-03 16:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('trackerapp', '0003_thought_datetime'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tracker',
            name='student',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='tracker', to='trackerapp.student'),
        ),
    ]
