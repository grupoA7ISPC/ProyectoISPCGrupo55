from django.contrib import admin
# from .models import Usuario
from .models import *

# Register your models here.
class UsuarioAdmin(admin.ModelAdmin):
    list_display = ("id_User", "name", "last_name", "birthday", "username", "email", "password", "created_at", "imc")

admin.site.register(Usuario, UsuarioAdmin)