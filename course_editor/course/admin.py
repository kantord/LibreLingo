from django.contrib import admin

from .models import LearnWord
from .models import Course
from .models import Module
from .models import Skill


class SkillInline(admin.TabularInline):
    model = Skill


class ModuleAdmin(admin.ModelAdmin):
    inlines = [
        SkillInline,
    ]

admin.site.register(Module, ModuleAdmin)


class ModuleInline(admin.TabularInline):
    model = Module


class CourseAdmin(admin.ModelAdmin):
    inlines = [
        ModuleInline,
    ]

admin.site.register(Course, CourseAdmin)

class LearnWordInline(admin.TabularInline):
    model = LearnWord


class SkillAdmin(admin.ModelAdmin):
    inlines = [
        LearnWordInline
    ]


admin.site.register(Skill, SkillAdmin)


admin.site.register(LearnWord)
