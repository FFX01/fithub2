from rest_framework.serializers import HyperlinkedModelSerializer
from dry_rest_permissions.generics import DRYPermissionsField

from .models import Exercise


class ExerciseSerializer(HyperlinkedModelSerializer):
    permissions = DRYPermissionsField()

    class Meta:
        model = Exercise
        fields = (
            'id', 'name', 'creator', 'description',
            'instructions', 'permissions', 'programs'
        )
