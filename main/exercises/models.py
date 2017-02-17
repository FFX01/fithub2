from django.db import models
from django.conf import settings


class Exercise(models.Model):
    name = models.CharField(
        blank=False,
        max_length=200
    )
    creator = models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        blank=False,
        null=False,
        related_name='created_exercises'
    )
    description = models.TextField()
    instructions = models.TextField()

    def __str__(self):
        return self.name

    @staticmethod
    def has_read_permission(request):
        return True

    def has_object_read_permission(self, request):
        return True

    @staticmethod
    def has_write_permission(request):
        return request.user.is_authenticated()

    def has_object_write_permission(self, request):
        return request.user == self.creator
