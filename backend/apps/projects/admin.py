from django.contrib import admin
from .models import Project

# Register your models here.
models_list = [Project]
admin.site.register(models_list)
