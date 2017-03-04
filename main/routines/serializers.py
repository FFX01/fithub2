from rest_framework.serializers import HyperlinkedModelSerializer
from dry_rest_permissions.generics import DRYPermissionsField

from .models import Routine, SetGroup, Set


class RoutineSerializer(HyperlinkedModelSerializer):
    permissions = DRYPermissionsField()

    class Meta:
        model = Routine
        fields = (
            'id', 'name', 'order', 'created',
            'updated', 'program', 'permissions',
            'creator', 'set_groups'
        )


class SetGroupSerializer(HyperlinkedModelSerializer):
    permissions = DRYPermissionsField()

    class Meta:
        model = SetGroup
        fields = (
            'id', 'name', 'order', 'created',
            'updated', 'creator', 'routine',
            'sets', 'permissions'
        )


class SetSerializer(HyperlinkedModelSerializer):
    permissions = DRYPermissionsField()

    class Meta:
        model = Set
        fields = (
            'id', 'name', 'order', 'created', 'updated',
            'creator', 'group', 'exercise', 'reps',
            'time', 'time_units', 'weight', 'weight_units',
            'permissions'
        )
