from rest_framework import serializers
from .models import Suscripcion

class SuscripcionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Suscripcion
        fields = '__all__'
        