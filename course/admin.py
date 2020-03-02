from django.contrib import admin
from django import forms
from adminsortable2.admin import SortableInlineAdminMixin
from subadmin import SubAdmin, RootSubAdmin
from django.utils.safestring import mark_safe
from django.urls import reverse

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


class LearnSentenceForm(forms.ModelForm):
    class Meta:
        model = LearnSentence
        exclude = []
        widgets = {
            'meaningInSourceLanguage': forms.TextInput(),
            'formInTargetLanguage': forms.TextInput()
        }


class LearnSentenceAdmin(admin.ModelAdmin):
    form = LearnSentenceForm
    list_display = ('formInTargetLanguage', )


class LearnWordForm(forms.ModelForm):
    class Meta:
        model = LearnWord
        exclude = []
        widgets = {
            'meaningInSourceLanguage': forms.TextInput(),
            'formInTargetLanguage': forms.TextInput()
        }


class SkillInline(SortableInlineAdminMixin, admin.StackedInline):
    model = Skill
    form = SkillForm
    show_change_link = True
    readonly_fields = ('change_link',)
    def change_link(self, obj):
        if not obj.id:
            return ""
        return mark_safe('<a href="%s">Edit</a>' % \
         ("/admin/course/course/%s/module/%s/skill/%s/change/" % (obj.module.id, obj.module.id, obj.id)))


class LearnWordInline(admin.TabularInline):
    model = LearnWord
    form = LearnWordForm
    show_change_link = True


class LearnSentenceInline(admin.TabularInline):
    model = LearnSentence
    form = LearnSentenceForm
    show_change_link = True


class SkillAdmin(SubAdmin):
    inlines = [
        LearnWordInline, LearnSentenceInline
    ]
    model = Skill
    form = SkillForm
    list_display = ('name', )


class ModuleForm(forms.ModelForm):
    class Meta:
        model = Module
        exclude = []
        widgets = {
            'name': forms.TextInput()
        }


class ModuleAdmin(SubAdmin):
    model = Module
    subadmins = [SkillAdmin]
    form = ModuleForm
    inlines = [
        SkillInline,
    ]
    list_display = ('name', )


class ModuleInline(SortableInlineAdminMixin, admin.TabularInline):
    model = Module
    form = ModuleForm
    show_change_link = True
    readonly_fields = ('change_link',)
    list_display = ('change_link' )
    def change_link(self, obj):
        if not obj.id:
            return ""
        return mark_safe('<a href="%s">Edit</a>' % \
         ("/admin/course/course/%s/module/%s/change/" % (obj.course.id, obj.id)))


class CourseForm(forms.ModelForm):
    class Meta:
        model = Skill
        exclude = []
        widgets = {
            'language_name': forms.TextInput(),
            'source_language_name': forms.TextInput(),
            'target_language_code': forms.TextInput(),
        }


class CourseAdmin(RootSubAdmin):
    form = CourseForm
    list_display = ('language_name', 'source_language_name')
    inlines = [
        ModuleInline,
    ]
    subadmins = [ModuleAdmin]


admin.site.register(Course, CourseAdmin)


class LearnWordAdmin(admin.ModelAdmin):
    form = LearnWordForm
    list_display = ('formInTargetLanguage', )

