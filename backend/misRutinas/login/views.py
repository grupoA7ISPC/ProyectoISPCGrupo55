import json

from django.shortcuts import render
from rest_framework import viewsets
from .serializers import LoginSerializer
from usuarios.models import Usuario
from django.shortcuts import redirect, render
from django.http import HttpResponse, JsonResponse
from django.contrib.auth import authenticate
from rutinas.models import Rutina
from rest_framework import serializers
from django.core.serializers import serialize

def login_view(request):
    if request.method == 'POST':
        usuario = json.loads(request.body)
        email = usuario.get('email')
        password = usuario.get('password')
        user = Usuario.check_credentials(email, password)
        print("User: ", user)
        if user is not None:       
            rutinas = Rutina.objects.filter(fk_user=user.id_user) 
            
            user_data = {
                'username': user.username,
                'email': user.email,
                'id' : user.id_user,
                'nombre' : user.nombre,
                'apellido' : user.apellido,
                'fec_nac' : user.fec_nac, 
                'peso' : user.peso,
                'altura' : user.altura,
                'imc' : user.imc
            }
            
            rutinas_data = serialize('json', rutinas)
            
            data = {
                'user': user_data,
                'rutinas': rutinas_data
            }
            
            print(data)
            return JsonResponse(data)
        else:
            # Usuario o contraseña inválidos
            return JsonResponse({'error': 'Credenciales inválidas'}, status=400)
            
    return JsonResponse({'error': 'Metodo no permitido'}, status=405)