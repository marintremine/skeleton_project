from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('update/', views.update_content, name='update'),
]