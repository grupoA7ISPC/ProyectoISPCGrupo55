from django.urls import path, include
from rest_framework import routers
#from Usuario.views import UsuarioViewSet
#from usuarios  import views
from login import views
#from .views import login_view

router= routers.DefaultRouter()
#router.register('', views.LoginViewSet)
#----
urlpatterns = [
#path('', include(router.urls)),
path('',views.login_view),
     
]