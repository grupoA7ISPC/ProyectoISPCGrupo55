from django.db import models

class Suscripcion(models.Model):
  id_sub = models.AutoField(primary_key=True)
  nombre = models.TextField(max_length=50)
  descripcion = models.TextField(max_length=370)
  price = models.FloatField()
  dur_dias = models.IntegerField()

  class Meta:
    db_table="Suscripcion"
    verbose_name="suscripciones"
    verbose_name_plural="suscripciones"

  def __unicode__(self):
    return self.nombre
    
  def __str__(self):
    return self.nombre
