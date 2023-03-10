from rest_framework import generics
from django.shortcuts import render
from .models import Student, Tracker, Thought
from .serializers import StudentSerializer, TrackerSerializer, ThoughtSerializer


# Create your views here.

class StudentList (generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class StudentDetail (generics.RetrieveUpdateDestroyAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class TrackerList (generics.ListCreateAPIView):
    queryset = Tracker.objects.all()
    serializer_class = TrackerSerializer

class TrackerDetail (generics.RetrieveUpdateDestroyAPIView):
    queryset = Tracker.objects.all()
    serializer_class = TrackerSerializer

class ThoughtList (generics.ListCreateAPIView):
    queryset = Thought.objects.all()
    serializer_class = ThoughtSerializer

class ThoughtDetail (generics.RetrieveUpdateDestroyAPIView):
    queryset = Thought.objects.all()
    serializer_class = ThoughtSerializer