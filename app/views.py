from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import viewsets          # add this
from .serializers import *      
from .models import *       
# Create your views here.
class StudentView(viewsets.ModelViewSet):
    serializer_class = StudentSerializer 
    queryset = Student.objects.all()          
    

    
class MarksView(viewsets.ModelViewSet):
    serializer_class = MarksSerializer         
    queryset = Marks.objects.all()              