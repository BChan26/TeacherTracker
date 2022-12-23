from rest_framework import serializers
from .models import Student, Tracker, Thought


class TrackerSerializer(serializers.HyperlinkedModelSerializer):
    student = serializers.HyperlinkedRelatedField(
        view_name='student-detail',
        read_only=True
    )

    class Meta:
        model = Tracker
        fields = ('id', 'trackername', 'datetime', 'ontask','followexpectation', 'askforhelp', 'comments', 'student',
        )



class StudentSerializer(serializers.HyperlinkedModelSerializer):
    # tracker = serializers.HyperlinkedRelatedField(
    #     view_name='tracker-detail',
    #     many=True,
    #     read_only=True
    # )

    tracker = TrackerSerializer(
        many=True,
        read_only=True
    )

    class Meta:
        model = Student
        fields = ('id', 'studentname', 'gradesection', 'cst', 'icap', 'ell', 'iep', 'a504', 'tracker',
        )



class ThoughtSerializer(serializers.HyperlinkedModelSerializer):

    class Meta: 
        model = Thought
        fields = ('id', 'thought',)