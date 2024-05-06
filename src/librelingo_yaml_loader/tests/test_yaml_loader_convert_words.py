"""
this file contains tests of the funcion
librelingo_yaml_loader.yaml_loader._convert_words
"""

import pytest
from librelingo_fakes import fakes
from librelingo_yaml_loader.yaml_loader import _convert_words


def test_returns_a_list():
    assert isinstance(_convert_words([]), list)


@pytest.fixture
def mock_convert_word(mocker):
    return mocker.patch("librelingo_yaml_loader.yaml_loader._convert_word")


def test_converts_every_word(mock_convert_word):
    raw_words = [None] * fakes.number()
    assert len(_convert_words(raw_words)) == len(raw_words)


def test_returns_correct_value(mock_convert_word):
    mock_convert_word.return_value = fakes.fake_value()
    assert _convert_words([None]) == [mock_convert_word.return_value]


def test_calls_convert_word_with_correct_values(mock_convert_word):
    word1 = fakes.fake_value()
    word2 = fakes.fake_value()
    _convert_words([word1, word2])
    mock_convert_word.assert_any_call(word1)
    mock_convert_word.assert_any_call(word2)
