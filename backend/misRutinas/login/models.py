from django.db import models
from usuarios.models import Usuario
from django.shortcuts import redirect, render

# class Login(models.Model):
#   username = models.CharField(max_length=16, unique=True)
#   password = models.CharField(max_length=16)

#   class Meta:
#     db_table="ZonaCuerpo"
#     verbose_name="Zona de Cuerpo Trabajada"
#     verbose_name_plural="Zonas del Cuerpo"

#   def __unicode__(self):
#     return self.nombre
    
#   def __str__(self):
#     return self.nombre
