from django.urls import path, include
from rest_framework import routers
#from Usuario.views import UsuarioViewSet
#from usuarios  import views
from registro import views
#from .views import login_view

router= routers.DefaultRouter()
router.register(r'registro', views.RegistroViewSet)
#----
urlpatterns = [
     path('', include(router.urls)),
]