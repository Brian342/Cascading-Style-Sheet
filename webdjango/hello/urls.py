from django.urls import path
from . import views  # the dot is to say from current directory import views

urlpatterns = [
    path("", views.index, name="index"),
    path("brian", views.brian, name="brian"),
    path("Bridgit", views.Bridgit, name="Bridgit"),
    path("<str:name>", views.greet, name="greet")

]
