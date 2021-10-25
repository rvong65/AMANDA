from django.shortcuts import render
from rest_framework import generics, status
from .models import TextArea
from .serializers import TextSerializer, SendMessageSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class TextView(generics.CreateAPIView):
    queryset = TextArea.objects.all()
    serializer_class = TextSerializer

class SendMessageView(APIView):
    serializer_class = SendMessageSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            user_msg = serializer.data.user_msg
            queryset = TextArea.objects.filter()

            if queryset.exists():
                text=queryset[0]
                text.user_msg = user_msg
                text.save(update_fields=['user_msg'])
            else:
                text = TextArea(user_msg=user_msg)

            return Response(TextSerializer(text).data, status=status.HTTP_200_OK)