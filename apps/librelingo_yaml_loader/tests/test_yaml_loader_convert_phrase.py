"""
this file contains tests of the funcion
librelingo_yaml_loader.yaml_loader._convert_phrase
"""
import pytest

from librelingo_types import Phrase
from librelingo_yaml_loader.yaml_loader import _convert_phrase

from librelingo_fakes import fakes


def _access_functions(in_key):
    def getter(raw_phrase):
        return raw_phrase[in_key]

    def remover(raw_phrase):
        del raw_phrase[in_key]

    return getter, remover


_GET_ALTERNATIVE_VERSIONS, _REMOVE_ALTERNATIVE_VERSIONS = _access_functions(
    "Alternative versions"
)

_GET_ALTERNATIVE_TRANSLATIONS, _REMOVE_ALTERNATIVE_TRANSLATIONS = _access_functions(
    "Alternative translations"
)


@pytest.fixture
def raw_fake_phrase():
    """returns the raw data describing the phrase used in tests in this file"""
    return {
        "Phrase": fakes.fake_value(),
        "Alternative versions": [
            fakes.fake_value(),
            fakes.fake_value(),
        ],
        "Translation": fakes.fake_value(),
        "Alternative translations": [
            fakes.fake_value(),
            fakes.fake_value(),
        ],
    }


def test_returns_a_phrase_object(raw_fake_phrase):
    assert isinstance(_convert_phrase(raw_fake_phrase), Phrase)


def test_includes_main_version(raw_fake_phrase):
    assert (
        _convert_phrase(raw_fake_phrase).in_target_language[0]
        == raw_fake_phrase["Phrase"]
    )


def test_includes_alternative_versions(raw_fake_phrase):
    result = _convert_phrase(raw_fake_phrase).in_target_language
    assert all(_ in result for _ in _GET_ALTERNATIVE_VERSIONS(raw_fake_phrase))


def test_alternative_versions_are_optional(raw_fake_phrase):
    _REMOVE_ALTERNATIVE_VERSIONS(raw_fake_phrase)
    assert len(_convert_phrase(raw_fake_phrase).in_target_language) == 1


def test_includes_translation(raw_fake_phrase):
    assert (
        _convert_phrase(raw_fake_phrase).in_source_language[0]
        == raw_fake_phrase["Translation"]
    )


def test_includes_alternative_translations(raw_fake_phrase):
    result = _convert_phrase(raw_fake_phrase).in_source_language
    assert all(_ in result for _ in _GET_ALTERNATIVE_TRANSLATIONS(raw_fake_phrase))


def test_alternative_translations_are_optional(raw_fake_phrase):
    _REMOVE_ALTERNATIVE_TRANSLATIONS(raw_fake_phrase)
    assert len(_convert_phrase(raw_fake_phrase).in_source_language) == 1


def test_convert_phrase_complains_about_missing_translation():
    random_phrase = fakes.number()
    expected_error = f'Phrase "{random_phrase}" needs to have a "Translation".'
    with pytest.raises(RuntimeError, match=expected_error):
        _convert_phrase({"Phrase": random_phrase})
