from django.contrib import admin
# from .models import Usuario
from .models import *


# Register your models here.
class SetAdmin(admin.ModelAdmin):
    list_display = ("id_set", "fk_ejerc", "serie", "repeticion", "duracion", "descanso")

admin.site.register(Set, SetAdmin)

class ZonaCuerpoAdmin(admin.ModelAdmin):
    list_display = ("id_zonacuerpo", "nombre")

admin.site.register(ZonaCuerpo, ZonaCuerpoAdmin)

class EjercicioAdmin(admin.ModelAdmin):
    list_display = ("id_ejerc", "nombre", "fk_zonacuerpo") #"fk_zonacuerpo"
    
admin.site.register(Ejercicio, EjercicioAdmin)

class RutinaAdmin(admin.ModelAdmin):
    list_display = ("id_rut", "nombre", "descripcion") #"fk_user"
    
admin.site.register(Rutina, RutinaAdmin)

class SetRutinaAdmin (admin.ModelAdmin):
    list_display = ("id_setrut","fk_rut","fk_set")

admin.site.register(SetRutina, SetRutinaAdmin)