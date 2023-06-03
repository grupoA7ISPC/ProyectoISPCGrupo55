from django.contrib import admin
# from .models import Usuario
from .models import *

# Register your models here.
class UsuarioAdmin(admin.ModelAdmin):
    list_display = ("id_User", "name", "last_name", "birthday", "username", "email", "password", "created_at", "imc")

admin.site.register(Usuario, UsuarioAdmin)

class PagoAdmin(admin.ModelAdmin):
    list_display = ("id_pago","fecha","periodo")

admin.site.register(Pago, PagoAdmin)

class RutinaAdmin(admin.ModelAdmin):
    list_display = ("id_rutina", "nombre", "serie", "repeticion", "duracion", "descanso")

admin.site.register(Rutina, RutinaAdmin)