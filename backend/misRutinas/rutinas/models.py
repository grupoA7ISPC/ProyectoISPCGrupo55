from django.db import models


# Create your models here.
class Set(models.Model):
  id_set = models.AutoField(primary_key=True)
  serie = models.IntegerField()
  repeticion = models.IntegerField(blank=True, default=0)
  duracion = models.TimeField(blank=True, default="00:00:00")
  descanso = models.TimeField()

  class Meta:
    db_table="Set"
    verbose_name="Set de Rutinas"
    verbose_name_plural="Sets"

  def __unicode__(self):
    return self.id_set
    
  def __int__(self):
    return self.id_set

class ZonaCuerpo(models.Model):
  id_zonacuerpo = models.AutoField(primary_key=True)
  nombre = models.CharField(max_length=60)

  class Meta:
    db_table="ZonaCuerpo"
    verbose_name="Zona de Cuerpo Trabajada"
    verbose_name_plural="Zonas del Cuerpo"

  def __unicode__(self):
    return self.nombre
    
  def __str__(self):
    return self.nombre
  

# Create your models here.
class Ejercicio(models.Model):
  id_ejerc = models.AutoField(primary_key=True, default=1)
  nombre = models.CharField(max_length=50)
  fk_zonacuerpo = models.ForeignKey(ZonaCuerpo, on_delete=models.CASCADE, default=1)  
  
  class Meta:
    db_table="Ejercicio"
    verbose_name="Ejercicio para una Zona"
    verbose_name_plural="Ejercicios"

  def __unicode__(self):
    return self.id_ejerc
    
  def __int__(self):
    return self.id_ejerc
