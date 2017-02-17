from rest_framework.viewsets import ModelViewSet
from dry_rest_permissions.generics import DRYPermissions

from .models import Exercise
from .serializers import ExerciseSerializer


class ExerciseViewSet(ModelViewSet):
    permission_classes = (DRYPermissions, )
    queryset = Exercise.objects.all()
    serializer_class = ExerciseSerializer
    filter_fields = ('creator', 'programs')
