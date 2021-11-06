from typing import Text
from rest_framework import serializers
from .models import TextArea, ImageUpload

class TextSerializer(serializers.ModelSerializer):
    class Meta:
        model = TextArea
        fields = ('id', 'user_msg')

class SendMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = TextArea
        fields = ('user_msg')

class ImageUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageUpload
        fields = '__all__'