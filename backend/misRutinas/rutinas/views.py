from django.shortcuts import render
from rest_framework import viewsets
from .serializers import RutinaSerializer
from .models import Rutina


class RutinasViewSet(viewsets.ModelViewSet):
 queryset=Rutina.objects.all()
 serializer_class= RutinaSerializer
 
 
 