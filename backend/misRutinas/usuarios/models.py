from django.db import models
from django.utils import timezone
from django.contrib.auth.hashers import make_password
# from suscripcion.models import Suscripcion

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

class Usuario(models.Model):
    id_user = models.AutoField(primary_key=True)
    id_alim = models.ForeignKey(Alimentacion, on_delete=models.CASCADE, default=1)
    # id_sub = models.ForeignKey(Suscripcion, on_delete=models.CASCADE, default=1)
    created_at = models.DateTimeField(default=timezone.now)
    nombre = models.CharField(max_length=45)
    apellido = models.CharField(max_length=45)
    username = models.CharField(max_length=16, unique=True)
    fec_nac = models.DateField()
    email = models.CharField(max_length=150, unique=True)
    password = models.CharField(max_length=16)
    peso = models.FloatField(blank=True, default=0)
    altura = models.FloatField(blank=True, default=0)
    imc = models.FloatField( default=0, blank=True)

    class Meta:
      db_table="Usuario"
      verbose_name="Usuario de MisRutinas"
      verbose_name_plural="Usuarios"

    def __unicode__(self):
      return self.nombre
    
    def __str__(self):
       return self.nombre
  
    def set_password(self, raw_password):
      self.password = make_password(raw_password)

    def check_password(self, raw_password):
      self.check_password(raw_password, self.password)