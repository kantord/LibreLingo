import pytest

from librelingo_json_export.challenges import _get_challenges_data
from librelingo_fakes import fakes


@pytest.fixture
def mock_get_phrase_challenges(mocker):
    return mocker.patch("librelingo_json_export.challenges._get_phrase_challenges")


@pytest.fixture
def mock_get_word_challenges(mocker):
    return mocker.patch("librelingo_json_export.challenges._get_word_challenges")


def test_empty_skill():
    assert _get_challenges_data(fakes.emptySkill, fakes.course1) == []


def test_generates_phrase_challenges_correctly(mock_get_phrase_challenges):
    _get_challenges_data(fakes.skillWithPhrase, fakes.course1)
    mock_get_phrase_challenges.assert_called_with(fakes.phrase2, fakes.course1)


def test_includes_every_phrase(mock_get_phrase_challenges):
    _get_challenges_data(fakes.skillWith3Phrases, fakes.course1)
    assert mock_get_phrase_challenges.call_count == 3


def test_generates_word_challenges_correctly(mock_get_word_challenges):
    _get_challenges_data(fakes.skillWithWord, fakes.course1)
    mock_get_word_challenges.assert_called_with(fakes.word1, fakes.course1)


def test_includes_every_word(mock_get_word_challenges):
    _get_challenges_data(fakes.skillWith3Words, fakes.course1)
    assert mock_get_word_challenges.call_count == 3


def test_returns_correct_challenges(
    mock_get_phrase_challenges, mock_get_word_challenges
):
    mock_get_phrase_challenges.return_value = [fakes.challenge1, fakes.challenge2]
    mock_get_word_challenges.return_value = [fakes.challenge3, fakes.challenge4]
    assert _get_challenges_data(fakes.skillWithPhraseAndWord, fakes.course1) == [
        fakes.challenge1,
        fakes.challenge2,
        fakes.challenge3,
        fakes.challenge4,
    ]
