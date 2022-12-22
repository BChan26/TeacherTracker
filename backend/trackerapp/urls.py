from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('students/', views.StudentList.as_view(), name='student_list'),
    path('students/<int:pk>', views.StudentDetail.as_view(), name='student-detail'),
    path('trackers/', views.TrackerList.as_view(), name="tracker_list"),
    path('trackers/<int:pk>', views.TrackerDetail.as_view(), name="tracker-detail"),
    path('thoughts/', views.ThoughtList.as_view(), name="thought_list"),
    path('thoughts/<int:pk>', views.ThoughtDetail.as_view(), name="thought-detail"),
    # path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
