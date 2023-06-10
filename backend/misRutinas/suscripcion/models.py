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
  
class Pago(models.Model):
  id_pago = models.AutoField(primary_key=True, default=1)
  fk_id_factura = models.ForeignKey(Factura, on_delete=models.CASCADE, default=1)
  fecha = models.DateField(auto_now_add=False)
  subtotal = models.FloatField(blank=False, default=0)
  detalle = models.TextField(max_length=100, blank=True,default='')

  class Meta:
    db_table="Pago"
    verbose_name="Pago suscripciones"
    verbose_name_plural="Pagos"

  def unicode(self):
    return self.id_pago

  def int(self):
    return self.id_pago
