from django.db import models
from django.conf import settings


class Program(models.Model):
    name = models.CharField(
        blank=False,
        max_length=200
    )
    creator = models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        blank=False,
        null=False,
        related_name='created_programs'
    )
    description = models.TextField()
    created = models.DateTimeField(
        auto_now_add=True
    )
    updated = models.DateTimeField(
        auto_now=True
    )

    @staticmethod
    def has_read_permission(request):
        return True

    def has_object_read_permission(self, request):
        return True

    @staticmethod
    def has_write_permission(request):
        return request.user.is_authenticated()

    def has_object_write_permission(self, request):
        return request.user.id == self.creator.id
