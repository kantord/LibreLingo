# pylint: disable=unused-argument
import pytest

from librelingo_json_export.export import _export_course_skills
from librelingo_types import Module
from librelingo_fakes import fakes


@pytest.fixture
def export_path():
    return fakes.path()


@pytest.fixture
def mock_export_skill(mocker):
    return mocker.patch("librelingo_json_export.export._export_skill")


def test_exports_all_skills(
    mocker, fs, export_path, mock_export_skill
):  # pylint:disable=invalid-name
    _, fake_skill_1 = fakes.get_fake_skill()
    _, fake_skill_2 = fakes.get_fake_skill()
    _, fake_skill_3 = fakes.get_fake_skill()
    fake_module_1 = Module(
        title="",
        filename="",
        skills=[
            fake_skill_1,
            fake_skill_2,
        ],
    )
    fake_module_2 = Module(
        title="",
        filename="",
        skills=[
            fake_skill_3,
        ],
    )
    fake_course = fakes.customize(fakes.course1, modules=[fake_module_1, fake_module_2])
    _export_course_skills(export_path, fake_course)
    mock_export_skill.assert_has_calls(
        [
            mocker.call(export_path, fake_skill_1, fake_course, None),
            mocker.call(export_path, fake_skill_2, fake_course, None),
            mocker.call(export_path, fake_skill_3, fake_course, None),
        ],
        any_order=True,
    )
