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
    
  def __str__(self):
    return self.id_pago