from django.db import models

# Create your models here.

class Lodd(models.Model):
    navn = models.CharField(max_length=100)
    antall = models.IntegerField()
