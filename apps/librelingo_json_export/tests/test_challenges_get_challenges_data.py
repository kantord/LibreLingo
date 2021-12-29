import pytest

from librelingo_json_export.challenges import _get_challenges_data
from librelingo_fakes import fakes


@pytest.fixture
def mocks(mocker):
    return {
        "get_phrase_challenges": mocker.patch(
            "librelingo_json_export.challenges._get_phrase_challenges"
        ),
        "get_word_challenges": mocker.patch(
            "librelingo_json_export.challenges._get_word_challenges"
        ),
    }


def test_empty_skill():
    assert _get_challenges_data(fakes.emptySkill, fakes.course1) == []


def test_generates_phrase_challenges_correctly(mocks):
    _get_challenges_data(fakes.skillWithPhrase, fakes.course1)
    mocks["get_phrase_challenges"].assert_called_with(fakes.phrase2, fakes.course1)


def test_includes_every_phrase(mocks):
    _get_challenges_data(fakes.skillWith3Phrases, fakes.course1)
    assert mocks["get_phrase_challenges"].call_count == 3


def test_generates_word_challenges_correctly(mocks):
    _get_challenges_data(fakes.skillWithWord, fakes.course1)
    mocks["get_word_challenges"].assert_called_with(fakes.word1, fakes.course1)


def test_includes_every_word(mocks):
    _get_challenges_data(fakes.skillWith3Words, fakes.course1)
    assert mocks["get_word_challenges"].call_count == 3


def test_returns_correct_challenges(mocks):
    mocks["get_phrase_challenges"].return_value = [fakes.challenge1, fakes.challenge2]
    mocks["get_word_challenges"].return_value = [fakes.challenge3, fakes.challenge4]
    assert _get_challenges_data(fakes.skillWithPhraseAndWord, fakes.course1) == [
        fakes.challenge1,
        fakes.challenge2,
        fakes.challenge3,
        fakes.challenge4,
    ]
