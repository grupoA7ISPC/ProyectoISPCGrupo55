from django.db import models

# Create your models here.

class Alimentacion(models.Model):
  id_alim = models.AutoField(primary_key=True)
  title = models.CharField(max_length=50)
  descripcion = models.TextField(max_length=600) 
  summary = models.TextField(max_length=100) 
  class Meta:
    db_table = 'Alimentacion'
    verbose_name = ('tips de alimentacion')
    verbose_name_plural = ('Alimentaciones')
    
  def __unicode__(self):
    return self.title
  def __str__(self):
    return self.title