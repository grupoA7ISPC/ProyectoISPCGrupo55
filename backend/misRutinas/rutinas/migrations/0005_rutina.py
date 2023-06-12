# Generated by Django 4.2.1 on 2023-06-12 01:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rutinas', '0004_set_fk_ejerc'),
    ]

    operations = [
        migrations.CreateModel(
            name='Rutina',
            fields=[
                ('id_rut', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=40)),
                ('descripcion', models.CharField(max_length=250)),
            ],
            options={
                'verbose_name': 'Rutina de ejercicios',
                'verbose_name_plural': 'Rutinas',
                'db_table': 'Rutina',
            },
        ),
    ]