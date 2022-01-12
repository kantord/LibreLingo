from unittest.mock import patch

import json
import os

from pyfakefs.fake_filesystem_unittest import TestCase as FakeFsTestCase  # type: ignore
from librelingo_fakes import fakes
from librelingo_types import Language
from librelingo_json_export.export import (
    _export_course_data,
    export_course,
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
