from typing import Text
from rest_framework import serializers
from .models import ImageUpload

class TextSerializer(serializers.ModelSerializer):
    class Meta:
        model = TextArea
        fields = ('id', 'message')

class SendMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = TextArea
        fields = '__all__'
        
class ImageUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageUpload
        fields = '__all__'
