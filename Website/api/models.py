from django.db import models

# Create your models here.
class TextArea(models.Model):
    user_msg = models.CharField(max_length=500, default="")
    # upload_img = models.FileField(upload_to='uploads/% Y/% m/% d/', default="")

class ImageUpload(models.Model):
    upload_img = models.ImageField(upload_to='post_images')