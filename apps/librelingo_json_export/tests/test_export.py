from unittest.mock import patch, call

import json
import os

from pyfakefs.fake_filesystem_unittest import TestCase as FakeFsTestCase  # type: ignore
from librelingo_fakes import fakes
from librelingo_types import Module, Language
from librelingo_json_export.export import (
    _export_course_skills,
    _export_skill,
    _export_course_data,
    export_course,
)


def get_fake_skill(introduction=None):
    random_word = "quiz"
    return random_word, fakes.customize(
        fakes.skillWithPhraseAndWord,
        name=f"Animals {random_word}",
        introduction=introduction,
    )


class TestExportCourseSkills(FakeFsTestCase):
    def setUp(self):
        self.setUpPyfakefs()
        self.export_path = fakes.path()

    @patch("librelingo_json_export.export._export_skill")
    def test_exports_all_skills(self, _export_skill):
        _, fake_skill_1 = get_fake_skill()
        _, fake_skill_2 = get_fake_skill()
        _, fake_skill_3 = get_fake_skill()
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
        fake_course = fakes.customize(
            fakes.course1, modules=[fake_module_1, fake_module_2]
        )
        _export_course_skills(self.export_path, fake_course)
        _export_skill.assert_has_calls(
            [
                call(self.export_path, fake_skill_1, fake_course, None),
                call(self.export_path, fake_skill_2, fake_course, None),
                call(self.export_path, fake_skill_3, fake_course, None),
            ],
            any_order=True,
        )


class TestExportSkill(FakeFsTestCase):
    def setUp(self):
        self.setUpPyfakefs()
        self.export_path = fakes.path()

    def test_creates_the_challenges_file(self):
        random_name, fake_skill = get_fake_skill()
        _export_skill(self.export_path, fake_skill, fakes.course1)
        self.assertTrue(
            os.path.exists(
                self.export_path / "challenges" / f"animals-{random_name}.json"
            )
        )

    def test_creates_the_introduction_file(self):
        fake_name = str(fakes.fake_value())
        introduction = f"# *Hello* (https://example.com)[_{fake_name}_]!"
        random_name, fake_skill = get_fake_skill(introduction=introduction)
        _export_skill(self.export_path, fake_skill, fakes.course1)
        with open(
            self.export_path / "introduction" / f"animals-{random_name}.md"
        ) as animals_file:
            introduction_file_content = animals_file.read()
            self.assertEqual(introduction_file_content, introduction)

    def test_does_not_create_an_introduction_file_if_theres_no_introduction(self):
        random_name, fake_skill = get_fake_skill()
        _export_skill(self.export_path, fake_skill, fakes.course1)
        self.assertFalse(
            os.path.exists(
                self.export_path / "introduction" / f"animals-{random_name}.md"
            )
        )

    @patch("librelingo_json_export.export._get_skill_data")
    def test_calls__get_skill_data_with_correct_value(self, _get_skill_data):
        _get_skill_data.return_value = []
        _export_skill(self.export_path, fakes.skillWithPhraseAndWord, fakes.course1)
        _get_skill_data.assert_called_with(fakes.skillWithPhraseAndWord, fakes.course1)

    @patch("librelingo_json_export.export._get_skill_data")
    def test_writes_correct_value_into_json_file(self, _get_skill_data):
        fake_skill_data = {"fake_skill_data": 1000}
        _get_skill_data.return_value = fake_skill_data
        _export_skill(self.export_path, fakes.skillWithPhraseAndWord, fakes.course1)
        with open(self.export_path / "challenges" / "masculine.json") as masculine_file:
            self.assertEqual(json.loads(masculine_file.read()), fake_skill_data)

    def test_assert_logs_correctly(self):
        with self.assertLogs("librelingo_json_export", level="INFO") as log:
            _, fake_skill = get_fake_skill()
            _export_skill(self.export_path, fake_skill, fakes.course1)
            self.assertEqual(
                log.output[0],
                f"INFO:librelingo_json_export:Writing skill '{fake_skill.name}'",
            )


class TestExportCourseData(FakeFsTestCase):
    def setUp(self):
        self.setUpPyfakefs()
        self.export_path = fakes.path()

    def test_creates_the_correct_file(self):
        _export_course_data(self.export_path, fakes.course1)
        self.assertTrue(os.path.exists(self.export_path / "courseData.json"))

    @patch("librelingo_json_export.export._get_course_data")
    def test_calls__get_course_data_with_correct_value(self, _get_course_data):
        _get_course_data.return_value = []
        _export_course_data(self.export_path, fakes.course1)
        _get_course_data.assert_called_with(fakes.course1)

    @patch("librelingo_json_export.export._get_course_data")
    def test_writes_correct_value_into_json_file(self, _get_course_data):
        fake_course_data = {"fake_course_data": 1000}
        _get_course_data.return_value = fake_course_data
        _export_course_data(self.export_path, fakes.course1)
        with open(self.export_path / "courseData.json") as f:
            self.assertEqual(json.loads(f.read()), fake_course_data)

    def test_assert_logs_correctly(self):
        with self.assertLogs("librelingo_json_export", level="INFO") as log:
            course_name = "Animals"
            target_name = "English"
            fake_course = fakes.customize(
                fakes.course1,
                target_language=Language(name=course_name, code=""),
                source_language=Language(name=target_name, code=""),
            )
            _export_course_data(self.export_path, fake_course)
            self.assertEqual(
                log.output[0],
                f"INFO:librelingo_json_export:Writing course {course_name} for {target_name} speakers",
            )


class TestExportCourse(FakeFsTestCase):
    def setUp(self):
        self.setUpPyfakefs()
        self.export_path = fakes.path()

    @patch("librelingo_json_export.export._export_course_data")
    def test_calls__export_course_data_with_correct_value(self, _export_course_data):
        export_course(self.export_path, fakes.course1)
        _export_course_data.assert_called_with(self.export_path, fakes.course1, None)

    @patch("librelingo_json_export.export._export_course_skills")
    def test_calls__export_course_skills_with_correct_value(
        self, _export_course_skills
    ):
        export_course(self.export_path, fakes.course1)
        _export_course_skills.assert_called_with(self.export_path, fakes.course1, None)
