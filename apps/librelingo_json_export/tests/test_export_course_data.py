import os
import json
import logging
import pytest

from librelingo_json_export.export import _export_course_data
from librelingo_types import Language
from librelingo_fakes import fakes


@pytest.fixture
def export_path():
    return fakes.path()


def test_creates_the_correct_file(fs, export_path):  # pylint:disable=invalid-name
    _export_course_data(export_path, fakes.course1)
    assert os.path.exists(export_path / "courseData.json")


@pytest.fixture
def mock_get_course_data(mocker):
    return mocker.patch("librelingo_json_export.export._get_course_data")


def test_calls__get_course_data_with_correct_value(
    fs, export_path, mock_get_course_data
):  # pylint:disable=invalid-name
    mock_get_course_data.return_value = []
    _export_course_data(export_path, fakes.course1)
    mock_get_course_data.assert_called_with(fakes.course1)


def test_writes_correct_value_into_json_file(
    fs, export_path, mock_get_course_data
):  # pylint:disable=invalid-name
    fake_course_data = {"fake_course_data": 1000}
    mock_get_course_data.return_value = fake_course_data
    _export_course_data(export_path, fakes.course1)
    with open(export_path / "courseData.json") as f:
        assert json.loads(f.read()) == fake_course_data


def test_assert_logs_correctly(caplog, fs, export_path):  # pylint:disable=invalid-name
    with caplog.at_level(logging.INFO, logger="librelingo_json_export"):
        course_name = "Animals"
        target_name = "English"
        fake_course = fakes.customize(
            fakes.course1,
            target_language=Language(name=course_name, code=""),
            source_language=Language(name=target_name, code=""),
        )
        _export_course_data(export_path, fake_course)
        assert caplog.record_tuples[0] == (
            "librelingo_json_export",
            logging.INFO,
            f"Writing course {course_name} for {target_name} speakers",
        )
