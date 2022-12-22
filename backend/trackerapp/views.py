from rest_framework import generics
from django.shortcuts import render
from .models import Student, Tracker, Thought
from .serializers import StudentSerializer, TrackerSerializer, ThoughtSerializer
# Create your views here.

