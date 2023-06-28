from rest_framework import serializers
from .models import Rutina, Set, SetRutina, Ejercicio

class EjercicioSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Ejercicio
        fields = "__all__"

class RutinaSerializer (serializers.ModelSerializer):
    class Meta:
        model = Rutina
        fields = "__all__"
        
class SetSerializer (serializers.ModelSerializer):
    fk_ejer = EjercicioSerializer(read_only=True)
    
    class Meta:
        model = Set
        fields = "__all__"
        depth = 1

class SetRutinaSerializer(serializers.ModelSerializer):
    fk_rut = RutinaSerializer(read_only=True)
    fk_set = SetSerializer(read_only=True)

    class Meta:
        model = SetRutina
        fields = '__all__'
        depth = 1