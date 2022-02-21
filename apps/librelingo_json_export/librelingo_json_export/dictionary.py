"""
    This file contains functions that deal with the data structures
    required to provide data for the mini-dictionary feature.

    Terminology:

    reverse
    This boolean indicantes that the direction of translation is reversed.
    This is required, because the mini-dictionary feature supplies definitions
    in both the source and the target langauge.

    raw dictionary item
    This is the DictionaryItem() type

    definition object
    This the the "JSON" format for a definition. This structure is used in
    the output JSON files.
"""

from librelingo_types.data_types import Course, Word
from librelingo_utils import clean_word, get_words_from_phrase


def _get_raw_dictionary_item(course: Course, word: Word, is_in_target_language):
    """
    Find the matching raw dictionary item for a word.
    """
    dictionary_item = list(
        filter(
            lambda item: clean_word(item.word).lower() == clean_word(word).lower()
            and item.is_in_target_language == is_in_target_language,
            course.dictionary,
        )
    )

    return dictionary_item[0] if dictionary_item else None


def _define_word(course: Course, word: Word, is_in_target_language):
    """
    Creates the definition object for a word.
    """
    dictionary_item = _get_raw_dictionary_item(course, word, is_in_target_language)
    if dictionary_item and dictionary_item.definition:
        return {"word": word, "definition": dictionary_item.definition}

    language_name = (
        course.target_language.name
        if is_in_target_language
        else course.source_language.name
    )
    raise ValueError(
        f'The {language_name} word "{word}" does not have a definition.'
        "Please add it to the mini-dictionary."
    )


def _define_words_in_sentence(course: Course, sentence, reverse):
    """
    Converts a sentence into a list of definition objects.
    """
    words = get_words_from_phrase(sentence)
    return [_define_word(course, word, reverse) for word in words]
