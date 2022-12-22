from django.contrib import admin
from .models import Student, Tracker, Thought

# Register your models here.
admin.site.register(Student)
admin.site.register(Tracker)
admin.site.register(Thought)