from rest_framework import serializers
from usuarios.models import Usuario
#from .models import Login

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['username', 'password'] 