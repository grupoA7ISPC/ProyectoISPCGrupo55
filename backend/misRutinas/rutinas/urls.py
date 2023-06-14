#from django import views
from django.urls import path, include
from rutinas import views
from rutinas.views import RutinasViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'rutinas',views.RutinasViewSet)
urlpatterns = [
     path('', include(router.urls)),
]
