from rest_framework.viewsets import ModelViewSet
from dry_rest_permissions.generics import DRYPermissions
from .models import Program
from .serializers import ProgramSerializer


class ProgramViewSet(ModelViewSet):
    permission_classes = (DRYPermissions, )
    queryset = Program.objects.all()
    serializer_class = ProgramSerializer
    filter_fields = ('creator', )
