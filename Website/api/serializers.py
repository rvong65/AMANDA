from typing import Text
from rest_framework import serializers
from .models import TextArea

class TextSerializer(serializers.ModelSerializer):
    class Meta:
        model = TextArea
        fields = ('id', 'user_msg', 'upload_img')

class SendMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = TextArea
        fields = ('user_msg')

class SendImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = TextArea
        fields = ('upload_img')