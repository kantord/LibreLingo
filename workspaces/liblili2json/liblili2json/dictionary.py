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


def get_raw_dictionary_item(course, word, reverse):
    """
        Find the matching raw dictionary item for a word.
    """
    dictionary_item = list(
        filter(
            lambda item: item.word == word and item.reverse == reverse,
            course.dictionary))

    return dictionary_item[0] if dictionary_item else None


def define_word(course, word, reverse):
    """
        Creates the definition object for a word.
    """
    dictionary_item = get_raw_dictionary_item(course, word, reverse)
    if dictionary_item and dictionary_item.definition:
        return {
            "word": word,
            "definition": dictionary_item.definition
        }

    return {"word": word}


def define_words_in_sentence(course, sentence, reverse):
    """
        Converts a sentence into a list of definition objects.
    """
    return [define_word(course, word, reverse) for word in sentence.split()]
