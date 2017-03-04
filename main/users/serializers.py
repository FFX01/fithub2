from django.contrib.auth import get_user_model
from rest_framework.serializers import HyperlinkedModelSerializer
from dry_rest_permissions.generics import DRYPermissionsField


User = get_user_model()


class UserSerializer(HyperlinkedModelSerializer):
    permissions = DRYPermissionsField()

    class Meta:
        model = User
        fields = (
            'id', 'username', 'bio', 'permissions',
            'date_joined', 'created_exercises', 'created_routines'
        )
