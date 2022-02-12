import pytest

from librelingo_json_export.export import export_course
from librelingo_fakes import fakes


@pytest.fixture
def export_path():
    return fakes.path()


@pytest.fixture
def mock_export_course_data(mocker):
    return mocker.patch("librelingo_json_export.export._export_course_data")


def test_calls__export_course_data_with_correct_value(
    fs, export_path, mock_export_course_data
):
    export_course(export_path, fakes.course1)
    mock_export_course_data.assert_called_with(export_path, fakes.course1, None)


@pytest.fixture
def mock_export_course_skills(mocker):
    return mocker.patch("librelingo_json_export.export._export_course_skills")


def test_calls__export_course_skills_with_correct_value(
    fs, export_path, mock_export_course_skills
):
    export_course(export_path, fakes.course1)
    mock_export_course_skills.assert_called_with(export_path, fakes.course1, None)
