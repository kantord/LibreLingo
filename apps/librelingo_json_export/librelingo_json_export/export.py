import json
import logging
import io
from pathlib import Path

from librelingo_types.data_types import Course, Skill
from slugify import slugify

from librelingo_json_export.settings import DEFAULT_SETTINGS
from .course import _get_course_data
from .skills import _get_skill_data

logger = logging.getLogger("librelingo_json_export")


def _ensure_output_dir(output_file_path):
    output_file_path.parent.mkdir(parents=True, exist_ok=True)


def _prepare_output_path(output_file_path):
    _ensure_output_dir(output_file_path)
    return output_file_path


def _open_output_stream(output_file_path, settings):
    return (
        io.StringIO()
        if settings.dry_run
        else open(_prepare_output_path(output_file_path), "w", encoding="utf-8")
    )


def _save_as_json_file(data, output_file_path, settings):
    with _open_output_stream(output_file_path, settings) as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


def _export_course_skills(export_path: str, course: Course, settings=DEFAULT_SETTINGS):
    """
    Writes every skill in a course into separate JSON files.
    You probably don't need to call this function directly, because you
    can export the entire course as a whole into a JSON using export_course
    """
    for module in course.modules:
        for skill in module.skills:
            _export_skill(export_path, skill, course, settings)


def _export_skill(
    export_path: str, skill: Skill, course: Course, settings=DEFAULT_SETTINGS
):
    """
    Writes the given skill to a JSON file in the specified path.
    You probably don't need to call this function directly, because you
    can export the entire course as a whole into a JSON using export_course
    """
    logger.info("Writing skill %s", repr(skill.name))
    try:
        skill_data = _get_skill_data(skill, course)
    except Exception as error:
        raise RuntimeError(
            f'Error while exporting skill "{skill.name}" in file "{skill.filename}": {error}'
        ) from error
    slug = slugify(skill.name)
    _save_as_json_file(
        skill_data, Path(export_path) / "challenges" / f"{slug}.json", settings
    )

    if skill.introduction:
        with _open_output_stream(
            Path(export_path) / "introduction" / f"{slug}.md", settings
        ) as f:
            f.write(skill.introduction)


def _export_course_data(export_path: str, course: Course, settings=DEFAULT_SETTINGS):
    """
    Writes the metadata of a course to a JSON file in the specified path.
    You probably don't need to call this function directly, because you
    can export the entire course as a whole into a JSON using export_course
    """
    logger.info(
        "Writing course %s for %s speakers",
        course.target_language.name,
        course.source_language.name,
    )
    _save_as_json_file(
        _get_course_data(course), Path(export_path) / "courseData.json", settings
    )


def export_course(export_path: str, course: Course, settings=DEFAULT_SETTINGS):
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
