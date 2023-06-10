# Generated by Django 4.2.1 on 2023-06-10 20:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('usuarios', '0002_usuario'),
    ]

    operations = [
        migrations.CreateModel(
            name='Logro',
            fields=[
                ('id_logro', models.AutoField(primary_key=True, serialize=False)),
                ('titulo', models.CharField(max_length=25)),
                ('descripcion', models.TextField(blank=True, default='', max_length=250)),
            ],
            options={
                'verbose_name': 'Logro del sistema recompensas',
                'verbose_name_plural': 'Logros',
                'db_table': 'Logro',
            },
        ),
    ]