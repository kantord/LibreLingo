import itertools
from .challenge_types import *


def make_challenges_using(callback, data_source, course):
    return list(itertools.chain(
        *map(lambda item: callback(item, course), data_source)))


def get_challenges_data(skill, course):
    return sum([
        make_challenges_using(get_phrase_challenges, skill.phrases, course),
        make_challenges_using(get_word_challenges, skill.words, course),
    ], start=[])


def get_phrase_challenges(phrase, course):
    return challenge_mapper([
        get_options_challenge,
        get_listening_challenge,
        *(
            [get_chips_challenge, get_reverse_chips_challenge]
            if is_long_enough_to_have_chips(phrase) else [])
    ]
    )(phrase, course)


def get_word_challenges(word, course):
    return challenge_mapper([
        get_cards_challenge,
        get_short_input_challenge,
        get_listening_challenge]
    )(word, course)


def challenge_mapper(challenge_types):
    def map_challenge_creators(item, course):
        return list(map(lambda f: f(item, course), challenge_types))

    return map_challenge_creators
