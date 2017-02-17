from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    bio = models.TextField(
        blank=True
    )

    @staticmethod
    def has_read_permission(request):
        return True

    def has_object_read_permission(self, request):
        return True

    @staticmethod
    def has_write_permission(request):
        return True

    def has_object_write_permission(self, request):
        return request.user.id == self.id
