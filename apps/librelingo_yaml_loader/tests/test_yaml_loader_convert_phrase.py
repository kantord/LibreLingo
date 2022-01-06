"""
this file contains tests of the funcion
librelingo_yaml_loader.yaml_loader._convert_phrase
"""
import pytest

from librelingo_types import Phrase
from librelingo_yaml_loader.yaml_loader import _convert_phrase

from librelingo_fakes import fakes


def _alt_versions():
    return "Alternative versions"


def _alt_translations():
    return "Alternative translations"


@pytest.fixture
def raw_fake_phrase():
    """returns the raw data describing the phrase used in tests in this file"""
    return {
        "Phrase": fakes.fake_value(),
        _alt_versions(): [
            fakes.fake_value(),
            fakes.fake_value(),
        ],
        "Translation": fakes.fake_value(),
        _alt_translations(): [
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
    assert raw_fake_phrase[_alt_versions()][0] in result
    assert raw_fake_phrase[_alt_versions()][1] in result


def test_alternative_versions_are_optional(raw_fake_phrase):
    del raw_fake_phrase[_alt_versions()]
    assert len(_convert_phrase(raw_fake_phrase).in_target_language) == 1


def test_includes_translation(raw_fake_phrase):
    assert (
        _convert_phrase(raw_fake_phrase).in_source_language[0]
        == raw_fake_phrase["Translation"]
    )


def test_includes_alternative_translations(raw_fake_phrase):
    result = _convert_phrase(raw_fake_phrase).in_source_language
    assert raw_fake_phrase[_alt_translations()][0] in result
    assert raw_fake_phrase[_alt_translations()][1] in result


def test_alternative_translations_are_optional(raw_fake_phrase):
    del raw_fake_phrase[_alt_translations()]
    assert len(_convert_phrase(raw_fake_phrase).in_source_language) == 1


def test_convert_phrase_complains_about_missing_translation():
    random_phrase = fakes.fake_value().id
    expected_error = f'Phrase "{random_phrase}" needs to have a "Translation".'
    with pytest.raises(RuntimeError, match=expected_error):
        _convert_phrase({"Phrase": random_phrase})
