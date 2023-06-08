from django.contrib import admin
from .models import *

class SuscripcionAdmin(admin.ModelAdmin):
    list_display=list([field.name for field in Suscripcion._meta.get_fields()])

admin.site.register(Suscripcion, SuscripcionAdmin)