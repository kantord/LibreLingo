from librelingo_fakes import fakes
from librelingo_types import Word


def _get_fake_word_values():
    in_target_language = [str(fakes.number())]
    in_source_language = [str(fakes.number())]

    return in_source_language, in_target_language


def get_fake_word():
    in_source_language, in_target_language = _get_fake_word_values()
    word = Word(in_target_language, in_source_language, [])
    return word, in_source_language, in_target_language
