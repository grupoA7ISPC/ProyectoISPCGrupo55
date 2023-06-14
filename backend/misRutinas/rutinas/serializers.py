from rest_framework import serializers
from .models import Rutina
from .models import SetRutina

class RutinaSerializer (serializers.ModelSerializer):
    class Meta:
        model = Rutina
        fields = "__all__"
        

class SetRutinaSerializer(serializers.ModelSerializer):
    class Meta:
        model = SetRutina
        fields = '__all__'