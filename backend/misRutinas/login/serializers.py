from rest_framework import serializers
from usuarios.models import Usuario
from rutinas.serializers import RutinaSerializer
#from .models import Login

class LoginSerializer(serializers.ModelSerializer):
    rutinas = RutinaSerializer(many=True, read_only=True)

    class Meta:
        model = Usuario
        fields = ['email', 'password', 'rutinas'] 