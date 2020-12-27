from .utils import get_opaque_id, calculate_number_of_levels
from .challenges import get_challenges_data


def get_skill_data(skill, course):
    """
    Format Course according to the JSON structure
    """

    return {
        "id": get_opaque_id(skill, "Skill"),
        "levels": calculate_number_of_levels(
            len(skill.words), len(skill.phrases)),
        "challenges": get_challenges_data(skill, course),
    }
