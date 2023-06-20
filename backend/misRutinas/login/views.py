from django.shortcuts import render
from rest_framework import viewsets
from .serializers import LoginSerializer
from usuarios.models import Usuario
from django.shortcuts import redirect, render
#from .models import Login, SetLogin

class LoginViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = LoginSerializer

def login_view(request):
    if(request.method == 'GET'):
        username = request.GET['username']
        password = request.GET['password']
        print("Username:", username,"Password", password)
        valid_login = Usuario.check_credentials(username, password)
        
        if (valid_login):
            return redirect('api/v1/rutinas/') 
        
        return render(request, 'login.html',{'error': 'Credenciales incorrectas, vuelta a intentarlo'})
    
    return render(request, 'login.html')
