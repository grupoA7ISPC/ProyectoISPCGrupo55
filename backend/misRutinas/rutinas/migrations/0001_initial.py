# Generated by Django 4.2.1 on 2023-06-03 20:08

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('id_User', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=45)),
                ('last_name', models.CharField(max_length=45)),
                ('birthday', models.DateField()),
                ('username', models.CharField(max_length=16)),
                ('email', models.CharField(max_length=45)),
                ('password', models.CharField(max_length=16)),
                ('created_at', models.DateField()),
                ('imc', models.FloatField()),
            ],
            options={
                'verbose_name': 'Usuario de MisRutinas',
                'verbose_name_plural': 'Usuarios',
                'db_table': 'Usuario',
            },
        ),
    ]
