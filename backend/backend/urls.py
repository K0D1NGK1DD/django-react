from django.contrib import admin;
from django.urls import path;
from core.views import *;

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", front, name="frontend"),
    path("", index.js),
    path("Blog", index),
    path("Archive", index),
    path("Bio", index)
]