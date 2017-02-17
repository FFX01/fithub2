from django.contrib.auth import get_user_model
from rest_framework.viewsets import ModelViewSet
from dry_rest_permissions.generics import DRYPermissions

from .serializers import UserSerializer


User = get_user_model()


class UserViewSet(ModelViewSet):
    permission_classes = (DRYPermissions, )
    queryset = User.objects.all()
    serializer_class = UserSerializer
