from django.contrib import admin

from .models import Routine


@admin.register(Routine)
class RoutineAdmin(admin.ModelAdmin):
    pass
