# Generated by Django 4.2.1 on 2023-06-13 19:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('usuarios', '0005_usuario_id_sub'),
        ('suscripcion', '0003_pago'),
    ]

    operations = [
        migrations.AddField(
            model_name='factura',
            name='fk_id_user',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='usuarios.usuario'),
        ),
    ]
