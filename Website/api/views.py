from django.db.models import query
from django.shortcuts import render
from rest_framework import generics, status
from .models import ImageUpload
from .serializers import ImageUploadSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
import torch, json

# Create your views here.
class ImageUploadView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        posts = ImageUpload.objects.all()
        serializer = ImageUploadSerializer(posts, many=True)


        # Takes in an image path and returns a json file with the prediction
        model = torch.hub.load('ultralytics/yolov5', 'custom', path='./media/yolov5_weights.pt')
        image_data = dict(serializer.data[len(serializer.data)-1]) # most recent upload
        img_path = "./media/post_images/" + image_data["name"] 
        results = model(img_path)
        df = results.pandas().xyxy[0]
        json_output = json.loads(df.to_json())

        return Response(json_output["name"]["0"])

    def post(self, request, *args, **kwargs):
        posts_serializer = ImageUploadSerializer(data=request.data)

        if posts_serializer.is_valid():
            posts_serializer.save()
            return Response(posts_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', posts_serializer.errors)
            return Response(posts_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

