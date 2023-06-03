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
