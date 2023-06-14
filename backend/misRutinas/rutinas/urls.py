#from django import views
from django.urls import path, include
from rutinas import views
from rutinas.views import RutinasViewSet
from rutinas.views import SetRutinasViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'rutinas',views.RutinasViewSet)
router.register(r'setrutinas',views.SetRutinasViewSet)
urlpatterns = [
     path('', include(router.urls)),
]
