import re
import hashlib
from librelingo_types.data_types import Phrase, Word


def calculate_number_of_levels(nwords, nphrases):
    """
    Calculates how many levels a skill should have
    """
    return round(1 + (nwords / 7) + (nphrases / 5))


def clean_word(word):
    """
        Remove punctuation and other special characters from a word.
    """
    MATCH_NON_WORD_CHARACTERS_BEGINNING = re.compile("^[^\\w']+")
    MATCH_NON_WORD_CHARACTERS_END = re.compile("[^\\w']+$")
    return MATCH_NON_WORD_CHARACTERS_BEGINNING.sub(
        "", MATCH_NON_WORD_CHARACTERS_END.sub("", word))


def get_dumb_opaque_id(name, id_, salt=""):
    """
    Generate a unique, opaque ID based on a name, and id_ and a salt
    id
    """
    sha256 = hashlib.sha256()

    if (type(id_)) in [Phrase, Word]:
        id_ = type(id_)(
            **{
                **(id_._asdict()),
                "in_source_language": id_.in_source_language[0],
                "in_target_language": id_.in_target_language[0],
            },
        )

    sha256.update((name +
                   str(id_) + salt).encode('utf-8'))

    return sha256.hexdigest()[0:12]


def get_opaque_id(obj, salt=""):
    """
    Generate a unique, opaque ID based on a type and a type specific
    id
    """
    return get_dumb_opaque_id(type(obj).__name__.lower(), str(obj.id), salt)


def audio_id(language, text):
    """
    Generate the ID that will identify the audio file of a sentence.
    """
    hash = hashlib.sha256()
    hash.update((language.name.lower() + "|" + text).encode('utf-8'))
    return hash.hexdigest()


def iterate_phrases(course):
    '"Flatten" a course into a sequence of phrases'
    for module in course.modules:
        for skill in module.skills:
            for phrase in skill.phrases:
                yield phrase


