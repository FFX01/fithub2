from .models import Program
from rest_framework.serializers import HyperlinkedModelSerializer
from dry_rest_permissions.generics import DRYPermissionsField


class ProgramSerializer(HyperlinkedModelSerializer):
    permissions = DRYPermissionsField()

    class Meta:
        model = Program
        fields = (
            'id', 'name', 'creator', 'routines',
            'permissions', 'description', 'created',
            'updated'
        )
