from django.shortcuts import render
from rest_framework import viewsets
from .serializers import LoginSerializer
from usuarios.models import Usuario
from django.shortcuts import redirect, render
from django.http import HttpResponse
#from .models import Login, SetLogin

# class LoginViewSet(viewsets.ModelViewSet):
#     queryset = Usuario.objects.all()
#     serializer_class = LoginSerializer

# def login_view(request):
#     if(request.method == 'GET'):
#         username = request.GET['username']
#         password = request.GET['password']
#         print("Username:", username,"Password", password)
#         valid_login = Usuario.check_credentials(username, password)
        
#         if (valid_login):
#             return redirect('api/v1/rutina/') 
        
#         return render(request, 'login.html',{'error': 'Credenciales incorrectas, vuelta a intentarlo'})
    
#     return render(request, 'login.html')

# def login(request):
#     login = Usuario.objects.all()
#     return HttpResponse('Hello World!')

from django.contrib.auth import authenticate
from django.http import JsonResponse

def login_view(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        print(request.POST)

        #user = authenticate(request, email=email, password=password)
        print("Email:", email,"Password", password)
        user = Usuario.check_credentials(email, password)
        print("User: ", user)
        if user is not None:
            # Usuario y contraseña válidos
            # Aquí puedes realizar otras acciones que necesites, como generar un token de autenticación

            # Retornar todos los datos del usuario
            return JsonResponse({
                'username': user.username,
                'email': user.email,
                'id' : user.id_user,
                'nombre' : user.nombre,
                'apellido' : user.apellido,
                'fec_nac' : user.fec_nac, 
                'peso' : user.peso,
                'altura' : user.altura,
                'imc' : user.imc
                # Agrega otros campos que desees retornar
            })
        else:
            # Usuario o contraseña inválidos
            return JsonResponse({'error': 'Credenciales inválidas'}, status=400)

    return JsonResponse({'error': 'Metodo no permitido'}, status=405)