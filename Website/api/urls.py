from django.urls import path
from .views import TextView, SendMessageView, ImageUploadView

urlpatterns = [
    path('', TextView.as_view()),
    path('text/', SendMessageView.as_view()),
    path('post/', ImageUploadView.as_view())
]
