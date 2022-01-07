import pytest

from librelingo_json_export.challenges import _get_word_challenges
from librelingo_fakes import fakes


challenges = _get_word_challenges(fakes.word1, fakes.course1)
WORD_GROUPS = [challenge["group"] for challenge in challenges]
WORD_IDS = [challenge["id"] for challenge in challenges]


@pytest.fixture
def mock_get_cards_challenge(mocker):
    return mocker.patch("librelingo_json_export.challenges.get_cards_challenge")


def test_includes_cards_challenges(mock_get_cards_challenge):
    fake_value = fakes.fake_value()
    mock_get_cards_challenge.return_value = [fake_value]
    assert _get_word_challenges(fakes.word1, fakes.course1)[0] == fake_value


@pytest.fixture
def mock_get_short_input_challenge(mocker):
    return mocker.patch("librelingo_json_export.challenges.get_short_input_challenge")


def test_includes_short_input_challenges(mock_get_short_input_challenge):
    fake_value = fakes.fake_value()
    mock_get_short_input_challenge.return_value = [fake_value]
    assert _get_word_challenges(fakes.word1, fakes.course1)[1] == fake_value


@pytest.fixture
def mock_get_listening_challenge(mocker):
    return mocker.patch("librelingo_json_export.challenges.get_listening_challenge")


def test_includes_listening_challenge(mock_get_listening_challenge):
    fake_value = fakes.fake_value()
    mock_get_listening_challenge.return_value = [fake_value]
    assert _get_word_challenges(fakes.word1, fakes.course1)[2] == fake_value


def test_group_is_the_same_in_each_challenge_type():
    assert len(set(WORD_GROUPS)) == 1


def test_id_is_different_in_each_challenge_type():
    assert len(set(WORD_IDS)) == len(WORD_IDS)
