import django_filters

# from django.contrib.auth.models import Tracker
from .models import Student, Tracker

# class StudentFilter(django_filters.FilterSet):
#     name = django_filters.CharFilter(lookup_expr='iexact')
    
#     class Meta: 
#         model = Student
#         fields = ['studentname', 'gradesection', 'cst', 'icap', 'ell', 'iep', 'a504']


class TrackerFilter(django_filters.FilterSet):
    name = django_filters.CharFilter(lookup_expr='iexact')
    
    class Meta: 
        model = Tracker
        fields = {'trackername': ['exact']}