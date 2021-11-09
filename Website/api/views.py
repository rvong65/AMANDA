from django.db.models import query
from django.shortcuts import render
from rest_framework import generics, status
from .models import TextArea, ImageUpload
from .serializers import TextSerializer, SendMessageSerializer, ImageUploadSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
import subprocess

# Create your views here.
class TextView(generics.ListAPIView):
    queryset = TextArea.objects.all()
    serializer_class = TextSerializer

class SendMessageView(APIView):
    serializer_class = SendMessageSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            message = serializer.data['message']
            queryset = TextArea.objects.filter()

            if queryset.exists():
                text = queryset[0]
                text.message = message
                text.save(update_fields=['message'])
            else:
                text = TextArea(message=message)
                text.save()
        
        return Response(TextSerializer(text).data, status=status.HTTP_201_CREATED)

class ImageUploadView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        posts = ImageUpload.objects.all()
        serializer = ImageUploadSerializer(posts, many=True)

        # Get name of most recent image upload
        image_name = serializer.data[len(serializer.data)-1]["title"]
        
        # Run generate_responses.py passing image_name to sys.argv list
        subprocess.run(["python", "./media/responses/generate_responses.py", image_name])
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        posts_serializer = ImageUploadSerializer(data=request.data)
        if posts_serializer.is_valid():
            posts_serializer.save()
            return Response(posts_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', posts_serializer.errors)
            return Response(posts_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

