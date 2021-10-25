from django.urls import path
from .views import TextView

urlpatterns = [
    path('', TextView.as_view())
]