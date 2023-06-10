from django.contrib import admin
from .models import *

class SuscripcionAdmin(admin.ModelAdmin):
    list_display=('id_sub', 'nombre', 'descripcion', 'price', 'dur_dias')

admin.site.register(Suscripcion, SuscripcionAdmin)

class FacturaAdmin(admin.ModelAdmin):
    list_display=('nro_comp', 'fk_suscripcion')

admin.site.register(Factura, FacturaAdmin)

class PagoAdmin(admin.ModelAdmin):
    list_display = ('id_pago', 'fk_id_factura', 'fecha', 'subtotal','detalle')

admin.site.register(Pago, PagoAdmin)

