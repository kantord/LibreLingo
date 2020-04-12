import re
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
from .models import DictionaryItem
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
            'formInTargetLanguage': forms.TextInput(),
            'meaningInSourceLanguage2': forms.TextInput(),
            'formInTargetLanguage2': forms.TextInput()
        }


class SkillInline(SortableInlineAdminMixin, admin.StackedInline):
    model = Skill
    form = SkillForm
    show_change_link = True
    readonly_fields = ('change_link',)

    def change_link(self, obj):
        if not obj.id:
            return ""
        return mark_safe(
            '<a href="%s">Edit</a>' %
            ("/admin/course/course/%s/module/%s/skill/%s/change/" %
             (obj.module.id, obj.module.id, obj.id)))


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
    list_display = ('change_link')

    def change_link(self, obj):
        if not obj.id:
            return ""
        return mark_safe(
            '<a href="%s">Edit</a>' %
            ("/admin/course/course/%s/module/%s/change/" %
             (obj.course.id, obj.id)))


class DictionaryItemForm(forms.ModelForm):
    class Meta:
        model = DictionaryItem
        exclude = []
        widgets = {
            'word': forms.TextInput(),
            'definition': forms.Textarea(attrs={'rows':3, 'cols':45})
        }


class DictionaryIsEmptyFilter(admin.SimpleListFilter):
    title = '"Is defined?"'
    parameter_name = "todo"

    def lookups(self, request, model_admin):
        return (
            ("done", "Yes, is defined"),
            ("todo", "No, is not defined"),)

    def queryset(self, request, queryset):
        if self.value() == "done":
            return queryset.exclude(definition="")

        if self.value() == "todo":
            return queryset.filter(definition="")


class DictionaryReverseFilter(admin.SimpleListFilter):
    title = 'language'
    parameter_name = "reverse"

    def lookups(self, request, model_admin):
        course_id = re.match(
            "/admin/course/course/([0-9]+)/dictionaryitem/",
            request.path).group(1)
        course = Course.objects.get(pk=int(course_id))

        return (
            ("yes", course.source_language_name),
            ("no", course.language_name),)

    def queryset(self, request, queryset):
        if self.value() == "yes":
            return queryset.filter(reverse=True)

        if self.value() == "no":
            return queryset.filter(reverse=False)


class DictionaryItemAdmin(SubAdmin):
    model = DictionaryItem
    form = DictionaryItemForm
    list_display = ('word_', 'definition', )
    list_editable = ('definition', )
    readonly_fields = ["word", "reverse"]
    list_filter = (DictionaryReverseFilter, DictionaryIsEmptyFilter, )
    search_fields = ['word', 'definition']
    list_per_page = 10

    def get_changelist_form(self, request, **kwargs):
        kwargs.setdefault('form', DictionaryItemForm)
        return super(DictionaryItemAdmin, self).get_changelist_form(request, **kwargs)

    def word_(self, obj):
        lng = obj.course.source_language_name if obj.reverse else obj.course.language_name
        return "{} ({})".format(obj.word, lng)


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
    subadmins = [ModuleAdmin, DictionaryItemAdmin]


admin.site.register(Course, CourseAdmin)


class LearnWordAdmin(admin.ModelAdmin):
    form = LearnWordForm
    list_display = ('formInTargetLanguage', )
