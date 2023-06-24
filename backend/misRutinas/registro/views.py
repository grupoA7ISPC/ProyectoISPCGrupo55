from django.shortcuts import render
from rest_framework import viewsets
from .serializers import RegistroSerializer
from usuarios.models import Usuario
from django.shortcuts import redirect, render
#from .models import Login, SetLogin

class RegistroViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = RegistroSerializer