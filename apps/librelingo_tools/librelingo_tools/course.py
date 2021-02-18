from .module import get_module_summary


def get_course_data(course):
    """
    Format Course according to the JSON structure
    """

    return {
        "languageName": course.target_language.name,
        "languageCode": course.target_language.code,
        "specialCharacters": course.special_characters,
        "license": {
            "name": {
                "short": course.license.name,
                "full": course.license.full_name,

            },
            "link": course.license.link,
        },
        "modules": [
            get_module_summary(module) for module in course.modules
        ]
    }
