"""
Export LibreLingo courses in the JSON format expected by the web app
"""

from collections import namedtuple
from slugify import slugify

__version__ = '0.1.0'

Course = namedtuple("Course", [
    "language_name",
    "language_code",
    "special_characters",
    "modules",
])

Module = namedtuple("Module", [
    "title",
    "skills",
])

Skill = namedtuple("Skill", [
    "name",
    "id",
    "words",
    "phrases",
    "image_set"
])

Word = namedtuple("Word", [
    "in_target_langauge",
    "in_source_langauge",
])

Phrase = namedtuple("Phrase", [
    "in_target_langauge",
    "in_source_langauge",
])


def get_module_summary(module):
    """
    Get a module summary for the course meta data
    """

    def get_imageset(images):
        return {"imageSet": images} if images else {}

    def get_summary(words):
        return [word.in_target_langauge for word in words]

    return {
        "title": module.title,
        "skills": [
            {
                "title": skill.name,
                "practiceHref": slugify(skill.name),
                "summary": get_summary(skill.words),
                **(get_imageset(skill.image_set))
            } for skill in module.skills
        ]
    }


def get_course_data(course):
    """
    Format Course according to the JSON structure
    """

    return {
        "languageName": course.language_name,
        "languageCode": course.language_code,
        "specialCharacters": course.special_characters,
        "modules": [
            get_module_summary(module) for module in course.modules
        ]
    }
