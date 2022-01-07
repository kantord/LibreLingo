import pytest

from librelingo_json_export.challenges import _get_phrase_challenges
from librelingo_fakes import fakes

challenges = _get_phrase_challenges(fakes.phrase1, fakes.course1)
PHRASES_GROUPS = [challenge["group"] for challenge in challenges]
PHRASES_IDS = [challenge["id"] for challenge in challenges]


@pytest.fixture
def mock_get_options_challenge(mocker):
    return mocker.patch("librelingo_json_export.challenges.get_options_challenge")


def test_includes_options_challenges(mock_get_options_challenge):
    fake_value = fakes.fake_value()
    mock_get_options_challenge.return_value = [fake_value]
    assert _get_phrase_challenges(fakes.phrase1, fakes.course1)[0] == fake_value


@pytest.fixture
def mock_get_listening_challenge(mocker):
    return mocker.patch("librelingo_json_export.challenges.get_listening_challenge")


def test_includes_listening_challenge(mock_get_listening_challenge):
    fake_value = fakes.fake_value()
    mock_get_listening_challenge.return_value = [fake_value]
    assert _get_phrase_challenges(fakes.phrase1, fakes.course1)[1] == fake_value


@pytest.fixture
def mock_get_chips_challenge(mocker):
    return mocker.patch("librelingo_json_export.challenges.get_chips_challenge")


def test_includes_chips_challenge(mock_get_chips_challenge):
    fake_value = fakes.fake_value()
    mock_get_chips_challenge.return_value = [fake_value]
    assert _get_phrase_challenges(fakes.long_phrase, fakes.course1)[2] == fake_value


@pytest.fixture
def mock_get_reverse_chips_challenge(mocker):
    return mocker.patch("librelingo_json_export.challenges.get_reverse_chips_challenge")


def test_includes_reverse_chips_challenge(mock_get_reverse_chips_challenge):
    fake_value = fakes.fake_value()
    mock_get_reverse_chips_challenge.return_value = [fake_value]
    assert _get_phrase_challenges(fakes.long_phrase, fakes.course1)[3] == fake_value


def test_returns_correct_number_of_challenged():
    assert len(_get_phrase_challenges(fakes.long_phrase, fakes.course1)) == 4


def test_doesnt_include_chips_if_sentence_is_short():
    assert not list(
        filter(
            lambda x: x["type"] == "chips",
            _get_phrase_challenges(
                fakes.customize(
                    fakes.phrase1,
                    in_target_language=["foo"],
                    in_source_language=["bar"],
                ),
                fakes.course1,
            ),
        )
    )


def test_group_is_the_same_in_each_challenge_type():
    assert len(set(PHRASES_GROUPS)) == 1


def test_id_is_different_in_each_challenge_type():
    assert len(set(PHRASES_IDS)) == len(PHRASES_IDS)
