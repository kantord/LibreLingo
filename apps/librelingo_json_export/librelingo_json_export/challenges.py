import itertools
from .challenge_types import *


def make_challenges_using(callback, data_source, course):
    """
        Calls a callback function with an item (Word or Phrase)
        to create challenges. Each item in the data source will
        be used.
    """
    results = []
    for data_item in data_source:
        for challenge in callback(data_item, course):
            results.append(challenge)

    return results


def challenge_mapper(challenge_types):
    """
        Returns a function that applies challenge types
        to a certain item (Word or Phrase), using the settings
        of the given course.
    """
    def map_challenge_creators(item, course):
        challenges = []
        for challenge_type_callback in challenge_types:
            for challenge in challenge_type_callback(item, course):
                challenges.append(challenge)

        return challenges


    return map_challenge_creators


def _get_phrase_challenges(phrase, course):
    "Generate challenges based on a Phrase"
    return challenge_mapper([
        get_options_challenge,
        get_listening_challenge,
        *(
            [get_chips_challenge, get_reverse_chips_challenge]
            if is_long_enough_to_have_chips(phrase) else [])
    ]
    )(phrase, course)


def _get_word_challenges(word, course):
    "Generate challenges based on a Word"
    return challenge_mapper([
        get_cards_challenge,
        get_short_input_challenge,
        get_listening_challenge]
    )(word, course)


def get_challenges_data(skill, course):
    """
        Generates challenges for a certain Skill
    """
    return sum([
        make_challenges_using(_get_phrase_challenges, skill.phrases, course),
        make_challenges_using(_get_word_challenges, skill.words, course),
    ], start=[])
