from librelingo_types.data_types import Course

from .module import _get_module_summary


def _get_course_data(course: Course):
    """
    Format Course according to the JSON structure
    """

    return {
        "languageName": course.target_language.name,
        "languageCode": course.target_language.code,
        "specialCharacters": course.special_characters,
        "repositoryURL": course.repository_url,
        "license": {
            "name": {
                "short": course.license.name,
                "full": course.license.full_name,
            },
            "link": course.license.link,
        },
        "modules": [_get_module_summary(module) for module in course.modules],
    }
