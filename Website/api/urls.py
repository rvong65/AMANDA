from django.urls import path
from .views import TextView, ImageUploadView

urlpatterns = [
    path('text/', TextView.as_view()),
    path('post/', ImageUploadView.as_view())
]