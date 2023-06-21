from django.shortcuts import render
from rest_framework import viewsets
from .serializers import RutinaSerializer, SetRutinaSerializer
from .models import Rutina, SetRutina


class RutinasViewSet(viewsets.ModelViewSet):
    queryset=Rutina.objects.all()
    serializer_class= RutinaSerializer
 
class SetRutinasViewSet(viewsets.ModelViewSet):
    queryset = SetRutina.objects.all()
    serializer_class = SetRutinaSerializer    
    
# SetRutina.objects.get(pk=id) 