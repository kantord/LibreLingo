from django.contrib import admin
from django import forms
from adminsortable2.admin import SortableInlineAdminMixin

from .models import LearnWord
from .models import LearnSentence
from .models import Course
from .models import Module
from .models import Skill


class SkillForm(forms.ModelForm):
    class Meta:
        model = Skill
        exclude = []
        widgets = {
            'name': forms.TextInput()
        }


class SkillInline(SortableInlineAdminMixin, admin.StackedInline):
    model = Skill
    form = SkillForm
    show_change_link = True


class ModuleForm(forms.ModelForm):
    class Meta:
        model = Module
        exclude = []
        widgets = {
            'name': forms.TextInput()
        }


class ModuleAdmin(admin.ModelAdmin):
    inlines = [
        SkillInline,
    ]
    form = ModuleForm
    list_display = ('name', )

admin.site.register(Module, ModuleAdmin)


class ModuleInline(SortableInlineAdminMixin, admin.TabularInline):
    model = Module
    form = ModuleForm
    show_change_link = True

class CourseForm(forms.ModelForm):
    class Meta:
        model = Skill
        exclude = []
        widgets = {
            'language_name': forms.TextInput(),
            'source_language_name': forms.TextInput()
        }


class CourseAdmin(admin.ModelAdmin):
    inlines = [
        ModuleInline,
    ]
    form = CourseForm
    list_display = ('language_name', 'source_language_name')

admin.site.register(Course, CourseAdmin)

class LearnWordForm(forms.ModelForm):
    class Meta:
        model = LearnWord
        exclude = []
        widgets = {
            'meaningInSourceLanguage': forms.TextInput(),
            'formInTargetLanguage': forms.TextInput()
        }


class LearnSentenceForm(forms.ModelForm):
    class Meta:
        model = LearnSentence
        exclude = []
        widgets = {
            'meaningInSourceLanguage': forms.TextInput(),
            'formInTargetLanguage': forms.TextInput()
        }

class LearnWordInline(admin.TabularInline):
    model = LearnWord
    form = LearnWordForm
    show_change_link = True


class LearnSentenceInline(admin.TabularInline):
    model = LearnSentence
    form = LearnSentenceForm
    show_change_link = True


class LearnSentenceAdmin(admin.ModelAdmin):
    form = LearnSentenceForm
    list_display = ('formInTargetLanguage', )


admin.site.register(LearnSentence, LearnSentenceAdmin)


class SkillAdmin(admin.ModelAdmin):
    inlines = [
        LearnWordInline, LearnSentenceInline
    ]
    form = SkillForm
    list_display = ('name', )


class LearnWordAdmin(admin.ModelAdmin):
    form = LearnWordForm
    list_display = ('formInTargetLanguage', )


admin.site.register(Skill, SkillAdmin)


admin.site.register(LearnWord, LearnWordAdmin)
