from rest_framework import serializers
from usuarios.models import Usuario
#from .models import Login

class RegistroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__' 