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
  
class Factura(models.Model):
    nro_comp = models.CharField(max_length=13, primary_key=True)
    fk_suscripcion = models.ForeignKey(Suscripcion, on_delete=models.CASCADE, default=1)
    # fk_id_user = models.ForeignKey(Usuario, on_delete=models.CASCADE, default=1)
    class Meta:
      db_table="Factura"
      verbose_name="Factura de MisRutinas"
      verbose_name_plural="Facturas"

    def __unicode__(self):
      return self.nro_comp
    
    def __str__(self):
       return self.nro_comp
  