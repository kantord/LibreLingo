import json
from pathlib import Path
from slugify import slugify
from .skills import get_skill_data


def export_skill(export_path, skill, course):
    skill_data = get_skill_data(skill, course)
    slug = slugify(skill.name)
    Path(Path(export_path) / "challenges").mkdir(parents=True, exist_ok=True)
    with open(Path(export_path) / "challenges" / "{}.json".format(slug), 'w', encoding='utf-8') as f:
        json.dump(skill_data, f, ensure_ascii=False, indent=2)
