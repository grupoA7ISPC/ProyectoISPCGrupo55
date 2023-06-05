from django.db import models

# Create your models here.
class Usuario(models.Model):
    id_User = models.AutoField(primary_key=True)
    name = models.CharField(max_length=45, blank=False)
    last_name = models.CharField(max_length=45, blank=False)
    birthday = models.DateField(blank=False)
    username = models.CharField(max_length=16, blank=False)
    email = models.CharField(max_length=45, blank=False)
    password = models.CharField(max_length=16, blank=False)
    created_at = models.DateField(auto_now_add=False)
    imc = models.FloatField()

    class Meta:
      db_table="Usuario"
      verbose_name="Usuario de MisRutinas"
      verbose_name_plural="Usuarios"

    def __unicode__(self):
      return self.name
    
    def __str__(self):
       return self.name


class Pago(models.Model):
  id_pago = models.IntegerField(primary_key=True)
  fecha = models.DateField(auto_now_add=False)
  periodo = models.IntegerField(blank=False)

  class Meta:
    db_table="Pago"
    verbose_name="Pago suscripciones"
    verbose_name_plural="Pagos"

  def __unicode__(self):
    return self.id_pago
    
  def __int__(self):
    return self.id_pago
  

class Rutina(models.Model):
  id_rutina = models.AutoField(primary_key=True)
  nombre = models.CharField(max_length=25, blank=False)
  serie = models.IntegerField()
  repeticion = models.IntegerField()
  duracion = models.TimeField()
  descanso = models.CharField(max_length=45)

  class Meta:
    db_table="Rutina"
    verbose_name="Rutina de ejercicios"
    verbose_name_plural="Rutinas"

  def __unicode__(self):
    return self.nombre
    
  def __str__(self):
    return self.nombre