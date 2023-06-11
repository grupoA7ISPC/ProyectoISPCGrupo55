from django.contrib import admin
# from .models import Usuario
from .models import *

# Register your models here.
class SetAdmin(admin.ModelAdmin):
    list_display = ("id_set", "serie", "repeticion", "duracion", "descanso")

admin.site.register(Set, SetAdmin)

class ZonaCuerpoAdmin(admin.ModelAdmin):
    list_display = ("id_zonacuerpo", "nombre")

admin.site.register(ZonaCuerpo, ZonaCuerpoAdmin)