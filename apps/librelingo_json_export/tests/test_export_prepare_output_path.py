import os
from pathlib import Path
from librelingo_json_export.export import _prepare_output_path
from librelingo_json_export.settings import Settings
from librelingo_fakes import fakes


def test_returns_devnull_when_dry_run(fs):
    output_file_path = fakes.path() / "some_file.txt"
    assert _prepare_output_path(output_file_path, Settings(True)) == Path(os.devnull)


def test_returns_inputed_path_when_no_dry_run(fs):
    output_file_path = fakes.path() / "some_file.txt"
    assert _prepare_output_path(output_file_path, Settings(False)) == output_file_path


def test_creates_result_path_when_no_dry_run(fs):
    assert _prepare_output_path(
        fakes.path() / "some_file.txt", Settings(False)
    ).parent.exists()
