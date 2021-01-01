import random
from pathlib import Path
from unittest.mock import patch
from unittest import TestCase
from pyfakefs.fake_filesystem_unittest import TestCase as FakeFsTestCase
from liblili2json.types import Course, License, Module
from liblili2json.yaml import load_course, convert_license, load_module, \
    load_modules
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
  License:
    Name: {license_full_name}
    Short name: {license_name}
    Link: {license_link}
  Special characters:
    - {first_special_character}
    - {second_special_character}

Modules:
  - {fake_module}
""".format(**kwargs)


def get_fake_module_yaml(**kwargs):
    return """
Module:
    Name: {module_name}

Skills:
  - {skill_name}
""".format(**kwargs)


def create_fake_course_meta(path, **kwargs):
    with open(Path(path) / "course.yaml", "w") as f:
        f.write(get_fake_course_yaml(**kwargs))


def create_fake_module_meta(path, **kwargs):
    with open(Path(path) / "module.yaml", "w") as f:
        f.write(get_fake_module_yaml(**kwargs))


class YamlImportTestCase(FakeFsTestCase):
    def create_patch(self, module):
        patcher = patch(module)
        self.addCleanup(patcher.stop)
        mock = patcher.start()
        mock.return_value = random.randint(0, 1000)
        return mock

    def setUp(self):
        self.setUpPyfakefs()
        self.fake_path = Path(".") / str(random.randint(0, 1000))
        self.fake_path.mkdir()
        self.fake_values = self.get_fake_values()
        self.result = None
        self.set_up_patches()
        self.call_function()

    def set_up_patches(self):
        pass


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
            "license_name": str(fakes.fake_value()),
            "license_full_name": str(fakes.fake_value()),
            "license_link": str(fakes.fake_value()),
        }

    def set_up_patches(self):
        self.load_dictionary = self.create_patch(
            "liblili2json.yaml.load_dictionary")
        self.load_modules = self.create_patch(
            "liblili2json.yaml.load_modules")
        self.convert_license = self.create_patch(
            "liblili2json.yaml.convert_license")

    def call_function(self):
        create_fake_course_meta(self.fake_path, **{
            **self.fake_values,
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
        self.convert_license.assert_called_with(
            {
                "Name": self.fake_values["license_full_name"],
                "Short name": self.fake_values["license_name"],
                "Link": self.fake_values["license_link"],
            }
        )

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


class TestConvertLicense(YamlImportTestCase):
    def get_fake_values(self):
        return {
            "Name": str(fakes.fake_value()),
            "Short name": str(fakes.fake_value()),
            "Link": str(fakes.fake_value()),
        }

    def call_function(self):
        self.result = convert_license(self.fake_values)

    def test_returns_a_correctly_types_license(self):
        assert type(self.result) == License

    def test_returned_object_has_correct_name(self):
        assert self.result.name == self.fake_values["Short name"]

    def test_returned_object_has_correct_full_name(self):
        assert self.result.full_name == self.fake_values["Name"]

    def test_returned_object_has_correct_license(self):
        assert self.result.link == self.fake_values["Link"]


class TestLoadModuleMeta(YamlImportTestCase):

    def get_fake_values(self):
        return {
            "module_name": str(fakes.fake_value()),
            "skill_name": str(fakes.fake_value()),
        }

    def set_up_patches(self):
        self.load_skills = self.create_patch(
            "liblili2json.yaml.load_skills")

    def call_function(self):
        self.fake_path = self.fake_path / "modules" / "foo"
        self.fake_path.mkdir(parents=True)
        create_fake_module_meta(self.fake_path, **{
            **self.fake_values,
        })
        self.result = load_module(self.fake_path)

    def test_returns_a_correctly_types_course(self):
        assert type(self.result) == Module

    def test_returned_object_has_correct_title(self):
        assert self.result.title == self.fake_values["module_name"]

    def test_returned_object_has_correct_skills(self):
        assert self.result.skills == self.load_skills.return_value

    def test_calls_load_skills_with_the_correct_arguments(self):
        self.load_skills.assert_called_with(self.fake_path, [
            self.fake_values["skill_name"],
        ])


class LoadModulesTestCase(TestCase):
    @patch('liblili2json.yaml.load_module')
    def test_returns_correct_value(self, load_module):
        load_module.return_value = fakes.fake_value()
        assert load_modules("foo", ["bar"]) == [load_module.return_value]

    @patch('liblili2json.yaml.load_module')
    def test_handles_every_module(self, load_module):
        load_module.return_value = fakes.fake_value()
        assert load_modules("foo", ["bar", "baz"]) == [
            load_module.return_value] * 2

    @patch('liblili2json.yaml.load_module')
    def test_calls_load_modules_with_correct_arguments(self, load_module):
        load_modules("foo", ["bar"])
        load_module.assert_called_with(Path("foo/bar"))
