from django.shortcuts import render
from rest_framework import viewsets
from .serializers import SuscripcionSerializer
from .models import Suscripcion
# Create your views here.

class SuscripcionViewSet(viewsets.ModelViewSet):
    queryset = Suscripcion.objects.all()
    serializer_class = SuscripcionSerializer