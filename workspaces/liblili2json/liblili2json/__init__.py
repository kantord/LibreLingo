"""
Export LibreLingo courses in the JSON format expected by the web app
"""

import itertools
from slugify import slugify
from .types import *
from .utils import *
from .dictionary import *

__version__ = '0.1.0'


def calculate_number_of_levels(nwords, nphrases):
    """
    Calculates how many levels a skill should have
    """
    return round(1 + (nwords / 7) + (nphrases / 5))


def get_module_summary(module):
    """
    Get a module summary for the course meta data
    """

    def get_imageset(images):
        if images and len(images) == 3 and all(images):
            return {"imageSet": images}
        else:
            return {}

    def get_summary(words, phrases):
        words = [word.in_target_language[0] for word in words]
        phrases = [phrase.in_target_language[0] for phrase in phrases]

        return words + phrases

    def get_levels(words, phrases):
        return calculate_number_of_levels(len(words), len(phrases))

    return {
        "title": module.title,
        "skills": [
            {
                **(get_imageset(skill.image_set)),
                "summary": get_summary(skill.words, skill.phrases),
                "practiceHref": slugify(skill.name),
                "id": get_opaque_id(skill, "Skill"),
                "title": skill.name,
                "levels": get_levels(skill.words, skill.phrases),
            } for skill in module.skills
        ]
    }


def get_course_data(course):
    """
    Format Course according to the JSON structure
    """

    return {
        "languageName": course.language_name,
        "languageCode": course.language_code,
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


def get_listening_challenge(source, course):
    return {
        "type": "listeningExercise",
        "answer": source.in_target_language[0],
        "meaning": source.in_source_language[0],
        "audio": audio_id(course.language_name,
                          source.in_target_language[0]),
        "id": get_dumb_opaque_id("Word", source, "listeningExercise"),
        "priority": 1,
        "group": get_dumb_opaque_id("Group", source),
    }


def get_short_input_challenge(source, course):
    return {
        "type": "shortInput",
        'pictures': source.pictures,
        "formInTargetLanguage": source.in_target_language,
        "phrase": define_words_in_sentence(course, source.in_source_language[0], reverse=False),
        "id": get_dumb_opaque_id("Word", source, "shortInput"),
        "priority": 1,
        "group": get_dumb_opaque_id("Group", source),
    }


def get_cards_challenge(word, _):
    return {
        "type": "cards",
        'pictures': word.pictures,
        "formInTargetLanguage": word.in_target_language[0],
        "meaningInSourceLanguage": word.in_source_language[0],
        "id": get_dumb_opaque_id("Word", word, "cards"),
        "priority": 0,
        "group": get_dumb_opaque_id("Group", word),
    }


def get_options_challenge(phrase, _):
    return {
        "type": "options",
        "formInTargetLanguage": phrase.in_target_language[0],
        "meaningInSourceLanguage": phrase.in_source_language[0],
        "id": get_dumb_opaque_id("Options", phrase, "options"),
        "priority": 0,
        "group": get_dumb_opaque_id("Group", phrase),
    }


def get_chips(phrase):
    return list(map(clean_word, phrase.split()))


def create_chips_challenge_generator(reverse):
    def get_input_texts(phrase):
        return phrase.in_source_language if reverse else phrase.in_target_language

    def get_phrase_texts(phrase):
        return phrase.in_target_language if reverse else phrase.in_source_language

    def get_input_text(phrase):
        return get_input_texts(phrase)[0]

    def get_phrase_text(phrase):
        return get_phrase_texts(phrase)[0]

    def get_chips_challenge(phrase, course):
        return {
            "type": "chips",
            "translatesToSourceLanguage": reverse,
            "phrase": define_words_in_sentence(course, get_phrase_text(phrase), reverse),
            "chips": get_chips(get_input_text(phrase)),
            "solutions": [get_chips(x) for x in get_input_texts(phrase)],
            "formattedSolution": get_input_text(phrase),
            "id": get_dumb_opaque_id("Chips", phrase, "reverse chips" if reverse else "chips"),
            "priority": 2,
            "group": get_dumb_opaque_id("Group", phrase),
        }

    return get_chips_challenge


get_chips_challenge = create_chips_challenge_generator(False)
get_reverse_chips_challenge = create_chips_challenge_generator(True)


def challenge_mapper(challenge_types):
    def map_challenge_creators(item, course):
        return list(map(lambda f: f(item, course), challenge_types))

    return map_challenge_creators


def is_long_enough_to_have_chips(phrase):
    if len(phrase.in_source_language[0].split()) < 2:
        return False
    if len(phrase.in_target_language[0].split()) < 2:
        return False
    return True


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


def make_challenges_using(callback, data_source, course):
    return list(itertools.chain(
        *map(lambda item: callback(item, course), data_source)))


def get_challenges_data(skill, course):
    return sum([
        make_challenges_using(get_phrase_challenges, skill.phrases, course),
        make_challenges_using(get_word_challenges, skill.words, course),
    ], start=[])


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
