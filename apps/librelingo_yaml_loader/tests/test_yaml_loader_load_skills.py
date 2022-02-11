"""
this file contains tests of the funcion
librelingo_yaml_loader.yaml_loader._load_skills
"""
from pathlib import Path
import pytest

from librelingo_yaml_loader.yaml_loader import _load_skills
from librelingo_fakes import fakes


@pytest.fixture
def mock_load_skill(mocker):
    yield mocker.patch("librelingo_yaml_loader.yaml_loader._load_skill")


def test_returns_correct_value(fs, mock_load_skill):
    mock_load_skill.return_value = fakes.fake_value()
    assert _load_skills("foo", ["bar"], fakes.course1) == [mock_load_skill.return_value]


def test_handles_every_module(fs, mock_load_skill):
    mock_load_skill.return_value = fakes.fake_value()
    assert (
        _load_skills("foo", ["bar", "baz"], fakes.course1)
        == [mock_load_skill.return_value] * 2
    )


def test_calls_load_skills_with_correct_arguments(fs, mock_load_skill):
    _load_skills("foo", ["bar.yaml"], fakes.course1)
    mock_load_skill.assert_called_with(Path("foo/skills/bar.yaml"), fakes.course1)
