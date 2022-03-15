from librelingo_types.data_types import Course, Skill
from librelingo_utils import calculate_number_of_levels, get_opaque_id

from .challenges import _get_challenges_data


def _get_skill_data(skill: Skill, course: Course):
    """
    Format Course according to the JSON structure
    """

    return {
        "id": get_opaque_id(skill, "Skill"),
        "levels": calculate_number_of_levels(len(skill.words), len(skill.phrases)),
        "challenges": _get_challenges_data(skill, course),
    }
