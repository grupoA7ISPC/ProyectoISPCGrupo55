from django.shortcuts import render
from rest_framework import viewsets
from .serializers import RegistroSerializer
from usuarios.models import Usuario
from django.shortcuts import redirect, render
#from .models import Login, SetLogin

class RegistroViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = RegistroSerializer
    
    def registro_view(request):
    
     if (request.method == 'POST'):
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
    
        username = Usuario.objects.create_user(username=username, email=email, password=password)
        username.save()
        username_usuario = Usuario.objects.create(username=Usuario)
        username_usuario.save()
        Usuario (request, Usuario)
        return redirect('home')
     return render(request, 'registro.html')

'''def registro_view(request):
    if(request.method == 'GET'):
        username = request.GET['username']
        password = request.GET['password']
        print("Username:", username,"Password", password)
        valid_registro = Usuario.check_credentials(username, password)
        
        if (valid_registro):
            return redirect('api/v1/rutinas/') 
        
        return render(request, 'registro.html',{'error': 'Credenciales incorrectas, vuelta a intentarlo'})
    
    return render(request, 'registro.html')'''

# Create your views here.
