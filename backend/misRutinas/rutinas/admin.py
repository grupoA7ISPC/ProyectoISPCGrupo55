from django.contrib import admin
# from .models import Usuario
from .models import *

# Register your models here.
class SetAdmin(admin.ModelAdmin):
    list_display = ("id_set", "serie", "repeticion", "duracion", "descanso")

admin.site.register(Set, SetAdmin)