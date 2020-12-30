import logging
import json
from pathlib import Path
from slugify import slugify
from .skills import get_skill_data

logger = logging.getLogger("liblili2json")


def export_course_skills(export_path, course):
    """
        Writes every skill in a course into separate JSON files.
        You probably don't need to call this function directly, because you
        can export the entire course as a whole into a JSON using export_course
    """
    for module in course.modules:
        for skill in module.skills:
            export_skill(export_path, skill, course)


def export_skill(export_path, skill, course):
    """
        Writes the given skill to a JSON file in the specified path.
        You probably don't need to call this function directly, because you
        can export the entire course as a whole into a JSON using export_course
    """
    logger.info("Writing skill {}".format(repr(skill.name)))
    skill_data = get_skill_data(skill, course)
    slug = slugify(skill.name)
    Path(Path(export_path) / "challenges").mkdir(parents=True, exist_ok=True)
    with open(Path(export_path) / "challenges" / "{}.json".format(slug), 'w', encoding='utf-8') as f:
        json.dump(skill_data, f, ensure_ascii=False, indent=2)
