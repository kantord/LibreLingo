"""
Export LibreLingo courses in the JSON format expected by the web app
"""

import hashlib
import itertools
import re
from slugify import slugify
from .types import Course, License, Module, Skill, Word, Phrase, DictionaryItem

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


def audio_id(language_id, text):
    hash = hashlib.sha256()
    hash.update((language_id + "|" + text).encode('utf-8'))
    return hash.hexdigest()


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


def get_listening_challenge(source, course):
    return {
        "type": "listeningExercise",
        "answer": source.in_target_langauge,
        "meaning": source.in_source_langauge,
        "priority": 1,
        "audio": audio_id(course.language_code,
                          source.in_target_langauge),
        "group": get_dumb_opaque_id("Word", source),
        "id": get_dumb_opaque_id("Word", source, "listeningExercise")
    }


def get_short_input_challenge(source, _):
    return {
        "type": "shortInput",
        "formInTargetLanguage": source.in_target_langauge,
        "phrase": source.in_source_langauge,
        "priority": 1,
        "group": get_dumb_opaque_id("Word", source),
        "id": get_dumb_opaque_id("Word", source, "shortInput")
    }


def get_cards_challenge(word, _):
    return {
        "type": "cards",
        'pictures': word.pictures,
        "formInTargetLanguage": word.in_target_langauge,
        "meaningInSourceLanguage": word.in_source_langauge,
        "priority": 0,
        "group": get_dumb_opaque_id("Word", word),
        "id": get_dumb_opaque_id("Word", word, "cards")
    }


def get_options_challenge(phrase, _):
    return {
        "type": "options",
        "formInTargetLanguage": phrase.in_target_langauge,
        "meaningInSourceLanguage": phrase.in_source_langauge,
        "priority": 0,
        "group": get_dumb_opaque_id("Options", phrase),
        "id": get_dumb_opaque_id("Options", phrase, "cards")
    }


def get_chips(phrase):
    return list(map(clean_word, phrase.split()))


def get_chips_challenge(phrase, course):
    return {
        "type": "chips",
        "phrase": define_words_in_sentence(course, phrase.in_source_langauge, reverse=False),
        'id': '3103322a15da',
        'group': 'b95c785ddf3e',
        "priority": 2,
        "chips": get_chips(phrase.in_target_langauge),
        "solutions": [get_chips(phrase.in_target_langauge)],
        "formattedSolution": phrase.in_target_langauge,
    }


def challenge_mapper(challenge_types):
    def map_challenge_creators(item, course):
        return list(map(lambda f: f(item, course), challenge_types))

    return map_challenge_creators


def get_phrase_challenges(phrase, course):
    return challenge_mapper([
        get_options_challenge,
        get_listening_challenge,
        get_chips_challenge,
        get_chips_challenge, ]
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


def clean_word(word):
    MATCH_NON_WORD_CHARACTERS_BEGINNING = re.compile("^[^\\w']+")
    MATCH_NON_WORD_CHARACTERS_END = re.compile("[^\\w']+$")
    return MATCH_NON_WORD_CHARACTERS_BEGINNING.sub(
        "", MATCH_NON_WORD_CHARACTERS_END.sub("", word))


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


def define_words_in_sentence(course, sentence, reverse):
    return [define_word(course, word, reverse) for word in sentence.split()]


def get_dictionary_item(course, word, reverse):
    dictionary_item = list(
        filter(
            lambda item: item.word == word and item.reverse == reverse,
            course.dictionary))

    return dictionary_item[0] if dictionary_item else None


def define_word(course, word, reverse):
    dictionary_item = get_dictionary_item(course, word, reverse)
    if dictionary_item:
        return {
            "word": word,
            "definition": dictionary_item.definition
        }

    return {"word": word}
