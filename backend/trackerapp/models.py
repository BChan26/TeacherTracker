from django.db import models

# Create your models here.
class Student(models.Model):
    studentname = models.CharField(max_length=100)
    gradesection = models.CharField(max_length=100)
    cst = models.BooleanField(blank=True)
    icap = models.BooleanField(blank=True)
    ell = models.BooleanField(blank=True)
    iep = models.BooleanField(blank=True)
    a504 = models.BooleanField(blank=True)

    def __str__(self):
        return self.studentname


class Tracker(models.Model):
    student = models.ForeignKey(
        Student, on_delete=models.CASCADE, related_name="tracker", null = True, blank = True)

    trackername = models.CharField(max_length=100)
    datetime = models.DateTimeField(null=True)
    ontask = models.BooleanField(blank=True)
    followexpectation = models.BooleanField(blank=True)
    askforhelp = models.BooleanField(blank=True)
    comments = models.TextField(blank=True)

    def __str__(self):
        return self.trackername

class Thought(models.Model):
    thought = models.TextField(blank=False)
    datetime = models.DateTimeField(null=True)

    def __str__(self):
        return self.thought