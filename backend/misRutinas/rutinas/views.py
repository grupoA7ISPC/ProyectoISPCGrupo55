from django.shortcuts import render
from rest_framework import viewsets, filters

from .serializers import RutinaSerializer, SetRutinaSerializer
from .models import Rutina, SetRutina


class RutinasViewSet(viewsets.ModelViewSet):
    queryset=Rutina.objects.all()
    serializer_class= RutinaSerializer
 
class SetRutinasViewSet(viewsets.ModelViewSet):
    queryset = SetRutina.objects.all()
    serializer_class = SetRutinaSerializer    
    filter_backends = [filters.SearchFilter]
    
    def get_queryset(self):
        queryset = super().get_queryset()
        search_param = self.request.query_params.get('search', None)
        if search_param is not None:
            queryset = queryset.filter(fk_rut__fk_user=search_param)
        return queryset