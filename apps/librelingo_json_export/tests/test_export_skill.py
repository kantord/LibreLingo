import json
import logging
import os

import pytest
from librelingo_fakes import fakes
from librelingo_json_export.export import _export_skill


@pytest.fixture
def export_path():
    return fakes.path()


def test_creates_the_challenges_file(fs, export_path):
    random_name, fake_skill = fakes.get_fake_skill()
    _export_skill(export_path, fake_skill, fakes.course1)
    assert os.path.exists(export_path / "challenges" / f"animals-{random_name}.json")


def test_creates_the_introduction_file(fs, export_path):
    fake_name = fakes.fake_string()
    introduction = f"# *Hello* (https://example.com)[_{fake_name}_]!"
    random_name, fake_skill = fakes.get_fake_skill(introduction=introduction)
    _export_skill(export_path, fake_skill, fakes.course1)
    with open(
        export_path / "introduction" / f"animals-{random_name}.md"
    ) as animals_file:
        introduction_file_content = animals_file.read()
        assert introduction_file_content == introduction


def test_does_not_create_an_introduction_file_if_theres_no_introduction(
    fs, export_path
):
    random_name, fake_skill = fakes.get_fake_skill()
    _export_skill(export_path, fake_skill, fakes.course1)
    assert not os.path.exists(
        export_path / "introduction" / f"animals-{random_name}.md"
    )


@pytest.fixture
def mock_get_skill_data(mocker):
    return mocker.patch("librelingo_json_export.export._get_skill_data")


def test_calls__get_skill_data_with_correct_value(fs, export_path, mock_get_skill_data):
    mock_get_skill_data.return_value = []
    _export_skill(export_path, fakes.skillWithPhraseAndWord, fakes.course1)
    mock_get_skill_data.assert_called_with(fakes.skillWithPhraseAndWord, fakes.course1)


def test_writes_correct_value_into_json_file(fs, export_path, mock_get_skill_data):
    fake_skill_data = {"fake_skill_data": 1000}
    mock_get_skill_data.return_value = fake_skill_data
    _export_skill(export_path, fakes.skillWithPhraseAndWord, fakes.course1)
    with open(export_path / "challenges" / "masculine.json") as masculine_file:
        assert json.loads(masculine_file.read()) == fake_skill_data


def test_assert_logs_correctly(fs, caplog, export_path):
    with caplog.at_level(logging.INFO, logger="librelingo_json_export"):
        _, fake_skill = fakes.get_fake_skill()
        _export_skill(export_path, fake_skill, fakes.course1)
        assert caplog.record_tuples[0] == (
            "librelingo_json_export",
            logging.INFO,
            f"Writing skill '{fake_skill.name}'",
        )
