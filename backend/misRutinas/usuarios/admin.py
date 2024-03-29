from django.contrib import admin
from .models import *


# Register your models here.
class AlimentacionAdmin(admin.ModelAdmin):
    list_display = ('id_alim', 'title', 'descripcion', 'summary')

admin.site.register(Alimentacion, AlimentacionAdmin)

class UsuarioAdmin(admin.ModelAdmin):
    list_display = ('id_user', 'id_alim', 'created_at', 'nombre', 'apellido', 'username', 'fec_nac', 'email', 'password', 'peso', 'altura', 'imc')
    
admin.site.register(Usuario, UsuarioAdmin)

class LogroAdmin(admin.ModelAdmin):
    list_display = ('id_logro', 'titulo', 'descripcion')
    
admin.site.register(Logro, LogroAdmin)

class UsuarioLogroAdmin(admin.ModelAdmin):
    list_display = ('id_userlogro', 'fk_logro', 'fk_user','status','completed_at')
    
admin.site.register(UsuarioLogro,UsuarioLogroAdmin)