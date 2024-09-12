
from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'core/index.html')

def update_content(request):
    return HttpResponse("<p>Contenu mis à jour via HTMX!</p>")