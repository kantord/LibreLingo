"""
Export LibreLingo courses in the JSON format expected by the web app
"""

import hashlib
import itertools
from slugify import slugify
from .types import Course, License, Module, Skill, Word, Phrase

__version__ = '0.1.0'


def get_dumb_opaque_id(name, id_, salt=""):
    """
    Generate a unique, opaque ID based on a name, and id_ and a salt
    id
    """
    sha256 = hashlib.sha256()
    sha256.update((name +
                   str(id_) + salt).encode('utf-8'))

    return sha256.hexdigest()[0:12]


def get_opaque_id(obj, salt=""):
    """
    Generate a unique, opaque ID based on a type and a type specific
    id
    """
    return get_dumb_opaque_id(type(obj).__name__.lower(), str(obj.id), salt)


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
        words = [word.in_target_langauge for word in words]
        phrases = [phrase.in_target_langauge for phrase in phrases]

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


def get_cards_challenge(word):
    return {
        "type": "cards",
        'pictures': word.pictures,
        "formInTargetLanguage": word.in_target_langauge,
        "meaningInSourceLanguage": word.in_source_langauge,
        "priority": 0,
        "group": get_dumb_opaque_id("Word", word),
        "id": get_dumb_opaque_id("Word", word, "cards")
    }


def get_phrase_challenges(phrase):
    return []


def get_word_challenges(word):
    return [get_cards_challenge(word)]


def make_challenges_using(callback, data_source):
    return list(itertools.chain(*map(callback, data_source)))


def get_challenges_data(skill):
    return sum([
        make_challenges_using(get_phrase_challenges, skill.phrases),
        make_challenges_using(get_word_challenges, skill.words),
    ], start=[])


def get_skill_data(skill):
    """
    Format Course according to the JSON structure
    """

    return {
        "id": get_opaque_id(skill, "Skill"),
        "levels": calculate_number_of_levels(
            len(skill.words), len(skill.phrases)),
        "challenges": get_challenges_data(skill),
    }
