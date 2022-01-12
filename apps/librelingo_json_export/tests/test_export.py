from unittest.mock import patch

from pyfakefs.fake_filesystem_unittest import TestCase as FakeFsTestCase  # type: ignore
from librelingo_fakes import fakes

# from librelingo_types import Language
from librelingo_json_export.export import (
    export_course,
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
