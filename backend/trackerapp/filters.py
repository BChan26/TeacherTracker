import django_filters

from .models import Student, Tracker

class StudentFilter(django_filters.FilterSet):
    name = django_filters.CharFilter(lookup_expr='iexact')
    
    class Meta: 
        model = Student
        fields = ['studentname', 'gradesection', 'cst', 'icap', 'ell', 'iep', 'a504']