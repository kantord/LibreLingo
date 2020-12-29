import logging
import json
from pathlib import Path
from slugify import slugify
from .skills import get_skill_data

logger = logging.getLogger("liblili2json")


def export_skill(export_path, skill, course):
    logger.info("Writing skill {}".format(repr(skill.name)))
    skill_data = get_skill_data(skill, course)
    slug = slugify(skill.name)
    Path(Path(export_path) / "challenges").mkdir(parents=True, exist_ok=True)
    with open(Path(export_path) / "challenges" / "{}.json".format(slug), 'w', encoding='utf-8') as f:
        json.dump(skill_data, f, ensure_ascii=False, indent=2)
