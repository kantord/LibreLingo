"""
this file contains tests of the funcion
librelingo_yaml_loader.yaml_loader._convert_phrases
"""
import pytest
from librelingo_fakes import fakes
from librelingo_yaml_loader.yaml_loader import _convert_phrases


def test_returns_a_list():
    assert isinstance(_convert_phrases([]), list)


@pytest.fixture
def mock_convert_phrase(mocker):
    return mocker.patch("librelingo_yaml_loader.yaml_loader._convert_phrase")


def test_converts_every_word(mock_convert_phrase):
    # mock_convert_phrase is needed here becasue
    # _convert_phrase crashes for input None
    raw_words = [None] * fakes.number()
    assert len(_convert_phrases(raw_words)) == len(raw_words)


def test_returns_correct_value(mock_convert_phrase):
    mock_convert_phrase.return_value = fakes.fake_value()
    assert _convert_phrases([None]) == [mock_convert_phrase.return_value]


def test_calls_convert_phrases_with_correct_values(mock_convert_phrase):
    word1 = fakes.fake_value()
    word2 = fakes.fake_value()
    _convert_phrases([word1, word2])
    mock_convert_phrase.assert_any_call(word1)
    mock_convert_phrase.assert_any_call(word2)
