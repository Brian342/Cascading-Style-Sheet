from django.http import HttpResponse
from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request, "Hello/index.html!")


def brian(request):
    return HttpResponse("How are you today?")


def Bridgit(request):
    return HttpResponse("You are beautiful")


# def greet(request, name):
#     return HttpResponse(f"Hello, {name.capitalize()}!")
def greet(request, name):
    return render(request, "hello/greet.html", {
        "name": name.capitalize()
    })
