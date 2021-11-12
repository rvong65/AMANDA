from django.urls import path
from .views import ImageUploadView

urlpatterns = [
    path('', TextView.as_view()),
    path('text/', SendMessageView.as_view()),
    path('post/', ImageUploadView.as_view())
]
