from django.db import models
from django.conf import settings


TIME_UNIT_CHOICES = (
    ('sec', 'Seconds'),
    ('min', 'Minutes'),
    ('hr', 'Hours'),
    ('d', 'days')
)


WEIGHT_UNIT_CHOICES = (
    ('lbs', 'Pounds'),
    ('kgs', 'Kilograms')
)


class Routine(models.Model):
    name = models.CharField(
        max_length=200,
        blank=True
    )
    order = models.PositiveIntegerField(
        blank=False
    )
    created = models.DateTimeField(
        auto_now_add=True,
        editable=False
    )
    updated = models.DateTimeField(
        auto_now=True,
        editable=False
    )
    creator = models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        blank=False,
        null=False,
        related_name='created_routines'
    )
    program = models.ForeignKey(
        to='programs.Program',
        blank=False,
        null=False,
        related_name='routines'
    )

    def __str__(self):
        return "{0}: {1}".format(
            self.order, self.name
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


class SetGroup(models.Model):
    name = models.CharField(
        blank=True,
        max_length=200
    )
    order = models.PositiveIntegerField(
        blank=False
    )
    created = models.DateTimeField(
        auto_now_add=True,
        editable=False
    )
    updated = models.DateTimeField(
        auto_now=True,
        editable=False
    )
    creator = models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        blank=False,
        null=False,
        related_name='created_set_groups'
    )
    routine = models.ForeignKey(
        to='routines.Routine',
        blank=False,
        null=False,
        related_name='set_groups'
    )

    def __str__(self):
        return "{}: {}".format(
            self.order, self.name
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


class Set(models.Model):
    name = models.CharField(
        max_length=200,
        blank=True
    )
    order = models.PositiveIntegerField(
        blank=False
    )
    created = models.DateTimeField(
        auto_now_add=True,
        editable=False
    )
    updated = models.DateTimeField(
        auto_now=True,
        editable=False
    )
    creator = models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        blank=False,
        related_name='created_sets'
    )
    group = models.ForeignKey(
        to='routines.SetGroup',
        blank=False,
        related_name='sets'
    )
    exercise = models.ForeignKey(
        to='exercises.Exercise',
        blank=False,
        related_name='sets'
    )
    reps = models.PositiveIntegerField(
        blank=True,
        default=0
    )
    time = models.PositiveIntegerField(
        blank=True,
        default=0
    )
    time_units = models.CharField(
        blank=True,
        max_length=3,
        choices=TIME_UNIT_CHOICES
    )
    weight = models.PositiveIntegerField(
        blank=True,
        default=0
    )
    weight_units = models.CharField(
        blank=True,
        max_length=3,
        choices=WEIGHT_UNIT_CHOICES
    )

    def __str__(self):
        return "{}: {}".format(
            self.order, self.name
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
