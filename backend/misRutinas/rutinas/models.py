from django.db import models


# Create your models here.


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
  id_ejerc = models.AutoField(primary_key=True)
  nombre = models.CharField(max_length=50)
  fk_zonacuerpo = models.ForeignKey(ZonaCuerpo, on_delete=models.CASCADE, default=1)  
  
  class Meta:
    db_table="Ejercicio"
    verbose_name="Ejercicio para una Zona"
    verbose_name_plural="Ejercicios"
  
  def get_nombre(self):
    return self.nombre

  def __unicode__(self):
    return self.nombre
    
  def __str__(self):
    return self.nombre
  
class Set(models.Model):
  id_set = models.AutoField(primary_key=True)
  fk_ejerc = models.ForeignKey(Ejercicio, on_delete=models.CASCADE, default=1)
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
  
  

  
class Rutina(models.Model):
  id_rut = models.AutoField(primary_key=True)
  #fk_user = models.ForeignKey(Usuario, on_delete=models.CASCADE, default=1)
  nombre = models.CharField(max_length=40)
  descripcion = models.CharField(max_length=250)

  class Meta:
    db_table="Rutina"
    verbose_name="Rutina de ejercicios"
    verbose_name_plural="Rutinas"

  def __unicode__(self):
    return self.nombre
    
  def __str__(self):
    return self.nombre


class SetRutina(models.Model):
  id_setrut = models.AutoField(primary_key=True)
  fk_rut = models.ForeignKey(Rutina, on_delete= models.CASCADE, default = 1)
  fk_set = models.ForeignKey(Set, on_delete= models.CASCADE, default = 1)

  class Meta:
    db_table="SetRutina"
    verbose_name="Set de ejercicios para rutina"
    verbose_name_plural="Setsrutinas"

  def __unicode__(self):
    return self.id_setrut
    
  def __int__(self):
    return self.id_setrut



