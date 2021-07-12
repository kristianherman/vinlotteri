from django.shortcuts import render, redirect
from .models import Lodd
from .forms import LoddForm
from json import dumps


def home_view(request, *args, **kwargs):

    return render(request, "home.html", {})

def lodd_create_view(request):
    form = LoddForm(request.POST or None)
    if form.is_valid():
        form.save()
        form = LoddForm()

    context = {
        "form": form
    }
    
    return render(request, "lodd/create.html", context)


def lodd_trekning_view(request):
    queryset = Lodd.objects.all()

    min_dict= {}

    
    for a in queryset:
        min_dict[a.navn] = a.antall
        

    context = {
        "data": dumps(min_dict)
    }
    return render(request, "lodd/trekning.html", context)


def lodd_delete_view(request):
    if request.method == "POST":
        queryset = Lodd.objects.all()
        for obj in queryset:
            print(obj.navn)
            obj.delete()
        return redirect('../')

    context = {
    }
    
    return render(request, "lodd/delete.html", context)
