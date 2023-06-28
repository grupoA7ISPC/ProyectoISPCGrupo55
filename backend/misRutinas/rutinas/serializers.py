from rest_framework import serializers
from .models import Rutina
from .models import SetRutina

class RutinaSerializer (serializers.ModelSerializer):
    class Meta:
        model = Rutina
        fields = "__all__"
        
class SetSerializer (serializers.ModelSerializer):
    class Meta:
        model = SetRutina
        fields = "__all__"

class SetRutinaSerializer(serializers.ModelSerializer):
    fk_rut = RutinaSerializer(read_only=True)
    fk_set = SetSerializer(read_only=True)

    class Meta:
        model = SetRutina
        fields = '__all__'
        depth = 1