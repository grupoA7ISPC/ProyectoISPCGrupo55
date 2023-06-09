from django.contrib import admin
from .models import *


# Register your models here.
class AlimentacionAdmin(admin.ModelAdmin):
    list_display = list([field.name for field in Alimentacion._meta.get_fields()])

admin.site.register(Alimentacion, AlimentacionAdmin)