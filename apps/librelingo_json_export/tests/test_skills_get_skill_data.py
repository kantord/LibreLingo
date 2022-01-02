import pytest
from librelingo_fakes import fakes

from librelingo_json_export.skills import _get_skill_data


def test_empty_skill():
    assert _get_skill_data(fakes.emptySkill, fakes.courseEmpty) == {
        "id": "d7279e4777cd",
        "levels": 1,
        "challenges": [],
    }


@pytest.fixture
def mock_calculate_number_of_levels(mocker):
    return mocker.patch("librelingo_json_export.skills.calculate_number_of_levels")


@pytest.fixture
def mock_get_challenges_data(mocker):
    return mocker.patch("librelingo_json_export.skills._get_challenges_data")


def test_correct_number_of_levels(mock_calculate_number_of_levels):
    FAKE_NUMBER = "fake number"
    mock_calculate_number_of_levels.return_value = FAKE_NUMBER
    converted_skill = _get_skill_data(fakes.emptySkill, fakes.course1)
    assert converted_skill["levels"] == FAKE_NUMBER


def test_calculates_levels_correctly(mock_calculate_number_of_levels):
    _get_skill_data(fakes.skills[1], fakes.course1)
    mock_calculate_number_of_levels.assert_called_with(4, 1)


def test_correct_challenges(mock_get_challenges_data):
    FAKE_CHALLENGES = "fake challenges"
    mock_get_challenges_data.return_value = FAKE_CHALLENGES
    converted_skill = _get_skill_data(fakes.skills[1], fakes.course1)
    assert converted_skill["challenges"] == FAKE_CHALLENGES


def test_formats_challenges_correctly(mock_get_challenges_data):
    _get_skill_data(fakes.skills[1], fakes.course1)
    mock_get_challenges_data.assert_called_with(fakes.skills[1], fakes.course1)
