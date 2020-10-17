from collections import namedtuple

__version__ = '0.1.0'

Course = namedtuple("Course", [
    "language_name",
    "language_code",
    "special_characters",
])


def get_course_data(course):
    return {
        "languageName": course.language_name,
        "languageCode": course.language_code,
        "specialCharacters": course.special_characters
    }
