from rest_framework import serializers, status, generics
from .models import TextArea, ImageUpload
from .serializers import TextSerializer, SendMessageSerializer, ImageUploadSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
import torch, json, os
from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration

#Define Blenderbot
mname = 'facebook/blenderbot-400M-distill'
model = BlenderbotForConditionalGeneration.from_pretrained(mname)
tokenizer = BlenderbotTokenizer.from_pretrained(mname)

# Load yolo classifier
classifier = torch.hub.load('ultralytics/yolov5', 'custom', path='./media/yolov5_weights.pt')


# Create your views here.
#Generate messages
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
            inputs = tokenizer([message], return_tensors='pt')
            reply_ids = model.generate(**inputs)
            results = tokenizer.batch_decode(reply_ids, skip_special_tokens=True)[0]
            results_json = str(dict(response = results))
            queryset = TextArea.objects.filter()

            if queryset.exists():
                text = queryset[0]
                text.message = message
                text.save(update_fields=['message'])
            else:
                text = TextArea(message=message)
                text.save()

        return Response(results_json)

#Upload images
class ImageUploadView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        posts = ImageUpload.objects.all()
        serializer = ImageUploadSerializer(posts, many=True)

        # Get name of image name and concats it to fixed directory
        image_data = dict(serializer.data[len(serializer.data)-1]) # most recent upload
        img_path = "." + image_data["image"] 

        # Takes in an image path and returns a json file with the prediction
        results = classifier(img_path)
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

