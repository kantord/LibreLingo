import logging
import json
from pathlib import Path
from slugify import slugify
from .skills import _get_skill_data
from .course import _get_course_data

logger = logging.getLogger("librelingo_json_export")


def _export_course_skills(export_path, course, settings=None):
    """
        Writes every skill in a course into separate JSON files.
        You probably don't need to call this function directly, because you
        can export the entire course as a whole into a JSON using export_course
    """
    for module in course.modules:
        for skill in module.skills:
            _export_skill(export_path, skill, course, settings)


def _export_skill(export_path, skill, course, settings=None):
    """
        Writes the given skill to a JSON file in the specified path.
        You probably don't need to call this function directly, because you
        can export the entire course as a whole into a JSON using export_course
    """
    logger.info("Writing skill {}".format(repr(skill.name)))
    try:
        skill_data = _get_skill_data(skill, course)
    except Exception as error:
        raise RuntimeError(
            'Error while exporting skill "{}": {}'.format(skill.name, error))
    slug = slugify(skill.name)
    Path(Path(export_path) / "challenges").mkdir(parents=True, exist_ok=True)
    with open(Path(export_path) / "challenges" / "{}.json".format(slug), 'w', encoding='utf-8') as f:
        if settings is not None and settings.dry_run:
            json.dumps(skill_data, ensure_ascii=False, indent=2)
        else:
            json.dump(skill_data, f, ensure_ascii=False, indent=2)


def _export_course_data(export_path, course, settings=None):
    """
        Writes the metadata of a course to a JSON file in the specified path.
        You probably don't need to call this function directly, because you
        can export the entire course as a whole into a JSON using export_course
    """
    logger.info("Writing course {} for {} speakers".format(
        repr(course.target_language.name), repr(course.source_language.name)))
    course_data = _get_course_data(course)
    Path(Path(export_path)).mkdir(parents=True, exist_ok=True)
    with open(Path(export_path) / "courseData.json", 'w', encoding='utf-8') as f:
        if settings is not None and settings.dry_run:
            json.dumps(course_data, ensure_ascii=False, indent=2)
        else:
            json.dump(course_data, f, ensure_ascii=False, indent=2)


def export_course(export_path, course, settings=None):
    """
        Writes the course to JSON files in the specified path.
        
        ### Usage example:

        ```python
        from librelingo_yaml_loader import load_course
        from librelingo_json_export.export import export_course

        course = load_course("./courses/french-from-english")
        export_course("./apps/web/src/courses/french-from-english", course)
        ```
    """
    _export_course_data(export_path, course, settings)
    _export_course_skills(export_path, course, settings)
