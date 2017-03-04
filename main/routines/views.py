from rest_framework.viewsets import ModelViewSet
from dry_rest_permissions.generics import DRYPermissions

from .models import Routine, SetGroup, Set
from .serializers import RoutineSerializer, SetGroupSerializer, SetSerializer


class RoutineViewSet(ModelViewSet):
    permission_classes = (DRYPermissions, )
    queryset = Routine.objects.all()
    serializer_class = RoutineSerializer
    filter_fields = (
        'order', 'creator', 'program'
    )


class SetGroupViewSet(ModelViewSet):
    permission_classes = (DRYPermissions, )
    queryset = SetGroup.objects.all()
    serializer_class = SetGroupSerializer
    filter_fields = (
        'order', 'creator', 'routine'
    )


class SetViewSet(ModelViewSet):
    permission_classes = (DRYPermissions, )
    queryset = Set.objects.all()
    serializer_class = SetSerializer
    filter_fields = (
        'order', 'creator', 'group',
        'exercise'
    )
