import pytest
from librelingo_fakes import fakes
from librelingo_json_export.dictionary import _define_words_in_sentence


def test_empty_sentence():
    assert _define_words_in_sentence(fakes.course1, "", False) == []


@pytest.fixture
def mock_define_word(mocker):
    return mocker.patch("librelingo_json_export.dictionary._define_word")


def test_calls_define_word_with_the_correct_data(mock_define_word):
    _define_words_in_sentence(fakes.course1, "foo bar baz", False)
    assert mock_define_word.call_count == 3
    mock_define_word.assert_any_call(fakes.course1, "foo", False)
    mock_define_word.assert_any_call(fakes.course1, "bar", False)
    mock_define_word.assert_any_call(fakes.course1, "baz", False)


def test_calls_define_word_with_the_correct_word_that_has_space(mock_define_word):
    _define_words_in_sentence(fakes.course1, "foo {bar baz}", False)
    assert mock_define_word.call_count == 2
    mock_define_word.assert_any_call(fakes.course1, "foo", False)
    mock_define_word.assert_any_call(fakes.course1, "bar baz", False)


def test_returns_correct_value(mock_define_word):
    mock_define_word.return_value = fakes.fake_value()
    assert _define_words_in_sentence(fakes.course1, "foo", True) == [
        mock_define_word.return_value
    ]


def test_returns_correct_value_for_word_that_has_space(mock_define_word):
    mock_define_word.return_value = fakes.fake_value()
    assert _define_words_in_sentence(fakes.course1, "{foo bar}", True) == [
        mock_define_word.return_value
    ]


def test_defines_every_word(mock_define_word):
    mock_define_word.return_value = fakes.fake_value()
    assert _define_words_in_sentence(fakes.course1, "foo bar", True) == [
        mock_define_word.return_value,
        mock_define_word.return_value,
    ]


def test_defines_every_word_that_has_space(mock_define_word):
    mock_define_word.return_value = fakes.fake_value()
    assert _define_words_in_sentence(fakes.course1, "{foo bar} {baz quux}", True) == [
        mock_define_word.return_value,
        mock_define_word.return_value,
    ]
