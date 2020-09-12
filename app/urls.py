from django.contrib import admin
from django.urls import path,include
#added
from django.views.generic import TemplateView
from rest_framework import routers
from . import views

router = routers.DefaultRouter() 
router.register(r'student', views.StudentView) 
router.register(r'marks', views.MarksView) 


urlpatterns = [
   path('', include(router.urls)),
   
]
