from django.shortcuts import render
from rest_framework import viewsets 
from .models import Language
from .serializers import LanguageSerializer

#viewsets module --> automate handling of GET, POST, etc request instead of defining each one explicitly
#Language view will inherit these requests from viewsets module
class LanguageView(viewsets.HyperlinkedModelViewSet): 

    queryset = Language.objects.all()
    serializer_class = LanguageSerializer


