from django.contrib import admin

from .models import LearnWord
from .models import Course
from .models import Module
from .models import Skill

admin.site.register(LearnWord)
admin.site.register(Course)
admin.site.register(Module)
admin.site.register(Skill)
