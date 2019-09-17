from django.shortcuts import render
from rest_framework import viewsets , permissions #uncomment after viewsets if required
from .models import Language, Programmer, Paradigm
from .serializers import LanguageSerializer, ParadigmSerializer, ProgrammerSerializer

class LanguageView(viewsets.ModelViewSet): 

    queryset = Language.objects.all()
    serializer_class = LanguageSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,) #So as if one is logged in then only permissions can be authenticated

class ParadigmView(viewsets.ModelViewSet):

    queryset = Paradigm.objects.all()
    serializer_class = ParadigmSerializer

class ProgrammerView(viewsets.ModelViewSet):

    queryset = Programmer.objects.all()
    serializer_class = ProgrammerSerializer


