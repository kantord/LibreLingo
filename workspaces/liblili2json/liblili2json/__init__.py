"""
Export LibreLingo courses in the JSON format expected by the web app
"""

from collections import namedtuple

__version__ = '0.1.0'

Course = namedtuple("Course", [
    "language_name",
    "language_code",
    "special_characters",
    "modules"
])

Module = namedtuple("Module", [
    "title",
    "skills",
])


def get_module_summary(module):
    return {
        "title": module.title
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
