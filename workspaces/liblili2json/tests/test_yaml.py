import random
from pathlib import Path
from unittest.mock import patch
from pyfakefs.fake_filesystem_unittest import TestCase as FakeFsTestCase
from liblili2json.types import Course
from liblili2json.yaml import load_course
from . import fakes


def get_fake_course_yaml(**kwargs):
    return """
Course:
  Language:
    Name: {target_language_name}
    IETF BCP 47: {target_language_code}
  For speakers of:
    Name: {source_language_name}
    IETF BCP 47: {source_language_code}
  License: {license}
  Special characters:
    - {first_special_character}
    - {second_special_character}

Modules:
  - {fake_module}
""".format(**kwargs)


def create_fake_course_meta(path, **kwargs):
    with open(Path(path) / "course.yaml", "w") as f:
        f.write(get_fake_course_yaml(**kwargs))


class YamlImportTestCase(FakeFsTestCase):
    def create_patch(self, module):
        patcher = patch(module)
        self.addCleanup(patcher.stop)
        mock = patcher.start()
        mock.return_value = random.randint(0, 1000)
        return mock


class TestLoadCourseMeta(YamlImportTestCase):
    def get_fake_values(self):
        return {
            "target_language_name": str(fakes.fake_value()),
            "target_language_code": str(fakes.fake_value()),
            "source_language_name": str(fakes.fake_value()),
            "source_language_code": str(fakes.fake_value()),
            "first_special_character": str(fakes.fake_value()),
            "second_special_character": str(fakes.fake_value()),
            "fake_module": str(fakes.fake_value()),
            "license": str(fakes.fake_value()),
        }

    def setUp(self):
        self.setUpPyfakefs()
        self.fake_path = Path(".") / str(random.randint(0, 1000))
        self.fake_path.mkdir()
        self.fake_values = self.get_fake_values()
        self.result = None
        self.load_dictionary = self.create_patch(
            "liblili2json.yaml.load_dictionary")
        self.load_modules = self.create_patch(
            "liblili2json.yaml.load_modules")
        self.convert_license = self.create_patch(
            "liblili2json.yaml.convert_license")
        self.call_load_course()

    def call_load_course(self, **kwargs):
        create_fake_course_meta(self.fake_path, **{
            **self.fake_values,
            **kwargs
        })
        self.result = load_course(self.fake_path)

    def test_returns_a_correctly_types_course(self):
        assert type(self.result) == Course

    def test_returns_correct_language_name(self):
        assert self.result.target_language.name == \
            self.fake_values["target_language_name"]

    def test_returns_correct_language_code(self):
        assert self.result.target_language.code == \
            self.fake_values["target_language_code"]

    def test_returns_correct_source_language_name(self):
        assert self.result.source_language.name == \
            self.fake_values["source_language_name"]

    def test_returns_correct_source_language_code(self):
        assert self.result.source_language.code == \
            self.fake_values["source_language_code"]

    def test_returns_correct_dictionary(self):
        assert self.result.dictionary == self.load_dictionary.return_value

    def test_returns_correct_modules(self):
        assert self.result.modules == self.load_modules.return_value

    def test_returns_correct_license(self):
        assert self.result.license == self.convert_license.return_value

    def test_calls_convert_license_with_correct_argumetns(self):
        self.convert_license.assert_called_with(self.fake_values["license"])

    def test_calls_load_modules_with_correct_arguments(self):
        self.load_modules.assert_called_with(self.fake_path, [
            self.fake_values["fake_module"], ])

    def test_calls_load_dictionary_with_correct_argumetns(self):
        self.load_dictionary.assert_called_with(self.fake_path,)

    def test_returns_correct_special_characters(self):
        assert self.result.special_characters == [
            self.fake_values["first_special_character"],
            self.fake_values["second_special_character"],
        ]
