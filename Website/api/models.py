from django.db import models

# Create your models here.
class TextArea(models.Model):
    message = models.CharField(max_length=500, default="")

class ImageUpload(models.Model):
    title = models.CharField(max_length=500, default="")
    image = models.ImageField(upload_to='post_images')