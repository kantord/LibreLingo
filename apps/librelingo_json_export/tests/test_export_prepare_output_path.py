import os
from pathlib import Path
import pytest
from librelingo_json_export.export import _prepare_output_path
from librelingo_fakes import fakes


@pytest.fixture
def is_dry_run_mock(mocker):
    return mocker.patch("librelingo_json_export.export._is_dry_run")


def test_returns_devnull_when_dry_run(is_dry_run_mock, fs):
    output_file_path = fakes.path() / "some_file.txt"
    is_dry_run_mock.return_value = True
    assert _prepare_output_path(output_file_path, []) == Path(os.devnull)


def test_returns_inputed_path_when_no_dry_run(is_dry_run_mock, fs):
    output_file_path = fakes.path() / "some_file.txt"
    is_dry_run_mock.return_value = False
    assert _prepare_output_path(output_file_path, []) == output_file_path


def test_creates_result_path_when_no_dry_run(is_dry_run_mock, fs):
    is_dry_run_mock.return_value = False
    assert _prepare_output_path(fakes.path() / "some_file.txt", []).parent.exists()


def test_calls_is_dry_run(is_dry_run_mock, fs):
    settings = []
    _prepare_output_path(fakes.path() / "some_file.txt", settings)
    is_dry_run_mock.assert_called_once_with(settings)
