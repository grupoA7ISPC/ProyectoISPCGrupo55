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