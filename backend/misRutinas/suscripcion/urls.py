from rest_framework import routers
from django.urls import path, include
from suscripcion import views
from suscripcion.views import SuscripcionViewSet


router = routers.DefaultRouter()
router.register(r'suscripcion',views.SuscripcionViewSet)
urlpatterns = [
     path('', include(router.urls)),
]

