"""
this file contains tests of the funcion
librelingo_yaml_loader.yaml_loader._convert_word
"""

import pytest
from librelingo_fakes import fakes
from librelingo_types import Word
from librelingo_yaml_loader.yaml_loader import _convert_word


def _access_functions(in_key):
    def getter(raw_word):
        return raw_word[in_key]

    def remover(raw_word):
        del raw_word[in_key]

    return getter, remover


_GET_ALSO_ACCEPTED, _REMOVE_ALSO_ACCEPTED = _access_functions("Also accepted")


@pytest.fixture
def raw_fake_word():
    """returns the raw data describing the word used in tests in this file"""
    return {
        "Images": fakes.fake_value(),
        "Word": fakes.fake_value(),
        "Synonyms": [
            fakes.fake_value(),
            fakes.fake_value(),
        ],
        "Translation": fakes.fake_value(),
        "Also accepted": [
            fakes.fake_value(),
            fakes.fake_value(),
        ],
    }


def test_returns_a_word_object(raw_fake_word):
    assert isinstance(_convert_word(raw_fake_word), Word)


def test_includes_the_correct_pictures(raw_fake_word):
    assert _convert_word(raw_fake_word).pictures == raw_fake_word["Images"]


def test_pictures_are_optional(raw_fake_word):
    del raw_fake_word["Images"]
    assert _convert_word(raw_fake_word).pictures is None


def test_includes_main_word(raw_fake_word):
    assert _convert_word(raw_fake_word).in_target_language[0] == raw_fake_word["Word"]


def test_includes_synonyms(raw_fake_word):
    result = _convert_word(raw_fake_word).in_target_language
    assert all(_ in result for _ in raw_fake_word["Synonyms"])


def test_synonyms_are_optional(raw_fake_word):
    del raw_fake_word["Synonyms"]
    assert len(_convert_word(raw_fake_word).in_target_language) == 1


def test_includes_translation(raw_fake_word):
    assert (
        _convert_word(raw_fake_word).in_source_language[0]
        == raw_fake_word["Translation"]
    )


def test_includes_alternative_translations(raw_fake_word):
    result = _convert_word(raw_fake_word).in_source_language
    assert all(_ in result for _ in _GET_ALSO_ACCEPTED(raw_fake_word))


def test_alternative_translations_are_optional(raw_fake_word):
    _REMOVE_ALSO_ACCEPTED(raw_fake_word)
    assert len(_convert_word(raw_fake_word).in_source_language) == 1
