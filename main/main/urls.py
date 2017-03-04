"""main URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from rest_framework.routers import DefaultRouter
from rest_framework_jwt import views as jwt_views
from djoser import views as djoser_views

from users.views import UserViewSet
from exercises.views import ExerciseViewSet
from programs.views import ProgramViewSet
from routines.views import RoutineViewSet, SetGroupViewSet, SetViewSet


router = DefaultRouter()

router.register(r'users', UserViewSet)
router.register(r'exercises', ExerciseViewSet)
router.register(r'programs', ProgramViewSet)
router.register(r'routines', RoutineViewSet)
router.register(r'set_groups', SetGroupViewSet)
router.register(r'sets', SetViewSet)

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^auth/sign-in/$', jwt_views.obtain_jwt_token),
    url(r'^auth/sign-up/$', djoser_views.RegistrationView.as_view()),
    url(r'^auth/password/reset/$', djoser_views.PasswordResetView.as_view()),
    url(r'^auth/password/reset/confirm/$', djoser_views.PasswordResetConfirmView.as_view()),
    url(r'^auth/me', djoser_views.UserView.as_view()),
    url(r'^', include(router.urls))
]
