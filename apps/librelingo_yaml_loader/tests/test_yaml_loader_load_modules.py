"""
this file contains tests of the funcion
librelingo_yaml_loader.yaml_loader._load_modules
"""
from pathlib import Path
import pytest

from librelingo_yaml_loader.yaml_loader import _load_modules
from librelingo_fakes import fakes


@pytest.fixture
def mock_load_module(mocker):
    yield mocker.patch("librelingo_yaml_loader.yaml_loader._load_module")


def test_returns_correct_value(mock_load_module):
    mock_load_module.return_value = fakes.fake_value()
    assert _load_modules("foo", ["bar"], fakes.course1) == [
        mock_load_module.return_value
    ]


def test_handles_every_module(mock_load_module):
    mock_load_module.return_value = fakes.fake_value()
    assert (
        _load_modules("foo", ["bar", "baz"], fakes.course1)
        == [mock_load_module.return_value] * 2
    )


def test_calls_load_modules_with_correct_arguments(mock_load_module):
    _load_modules("foo", ["bar"], fakes.course1)
    mock_load_module.assert_called_with(Path("foo/bar"), fakes.course1)
