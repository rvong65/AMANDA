from rest_framework import status
from .models import ImageUpload
from .serializers import ImageUploadSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
import torch, json, os

# Create your views here.
class ImageUploadView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        posts = ImageUpload.objects.all()
        serializer = ImageUploadSerializer(posts, many=True)

        # Get name of image name and concats it to fixed directory
        image_data = dict(serializer.data[len(serializer.data)-1]) # most recent upload
        img_path = "." + image_data["image"] 

        # Takes in an image path and returns a json file with the prediction
        model = torch.hub.load('ultralytics/yolov5', 'custom', path='./media/yolov5_weights.pt')
        results = model(img_path)
        df = results.pandas().xyxy[0]
        json_output = json.loads(df.to_json())

        # Deletes temporary image
        if os.path.exists(img_path):
            os.remove(img_path)
        else:
            print("The file does not exist")

        # Responds with "No result" if classifier didn't detect anything
        try :
            json_response = {
                "name": json_output["name"]["0"],
                "confidence": json_output["confidence"]["0"]
            }
        except:
            json_response = {
                "name": "No result",
                "confidence": 0
            }

        return Response(json_response)

    def post(self, request, *args, **kwargs):
        posts_serializer = ImageUploadSerializer(data=request.data)

        if posts_serializer.is_valid():
            posts_serializer.save()
            return Response(posts_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', posts_serializer.errors)
            return Response(posts_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

