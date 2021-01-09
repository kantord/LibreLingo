import os
import random
from pathlib import Path
from unittest.mock import patch
from unittest import TestCase
from pyfakefs.fake_filesystem_unittest import TestCase as FakeFsTestCase
from liblili2json.data_types import Course, License, Module, Skill, Word, Phrase, \
    Language
from liblili2json.yaml_loader import load_course, convert_license, \
    load_module, load_modules, load_skills, load_skill, convert_words, \
    convert_word, convert_phrases, convert_phrase
from . import fakes


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
    def create_fake_course_meta(self, path, **kwargs):
        with open(Path(path) / "course.yaml", "w") as f:
            f.write(self.get_fake_course_yaml(**kwargs))

    def get_fake_course_yaml(self, **kwargs):
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
            "liblili2json.yaml_loader.load_dictionary")
        self.load_modules = self.create_patch(
            "liblili2json.yaml_loader.load_modules")
        self.convert_license = self.create_patch(
            "liblili2json.yaml_loader.convert_license")

    def call_function(self):
        self.create_fake_course_meta(self.fake_path, **{
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


def test_load_course_output_matches_value(fs):
    fixture_path = os.path.join(os.path.dirname(
        __file__), 'fixtures', "fake_course")
    fs.add_real_directory(fixture_path)
    result = load_course(fixture_path)
    assert result.target_language == Language(
        name="French",
        code="fr"
    )
    assert result.source_language == Language(
        name="English",
        code="en")
    assert result.license == License(name='CC BY 3.0', full_name='CC BY 3.0',
                                     link='https://www.example.com/license')
    assert result.dictionary == []
    assert len(result.modules) == 1
    assert result.modules[0].title == "Basics"
    assert len(result.modules[0].skills) == 1
    assert result.modules[0].skills[0] == Skill(
        name="Hello",
        id=4,
        image_set=["people1", "woman1", "man1"],
        phrases=result.modules[0].skills[0].phrases,
        words=result.modules[0].skills[0].words,
    )
    assert result.modules[0].skills[0].phrases == [
        Phrase(
            in_target_language=['La femme dit bonjour',
                                'la femme dit salut'],
            in_source_language=['The woman says hello',
                                'The woman says hi']),
        Phrase(
            in_target_language=["L'homme dit bonjour",
                                "L'homme dit salut"],
            in_source_language=['The man says hello',
                                'The man says hi'])]

    assert result.modules[0].skills[0].words == [
        Word(
            in_target_language=["l'homme"],
            in_source_language=['the man'],
            pictures=['man1', 'man2', 'man3']
        ),
        Word(
            in_target_language=['la femme', 'la dame'],
            in_source_language=['the woman', 'the female'],
            pictures=None
        )
    ]
    assert result.special_characters == [
        'Ç', 'é', 'â', 'ê', 'î', 'ô', 'û', 'à', 'è', 'ù', 'ë', 'ï', 'ü'
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

    def get_fake_module_yaml(self, **kwargs):
        return """
    Module:
        Name: {module_name}

    Skills:
      - {skill_name}
    """.format(**kwargs)

    def create_fake_module_meta(self, path, **kwargs):
        with open(Path(path) / "module.yaml", "w") as f:
            f.write(self.get_fake_module_yaml(**kwargs))

    def get_fake_values(self):
        return {
            "module_name": str(fakes.fake_value()),
            "skill_name": str(fakes.fake_value()),
        }

    def set_up_patches(self):
        self.load_skills = self.create_patch(
            "liblili2json.yaml_loader.load_skills")

    def call_function(self):
        self.fake_path = self.fake_path / "modules" / "foo"
        self.fake_path.mkdir(parents=True)
        self.create_fake_module_meta(self.fake_path, **{
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
    @ patch('liblili2json.yaml_loader.load_module')
    def test_returns_correct_value(self, load_module):
        load_module.return_value = fakes.fake_value()
        assert load_modules("foo", ["bar"]) == [load_module.return_value]

    @ patch('liblili2json.yaml_loader.load_module')
    def test_handles_every_module(self, load_module):
        load_module.return_value = fakes.fake_value()
        assert load_modules("foo", ["bar", "baz"]) == [
            load_module.return_value] * 2

    @ patch('liblili2json.yaml_loader.load_module')
    def test_calls_load_modules_with_correct_arguments(self, load_module):
        load_modules("foo", ["bar"])
        load_module.assert_called_with(Path("foo/bar"))


class TestLoadSkills(TestCase):
    @ patch('liblili2json.yaml_loader.load_skill')
    def test_returns_correct_value(self, load_skill):
        load_skill.return_value = fakes.fake_value()
        assert load_skills("foo", ["bar"]) == [load_skill.return_value]

    @ patch('liblili2json.yaml_loader.load_skill')
    def test_handles_every_module(self, load_skill):
        load_skill.return_value = fakes.fake_value()
        assert load_skills("foo", ["bar", "baz"]) == [
            load_skill.return_value] * 2

    @ patch('liblili2json.yaml_loader.load_skill')
    def test_calls_load_skills_with_correct_arguments(self, load_skill):
        load_skills("foo", ["bar.yaml"])
        load_skill.assert_called_with(Path("foo/skills/bar.yaml"))


class TestLoadSkill(YamlImportTestCase):
    def get_fake_skill_yaml(self, **kwargs):
        return """
Skill:
  Name: {skill_name}
  Id: {skill_id}
  Thumbnails:
    - {img1}
    - {img2}
    - {img3}
New words: {fake_words}
Phrases: {fake_phrases}

Mini-dictionary:
  French:
    - dit: says
    - bonjour:
      - hello
      - hi
    - L'homme: the man

  English:
    - says: dit
    - hello:
      - bonjour
      - salut
    """.format(**kwargs)

    def create_fake_skill_meta(self, path, **kwargs):
        with open(Path(path) / "food.yaml", "w") as f:
            f.write(self.get_fake_skill_yaml(**kwargs))

    def get_fake_values(self):
        return {
            "skill_name": str(fakes.fake_value()),
            "skill_id": str(fakes.fake_value()),
            "img1": str(fakes.fake_value()),
            "img2": str(fakes.fake_value()),
            "img3": str(fakes.fake_value()),
            "fake_words": str(fakes.fake_value()),
            "fake_phrases": str(fakes.fake_value()),
        }

    def set_up_patches(self):
        self.convert_words = self.create_patch(
            "liblili2json.yaml_loader.convert_words")
        self.convert_phrases = self.create_patch(
            "liblili2json.yaml_loader.convert_phrases")

    def call_function(self):
        self.fake_path = self.fake_path / "skills"
        self.fake_path.mkdir(parents=True)
        self.create_fake_skill_meta(self.fake_path, **{
            **self.fake_values,
        })
        self.result = load_skill(self.fake_path / "food.yaml")

    def test_returns_a_correctly_types_course(self):
        assert type(self.result) == Skill

    def test_returned_object_has_correct_name(self):
        assert self.result.name == self.fake_values["skill_name"]

    def test_returned_object_has_correct_id(self):
        assert self.result.id == self.fake_values["skill_id"]

    def test_returned_object_has_correct_image_set(self):
        assert self.result.image_set == [
            self.fake_values["img1"],
            self.fake_values["img2"],
            self.fake_values["img3"],
        ]

    def test_returned_object_has_correct_words(self):
        assert self.result.words == self.convert_words.return_value

    def test_returned_object_has_correct_phrases(self):
        assert self.result.phrases == self.convert_phrases.return_value

    def test_calls_convert_words_with_correct_values(self):
        self.convert_words.assert_called_with(self.fake_values["fake_words"])

    def test_calls_convert_phrases_with_correct_values(self):
        self.convert_phrases.assert_called_with(
            self.fake_values["fake_phrases"])


class TestConvertWords(TestCase):
    def test_returns_a_list(self):
        assert type(convert_words([])) == list

    @ patch('liblili2json.yaml_loader.convert_word')
    def test_converts_every_word(self, convert_word):
        raw_words = [None] * random.randint(0, 1000)
        assert len(convert_words(raw_words)) == len(raw_words)

    @ patch('liblili2json.yaml_loader.convert_word')
    def test_returns_correct_value(self, convert_word):
        convert_word.return_value = fakes.fake_value()
        assert convert_words([None]) == [convert_word.return_value]

    @ patch('liblili2json.yaml_loader.convert_word')
    def test_calls_convert_word_with_correct_values(self, convert_word):
        word1 = fakes.fake_value()
        word2 = fakes.fake_value()
        convert_words([word1, word2])
        convert_word.assert_any_call(word1)
        convert_word.assert_any_call(word2)


class TestConvertWord(TestCase):
    def setUp(self):
        self.fakeWord = {
            "Images": fakes.fake_value(),
            "Word": fakes.fake_value(),
            "Synonyms": [
                fakes.fake_value(),
                fakes.fake_value(),
            ],
            "Translation": fakes.fake_value(),
            "Also accepted": [
                fakes.fake_value(),
                fakes.fake_value(),
            ]
        }

    def test_returns_a_word_object(self):
        assert type(convert_word(self.fakeWord)) == Word

    def test_includes_the_correct_pictures(self):
        assert convert_word(self.fakeWord).pictures == self.fakeWord["Images"]

    def test_pictures_are_optional(self):
        del self.fakeWord["Images"]
        assert convert_word(self.fakeWord).pictures is None

    def test_includes_main_word(self):
        assert convert_word(
            self.fakeWord).in_target_language[0] == self.fakeWord["Word"]

    def test_includes_synonyms(self):
        result = convert_word(self.fakeWord).in_target_language
        assert self.fakeWord["Synonyms"][0] in result
        assert self.fakeWord["Synonyms"][1] in result

    def test_synonyms_are_optional(self):
        del self.fakeWord["Synonyms"]
        assert len(convert_word(self.fakeWord).in_target_language) == 1

    def test_includes_translation(self):
        assert convert_word(
            self.fakeWord).in_source_language[0] == self.fakeWord["Translation"]

    def test_includes_alternative_translations(self):
        result = convert_word(self.fakeWord).in_source_language
        assert self.fakeWord["Also accepted"][0] in result
        assert self.fakeWord["Also accepted"][1] in result

    def test_alternative_translations_are_optional(self):
        del self.fakeWord["Also accepted"]
        assert len(convert_word(self.fakeWord).in_source_language) == 1


class TestConvertPhrases(TestCase):
    def test_returns_a_list(self):
        assert type(convert_phrases([])) == list

    @patch('liblili2json.yaml_loader.convert_phrase')
    def test_converts_every_word(self, convert_phrase):
        raw_words = [None] * random.randint(0, 1000)
        assert len(convert_phrases(raw_words)) == len(raw_words)

    @patch('liblili2json.yaml_loader.convert_phrase')
    def test_returns_correct_value(self, convert_phrase):
        convert_phrase.return_value = fakes.fake_value()
        assert convert_phrases([None]) == [convert_phrase.return_value]

    @patch('liblili2json.yaml_loader.convert_phrase')
    def test_calls_convert_phrases_with_correct_values(self, convert_phrase):
        word1 = fakes.fake_value()
        word2 = fakes.fake_value()
        convert_phrases([word1, word2])
        convert_phrase.assert_any_call(word1)
        convert_phrase.assert_any_call(word2)


class TestConvertPhrase(TestCase):
    def setUp(self):
        self.fakePhrase = {
            "Phrase": fakes.fake_value(),
            "Alternative versions": [
                fakes.fake_value(),
                fakes.fake_value(),
            ],
            "Translation": fakes.fake_value(),
            "Alternative translations": [
                fakes.fake_value(),
                fakes.fake_value(),
            ]
        }

    def test_returns_a_phrase_object(self):
        assert type(convert_phrase(self.fakePhrase)) == Phrase

    def test_includes_main_version(self):
        assert convert_phrase(
            self.fakePhrase).in_target_language[0] == self.fakePhrase["Phrase"]

    def test_includes_alternative_versions(self):
        result = convert_phrase(self.fakePhrase).in_target_language
        assert self.fakePhrase["Alternative versions"][0] in result
        assert self.fakePhrase["Alternative versions"][1] in result

    def test_alternative_versions_are_optional(self):
        del self.fakePhrase["Alternative versions"]
        assert len(convert_phrase(self.fakePhrase).in_target_language) == 1

    def test_includes_translation(self):
        assert convert_phrase(
            self.fakePhrase).in_source_language[0] == self.fakePhrase["Translation"]

    def test_includes_alternative_translations(self):
        result = convert_phrase(self.fakePhrase).in_source_language
        assert self.fakePhrase["Alternative translations"][0] in result
        assert self.fakePhrase["Alternative translations"][1] in result

    def test_alternative_translations_are_optional(self):
        del self.fakePhrase["Alternative translations"]
        assert len(convert_phrase(self.fakePhrase).in_source_language) == 1
