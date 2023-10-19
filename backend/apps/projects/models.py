from django.db import models

# Create your models here.
class Project(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    description = models.TextField()
    technology = models.CharField(max_length=20)
    image = models.FileField(upload_to='frontend/static/images/uploads', blank=True)
