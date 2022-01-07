import os
import re
from pathlib import Path
from unittest.mock import Mock, patch
from unittest import TestCase
import pytest
from pyfakefs.fake_filesystem_unittest import TestCase as FakeFsTestCase  # type: ignore
from librelingo_types.data_types import Settings
from librelingo_types import (
    Course,
    License,
    Module,
    Skill,
    Word,
    Phrase,
    Language,
    DictionaryItem,
    TextToSpeechSettings,
    HunspellSettings,
)
from librelingo_yaml_loader.yaml_loader import (
    load_course,
    _convert_license,
    _load_module,
    _load_modules,
    _load_skills,
    _load_skill,
    _load_dictionary,
)
from librelingo_fakes import fakes


class YamlImportTestCase(FakeFsTestCase):
    def create_patch(self, module):
        patcher = patch(module)
        self.addCleanup(patcher.stop)
        mock = patcher.start()
        mock.return_value = fakes.number()
        return mock

    def setUp(self):
        self.setUpPyfakefs()
        self.fake_path = fakes.path()
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
        # pylint: disable=no-self-use
        return f"""
    Course:
      Language:
        Name: {kwargs["target_language_name"]}
        IETF BCP 47: {kwargs["target_language_code"]}
      For speakers of:
        Name: {kwargs["source_language_name"]}
        IETF BCP 47: {kwargs["source_language_code"]}
      License:
        Name: {kwargs["license_full_name"]}
        Short name: {kwargs["license_name"]}
        Link: {kwargs["license_link"]}
      Special characters:
        - {kwargs["first_special_character"]}
        - {kwargs["second_special_character"]}
      Repository: {kwargs["repository_url"]}

    Modules:
      - {kwargs["fake_module"]}

    """

    def get_fake_values(self):
        # pylint: disable=no-self-use
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
            "repository_url": str(fakes.fake_value()),
            "course_dir": str(fakes.fake_value()),
        }

    def set_up_patches(self):
        self.load_dictionary = self.create_patch(
            "librelingo_yaml_loader.yaml_loader._load_dictionary"
        )
        self.load_modules = self.create_patch(
            "librelingo_yaml_loader.yaml_loader._load_modules"
        )
        self.convert_license = self.create_patch(
            "librelingo_yaml_loader.yaml_loader._convert_license"
        )

    def call_function(self):
        self.create_fake_course_meta(
            self.fake_path,
            **{
                **self.fake_values,
            },
        )
        self.result = load_course(self.fake_path)

    def test_returns_a_correctly_types_course(self):
        self.assertIsInstance(self.result, Course)

    def test_returns_correct_language_name(self):
        self.assertEqual(
            self.result.target_language.name, self.fake_values["target_language_name"]
        )

    def test_returns_correct_language_code(self):
        self.assertEqual(
            self.result.target_language.code, self.fake_values["target_language_code"]
        )

    def test_returns_correct_source_language_name(self):
        self.assertEqual(
            self.result.source_language.name, self.fake_values["source_language_name"]
        )

    def test_returns_correct_source_language_code(self):
        self.assertEqual(
            self.result.source_language.code, self.fake_values["source_language_code"]
        )

    def test_returns_correct_dictionary(self):
        self.assertEqual(self.result.dictionary, self.load_dictionary.return_value)

    def test_returns_correct_modules(self):
        self.assertEqual(self.result.modules, self.load_modules.return_value)

    def test_returns_correct_license(self):
        self.assertEqual(self.result.license, self.convert_license.return_value)

    def test_returns_empty_hunspell_list(self):
        self.assertEqual(self.result.settings.hunspell, HunspellSettings())

    def test_calls_convert_license_with_correct_argumetns(self):
        self.convert_license.assert_called_with(
            {
                "Name": self.fake_values["license_full_name"],
                "Short name": self.fake_values["license_name"],
                "Link": self.fake_values["license_link"],
            }
        )

    def test_calls_load_modules_with_correct_arguments(self):
        self.load_modules.assert_called_with(
            self.fake_path,
            [
                self.fake_values["fake_module"],
            ],
            self.load_modules.call_args.args[2],
        )

    def test_calls_load_dictionary_with_correct_argumetns(self):
        self.load_dictionary.assert_called_with(self.load_modules.return_value)

    def test_returns_correct_special_characters(self):
        self.assertEqual(
            self.result.special_characters,
            [
                self.fake_values["first_special_character"],
                self.fake_values["second_special_character"],
            ],
        )

    def test_returns_correct_settings_audio_settings_enabled(self):
        self.assertFalse(self.result.settings.audio_settings.enabled)

    def test_returns_correct_settings_audio_settings_tts(self):
        tts_settings_list = (
            self.result.settings.audio_settings.text_to_speech_settings_list
        )
        self.assertEqual(tts_settings_list, [])

    def _append_settings_to_file(self, new_settings):
        with open(Path(self.fake_path) / "course.yaml", "a") as f:
            f.write(new_settings)

    def test_returns_correct_settings_audio_disabled(self):
        self._append_settings_to_file(
            """
    Settings:
        Audio:
            Enabled: False
        """
        )

        self.result = load_course(self.fake_path)
        self.assertFalse(self.result.settings.audio_settings.enabled)

        tts_settings_list = (
            self.result.settings.audio_settings.text_to_speech_settings_list
        )
        self.assertEqual(tts_settings_list, [])

    def test_returns_correct_settings_audio_enabled(self):
        self._append_settings_to_file(
            """
    Settings:
        Audio:
            Enabled: True
        """
        )

        self.result = load_course(self.fake_path)
        self.assertTrue(self.result.settings.audio_settings.enabled)

        tts_settings_list = (
            self.result.settings.audio_settings.text_to_speech_settings_list
        )
        self.assertEqual(tts_settings_list, [])

    @patch("librelingo_yaml_loader._spelling.hunspell")
    def test_creates_correct_hunspell_settings_1(self, hunspell):
        self._append_settings_to_file(
            f"""
    Settings:
        Hunspell:
            "{self.fake_values["target_language_name"]}": en-US
            "{self.fake_values["source_language_name"]}": es-ES
        """
        )

        self.result = load_course(self.fake_path)
        hunspell.HunSpell.assert_called_with(
            "/usr/share/hunspell/en_US.dic", "/usr/share/hunspell/en_US.aff"
        )

    @patch("librelingo_yaml_loader._spelling.hunspell")
    def test_creates_correct_hunspell_settings_2(self, hunspell):
        self._append_settings_to_file(
            f"""
    Settings:
        Hunspell:
            "{self.fake_values["target_language_name"]}": hu-HU
            "{self.fake_values["source_language_name"]}": es-ES
        """
        )

        self.result = load_course(self.fake_path)
        hunspell.HunSpell.assert_called_with(
            "/usr/share/hunspell/hu_HU.dic", "/usr/share/hunspell/hu_HU.aff"
        )

    @patch("librelingo_yaml_loader._spelling.hunspell")
    def test_returns_correct_hunspell_settings(self, hunspell):
        self._append_settings_to_file(
            f"""
    Settings:
        Hunspell:
            "{self.fake_values["target_language_name"]}": hu-HU
            "{self.fake_values["source_language_name"]}": es-ES
        """
        )

        self.result = load_course(self.fake_path)
        self.assertEqual(
            self.result.settings.hunspell.target_language,
            hunspell.HunSpell.return_value,
        )
        self.assertEqual(
            self.result.settings.hunspell.source_language,
            hunspell.HunSpell.return_value,
        )

    def test_returns_correct_settings_audio_enabled_no_tts(self):
        self._append_settings_to_file(
            """
    Settings:
        Audio:
            Enabled: True
            TTS: []
        """
        )

        self.result = load_course(self.fake_path)
        self.assertTrue(self.result.settings.audio_settings.enabled)

        tts_settings_list = (
            self.result.settings.audio_settings.text_to_speech_settings_list
        )
        self.assertEqual(tts_settings_list, [])

    def test_returns_correct_settings_audio_enabled_and_tts(self):
        self._append_settings_to_file(
            """
    Settings:
        Audio:
            Enabled: True
            TTS:
                - Provider: Polly
                  Voice: Aditi
                  Engine: standard
                - Provider: Polly
                  Voice: Lupe
                  Engine: neural
        """
        )

        self.result = load_course(self.fake_path)
        self.assertTrue(self.result.settings.audio_settings.enabled)

        tts_settings_list = (
            self.result.settings.audio_settings.text_to_speech_settings_list
        )
        self.assertEqual(
            tts_settings_list,
            [
                TextToSpeechSettings(
                    provider="Polly", voice="Aditi", engine="standard"
                ),
                TextToSpeechSettings(provider="Polly", voice="Lupe", engine="neural"),
            ],
        )

    def test_returned_object_has_correct_repository_url(self):
        self.assertEqual(self.result.repository_url, self.fake_values["repository_url"])


def test_load_course_output_matches_value(fs):
    fixture_path = os.path.join(os.path.dirname(__file__), "fixtures", "fake_course")
    fs.add_real_directory(fixture_path)
    result = load_course(fixture_path)
    assert result.target_language == Language(name="French", code="fr")
    assert result.source_language == Language(name="English", code="en")
    assert result.license == License(
        name="CC BY 3.0", full_name="CC BY 3.0", link="https://www.example.com/license"
    )
    assert set(result.dictionary) == set(
        [
            DictionaryItem("the man", "l'homme", False),
            DictionaryItem("l'homme", "the man", True),
            DictionaryItem("the woman", "la femme", False),
            DictionaryItem("la femme", "the woman", True),
            DictionaryItem("dit", "says", True),
            DictionaryItem("bonjour", "hello\nhi", True),
            DictionaryItem("L'homme", "the man", True),
            DictionaryItem("says", "dit", False),
            DictionaryItem("hello", "bonjour\nsalut", False),
            DictionaryItem(
                word="woman", definition="femme", is_in_target_language=False
            ),
            DictionaryItem(word="man", definition="homme", is_in_target_language=False),
            DictionaryItem(
                word="The", definition="la\nle", is_in_target_language=False
            ),
            DictionaryItem(
                word="femme", definition="woman", is_in_target_language=True
            ),
            DictionaryItem(
                word="the", definition="la\nle", is_in_target_language=False
            ),
            DictionaryItem(word="La", definition="the", is_in_target_language=True),
        ]
    )
    assert len(result.modules) == 1
    assert result.modules[0].title == "Basics"
    assert len(result.modules[0].skills) == 1
    assert result.modules[0].skills[0] == Skill(
        name="Hello",
        filename="basics/skills/hello.yaml",
        id=4,
        image_set=["people1", "woman1", "man1"],
        phrases=result.modules[0].skills[0].phrases,
        words=result.modules[0].skills[0].words,
        dictionary=result.modules[0].skills[0].dictionary,
        introduction=None,
    )
    assert result.modules[0].skills[0].phrases == [
        Phrase(
            in_target_language=["La femme dit bonjour", "la femme dit salut"],
            in_source_language=["The woman says hello", "The woman says hi"],
        ),
        Phrase(
            in_target_language=["L'homme dit bonjour", "true"],
            in_source_language=["The man says hello", "The man says hi"],
        ),
    ]

    assert result.modules[0].skills[0].words == [
        Word(
            in_target_language=["l'homme"],
            in_source_language=["the man"],
            pictures=["man1", "man2", "man3"],
        ),
        Word(
            in_target_language=["la femme", "la dame"],
            in_source_language=["the woman", "the female"],
            pictures=None,
        ),
    ]
    assert result.special_characters == [
        "Ç",
        "é",
        "â",
        "ê",
        "î",
        "ô",
        "û",
        "à",
        "è",
        "ù",
        "ë",
        "ï",
        "ü",
    ]


class TestConvertLicense(YamlImportTestCase):
    def get_fake_values(self):
        # pylint: disable=no-self-use
        return {
            "Name": str(fakes.fake_value()),
            "Short name": str(fakes.fake_value()),
            "Link": str(fakes.fake_value()),
        }

    def call_function(self):
        self.result = _convert_license(self.fake_values)

    def test_returns_a_correctly_types_license(self):
        self.assertEqual(type(self.result), License)

    def test_returned_object_has_correct_name(self):
        self.assertEqual(self.result.name, self.fake_values["Short name"])

    def test_returned_object_has_correct_full_name(self):
        self.assertEqual(self.result.full_name, self.fake_values["Name"])

    def test_returned_object_has_correct_license(self):
        self.assertEqual(self.result.link, self.fake_values["Link"])


class TestLoadModuleMeta(YamlImportTestCase):
    def get_fake_module_yaml(self, **kwargs):
        # pylint: disable=no-self-use
        return f"""
    Module:
        Name: {kwargs["module_name"]}

    Skills:
      - {kwargs["skill_name"]}
    """

    def create_fake_module_meta(self, path, **kwargs):
        with open(Path(path) / "module.yaml", "w") as f:
            f.write(self.get_fake_module_yaml(**kwargs))

    def get_fake_values(self):
        # pylint: disable=no-self-use
        return {
            "module_name": str(fakes.fake_value()),
            "skill_name": str(fakes.fake_value()),
        }

    def set_up_patches(self):
        self.load_skills = self.create_patch(
            "librelingo_yaml_loader.yaml_loader._load_skills"
        )

    def call_function(self):
        self.fake_path = self.fake_path / "modules" / "foo"
        self.fake_path.mkdir(parents=True)
        self.create_fake_module_meta(
            self.fake_path,
            **{
                **self.fake_values,
            },
        )
        self.result = _load_module(self.fake_path, fakes.course1)

    def test_returns_a_correctly_types_course(self):
        self.assertIsInstance(self.result, Module)

    def test_returned_object_has_correct_title(self):
        self.assertEqual(self.result.title, self.fake_values["module_name"])

    def test_returned_object_has_correct_skills(self):
        self.assertEqual(self.result.skills, self.load_skills.return_value)

    def test_calls_load_skills_with_the_correct_arguments(self):
        self.load_skills.assert_called_with(
            self.fake_path,
            [
                self.fake_values["skill_name"],
            ],
            fakes.course1,
        )


class LoadModulesTestCase(TestCase):
    @patch("librelingo_yaml_loader.yaml_loader._load_module")
    def test_returns_correct_value(self, load_module):
        load_module.return_value = fakes.fake_value()
        self.assertEqual(
            _load_modules("foo", ["bar"], fakes.course1), [load_module.return_value]
        )

    @patch("librelingo_yaml_loader.yaml_loader._load_module")
    def test_handles_every_module(self, load_module):
        load_module.return_value = fakes.fake_value()
        self.assertEqual(
            _load_modules("foo", ["bar", "baz"], fakes.course1),
            [load_module.return_value] * 2,
        )

    @patch("librelingo_yaml_loader.yaml_loader._load_module")
    def test_calls_load_modules_with_correct_arguments(self, load_module):
        # pylint: disable=no-self-use
        _load_modules("foo", ["bar"], fakes.course1)
        load_module.assert_called_with(Path("foo/bar"), fakes.course1)


class TestLoadSkills(TestCase):
    @patch("librelingo_yaml_loader.yaml_loader._load_skill")
    def test_returns_correct_value(self, load_skill):
        load_skill.return_value = fakes.fake_value()
        self.assertEqual(
            _load_skills("foo", ["bar"], fakes.course1), [load_skill.return_value]
        )

    @patch("librelingo_yaml_loader.yaml_loader._load_skill")
    def test_handles_every_module(self, load_skill):
        load_skill.return_value = fakes.fake_value()
        self.assertEqual(
            _load_skills("foo", ["bar", "baz"], fakes.course1),
            [load_skill.return_value] * 2,
        )

    @patch("librelingo_yaml_loader.yaml_loader._load_skill")
    def test_calls_load_skills_with_correct_arguments(self, load_skill):
        # pylint: disable=no-self-use
        _load_skills("foo", ["bar.yaml"], fakes.course1)
        load_skill.assert_called_with(Path("foo/skills/bar.yaml"), fakes.course1)


class TestLoadSkill(YamlImportTestCase):
    def get_fake_skill_yaml(self, **kwargs):
        # pylint: disable=no-self-use
        return f"""
Skill:
  Name: {kwargs["skill_name"]}
  Id: {kwargs["skill_id"]}
  Thumbnails:
    - {kwargs["img1"]}
    - {kwargs["img2"]}
    - {kwargs["img3"]}
New words: {kwargs["fake_words"]}
Phrases: {kwargs["fake_phrases"]}
Mini-dictionary:
  {kwargs["word3"]}:
    - {kwargs["word2"]}: {kwargs["word1"]}
    - {kwargs["word4"]}:
      - hello
      - {kwargs["word5"]}
    - L'homme: the man
  English:
    - {kwargs["word6"]}: {kwargs["word7"]}
    - hello:
      - bonjour
      - salut
    """

    def get_fake_skill_markdown(self):
        # pylint: disable=no-self-use
        return "<script />" + self.fake_values["introduction"]

    def create_fake_skill_meta(self, path, **kwargs):
        with open(Path(path) / "food.yaml", "w") as f:
            f.write(self.get_fake_skill_yaml(**kwargs))

    def get_fake_values(self):
        # pylint: disable=no-self-use
        return {
            "skill_name": str(fakes.fake_value()),
            "skill_id": str(fakes.fake_value()),
            "img1": str(fakes.fake_value()),
            "img2": str(fakes.fake_value()),
            "img3": str(fakes.fake_value()),
            "fake_words": str(fakes.fake_value()),
            "fake_phrases": str(fakes.fake_value()),
            "word1": str(fakes.fake_value()),
            "word2": str(fakes.fake_value()),
            "word3": str(fakes.fake_value()),
            "word4": str(fakes.fake_value()),
            "word5": str(fakes.fake_value()),
            "word6": str(fakes.fake_value()),
            "word7": str(fakes.fake_value()),
            "introduction": f"# [https://example.com](_{str(fakes.fake_value())}_)",
        }

    def set_up_patches(self):
        self.convert_words = self.create_patch(
            "librelingo_yaml_loader.yaml_loader._convert_words"
        )
        self.convert_phrases = self.create_patch(
            "librelingo_yaml_loader.yaml_loader._convert_phrases"
        )
        self._run_skill_spellcheck = self.create_patch(
            "librelingo_yaml_loader.yaml_loader._run_skill_spellcheck"
        )

    def call_function(self):
        self.fake_path = self.fake_path / "skills"
        self.fake_path.mkdir(parents=True)
        self.create_fake_skill_meta(
            self.fake_path,
            **{
                **self.fake_values,
            },
        )

        with open(self.fake_path / "food.md", "w") as f:
            f.write(self.get_fake_skill_markdown())

        french = Language(self.fake_values["word3"], "")
        english = Language("English", "")
        fake_course = Course(french, english, [], [], None, None, "", "course/path")
        self.result = _load_skill(self.fake_path / "food.yaml", fake_course)

    def test_returns_a_correctly_types_course(self):
        self.assertIsInstance(self.result, Skill)

    def test_returned_object_has_correct_name(self):
        self.assertEqual(self.result.name, self.fake_values["skill_name"])

    def test_returned_object_has_correct_id(self):
        self.assertEqual(self.result.id, self.fake_values["skill_id"])

    def test_returned_object_has_correct_image_set(self):
        self.assertEqual(
            self.result.image_set,
            [
                self.fake_values["img1"],
                self.fake_values["img2"],
                self.fake_values["img3"],
            ],
        )

    def test_returned_object_has_correct_words(self):
        self.assertEqual(self.result.words, self.convert_words.return_value)

    def test_returned_object_has_correct_phrases(self):
        self.assertEqual(self.result.phrases, self.convert_phrases.return_value)

    def test_returned_object_has_correct_introduction(self):
        self.assertEqual(self.result.introduction, self.fake_values["introduction"])

    def test_dictionary_is_a_list_of_dictionary_items(self):
        self.assertIsInstance(self.result.dictionary, list)
        for _ in self.result.dictionary:
            self.assertIsInstance(_, tuple)

    def test_dictionary_is_a_contains_reverse_and_normal_items(self):
        self.assertEqual(set(x[2] for x in self.result.dictionary), {True, False})

    def test_includes_all_dictionary_items(self):
        self.assertEqual(len(self.result.dictionary), 5)

    def test_includes_all_reverse_dictionary_items(self):
        self.assertEqual(len([x for x in self.result.dictionary if x[2]]), 3)

    def test_includes_items_based_on_yaml_file_1(self):
        self.assertIn(
            (self.fake_values["word2"], tuple([self.fake_values["word1"]]), True),
            self.result.dictionary,
        )

    def test_includes_items_based_on_yaml_file_2(self):
        self.assertIn(
            (
                self.fake_values["word4"],
                tuple(["hello", self.fake_values["word5"]]),
                True,
            ),
            self.result.dictionary,
        )

    def test_includes_items_based_on_yaml_file_3(self):
        self.assertIn(
            (self.fake_values["word6"], tuple([self.fake_values["word7"]]), False),
            self.result.dictionary,
        )

    def test_calls_convert_words_with_correct_values(self):
        self.convert_words.assert_called_with(self.fake_values["fake_words"])

    def test_calls_convert_phrases_with_correct_values(self):
        self.convert_phrases.assert_called_with(self.fake_values["fake_phrases"])


def get_fake_word_values():
    in_target_language = [str(fakes.number())]
    in_source_language = [str(fakes.number())]

    return in_source_language, in_target_language


def get_fake_word():
    in_source_language, in_target_language = get_fake_word_values()
    word = Word(in_target_language, in_source_language, [])
    return word, in_source_language, in_target_language


@pytest.fixture
def module_with_word():
    word, in_source_language, in_target_language = get_fake_word()
    my_module = Module("", "", skills=[Skill("", "", "", [word], [], [], None, None)])

    return my_module, in_source_language, in_target_language


def test_load_dictionary_returns_a_list(module_with_word):
    assert isinstance(_load_dictionary([module_with_word[0]]), list)


def test_load_dictionary_returns_a_list_of_dictionary_items(module_with_word):
    assert isinstance(_load_dictionary([module_with_word[0]])[0], DictionaryItem)


def test_load_dictionary_includes_word_from_new_word(module_with_word):
    _, in_source_language, in_target_language = module_with_word
    dict_item = DictionaryItem(
        word=in_source_language[0],
        definition=in_target_language[0],
        is_in_target_language=False,
    )
    assert dict_item in _load_dictionary([module_with_word[0]])


def test_load_dictionary_includes_reverse_word_from_new_word(module_with_word):
    _, in_source_language, in_target_language = module_with_word
    dict_item = DictionaryItem(
        word=in_target_language[0],
        definition=in_source_language[0],
        is_in_target_language=True,
    )
    assert dict_item in _load_dictionary([module_with_word[0]])


def test_load_dictionary_includes_word_from_mini_dictionary(module_with_word):
    module, _, __ = module_with_word
    module.skills[0] = Skill(
        **{**module.skills[0]._asdict(), "dictionary": [("foo", ("bar", "baz"), False)]}
    )
    assert DictionaryItem("foo", "bar\nbaz", False) in _load_dictionary(
        [module_with_word[0]]
    )


def test_load_dictionary_handles_multiple_word_per_skill(module_with_word):
    module_with_word[0].skills[0].words.append(get_fake_word()[0])
    assert len(_load_dictionary([module_with_word[0]])) == 4


def test_load_dictionary_handles_multiple_skills_per_module(module_with_word):
    module_with_word[0].skills.append(
        Skill("", "", "", [get_fake_word()[0]], [], [], None, None)
    )
    assert len(_load_dictionary([module_with_word[0]])) == 4


def test_load_dictionary_handles_multiple_modules(module_with_word):
    new_module = Module(
        "", "", [Skill("", "", "", [get_fake_word()[0]], [], [], None, None)]
    )
    assert len(_load_dictionary([module_with_word[0], new_module])) == 4


def test_load_dictionary_includes_duplicate_words_only_once(module_with_word):
    new_module = Module(
        "",
        "",
        [
            Skill(
                "", "", "", [module_with_word[0].skills[0].words[0]], [], [], None, None
            )
        ],
    )
    assert len(_load_dictionary([module_with_word[0], new_module])) == 2


def test_load_dictionary_has_a_single_string_definition(module_with_word):
    assert isinstance(_load_dictionary([module_with_word[0]])[0].definition, str)


def test_load_dictionary_includes_duplicate_words_includes_multiple_definitions(
    module_with_word,
):
    random_new_word = get_fake_word()[0]
    existing_word = module_with_word[0].skills[0].words[0]
    duplicate_word = Word(
        in_source_language=existing_word.in_source_language,
        in_target_language=random_new_word.in_target_language,
        pictures=[],
    )
    new_module = Module(
        "", "", [Skill("", "", "", [duplicate_word], [], [], None, None)]
    )
    definition = _load_dictionary([module_with_word[0], new_module])[0].definition
    assert (
        random_new_word.in_target_language[0] in definition
        and existing_word.in_target_language[0] in definition
    )


@patch("librelingo_yaml_loader.yaml_loader._load_yaml")
def test_load_module_complains_about_an_empty_file(load_yaml):
    random_path = fakes.path()
    load_yaml.return_value = None
    with pytest.raises(
        RuntimeError,
        match=f'Module file "{random_path}/module.yaml" is empty or does not exist',
    ):
        _load_module(random_path, fakes.course1)


@patch("librelingo_yaml_loader.yaml_loader._load_yaml")
def test_load_module_complains_missing_module_key(load_yaml):
    random_path = fakes.path()
    load_yaml.return_value = {}
    expected_error = (
        f'Module file "{random_path}/module.yaml" needs to have a "Module" key'
    )
    with pytest.raises(RuntimeError, match=expected_error):
        _load_module(random_path, fakes.course1)


@patch("librelingo_yaml_loader.yaml_loader._load_yaml")
def test_load_module_complains_missing_skills_key(load_yaml):
    random_path = fakes.path()
    load_yaml.return_value = {"Module": {}}
    expected_error = (
        f'Module file "{random_path}/module.yaml" needs to have a "Skills" key'
    )
    with pytest.raises(RuntimeError, match=expected_error):
        _load_module(random_path, fakes.course1)


@patch("librelingo_yaml_loader.yaml_loader._load_yaml")
def test_load_module_complains_missing_module_name(load_yaml):
    random_path = fakes.path()
    load_yaml.return_value = {"Module": {}, "Skills": []}
    expected_error = (
        f'Module file "{random_path}/module.yaml" needs to have module name'
    )
    with pytest.raises(RuntimeError, match=expected_error):
        _load_module(random_path, fakes.course1)


@patch("librelingo_yaml_loader.yaml_loader._load_yaml")
def test_load_skills_complains_missing_skills(load_yaml):
    random_path = fakes.path()
    expected_error = (
        f'Module file "{random_path}/module.yaml" needs to have a list of skills'
    )
    with pytest.raises(RuntimeError, match=expected_error):
        _load_skills(random_path, skills=None, course=fakes.course1)


@patch("librelingo_yaml_loader.yaml_loader._load_yaml")
def test_load_skill_complains_about_an_empty_file(load_yaml):
    random_path = fakes.path()
    load_yaml.return_value = None
    with pytest.raises(
        RuntimeError, match=f'Skill file "{random_path}" is empty or does not exist'
    ):
        _load_skill(random_path, fakes.course1)


@patch("librelingo_yaml_loader.yaml_loader._load_yaml")
def test_load_skill_complains_missing_skills_key(load_yaml):
    random_path = fakes.path()
    load_yaml.return_value = {}
    expected_error = f'Skill file "{random_path}" needs to have a "Skill" key'
    with pytest.raises(RuntimeError, match=expected_error):
        _load_skill(random_path, fakes.course1)


@patch("librelingo_yaml_loader.yaml_loader._load_yaml")
def test_load_skill_complains_missing_new_words_key(load_yaml):
    random_path = fakes.path()
    load_yaml.return_value = {"Skill": []}
    expected_error = f'Skill file "{random_path}" needs to have a "New words" key'
    with pytest.raises(RuntimeError, match=expected_error):
        _load_skill(random_path, fakes.course1)


@patch("librelingo_yaml_loader.yaml_loader._load_yaml")
def test_load_skill_complains_missing_skill_name(load_yaml):
    random_path = fakes.path()
    load_yaml.return_value = {"Skill": {}, "New words": [], "Phrases": []}
    expected_error = f'Skill file "{random_path}" needs to have skill name'
    with pytest.raises(RuntimeError, match=expected_error):
        _load_skill(random_path, fakes.course1)


@patch("librelingo_yaml_loader.yaml_loader._load_yaml")
def test_load_skill_complains_missing_skill_id(load_yaml):
    random_path = fakes.path()
    load_yaml.return_value = {"Skill": {"Name": "asd"}, "New words": [], "Phrases": []}
    expected_error = f'Skill file "{random_path}" needs to have skill id'
    with pytest.raises(RuntimeError, match=expected_error):
        _load_skill(random_path, fakes.course1)


@patch("librelingo_yaml_loader.yaml_loader._load_yaml")
def test_load_skill_doesnt_fail_without_thumnails(load_yaml):
    random_path = fakes.path()
    load_yaml.return_value = {
        "Skill": {"Name": "asd", "Id": "4234234"},
        "New words": [],
        "Phrases": [],
    }
    _load_skill(random_path, fakes.course1)


@patch("librelingo_yaml_loader.yaml_loader._load_yaml")
def test_load_skill_complains_about_invalid_phrase(load_yaml):
    random_path = fakes.path()
    load_yaml.return_value = {
        "Skill": {"Name": "asd", "Id": 32423423},
        "New words": [],
        "Phrases": [""],
    }
    expected_error = f'Skill file "{random_path}" has an invalid phrase'
    with pytest.raises(RuntimeError, match=expected_error):
        _load_skill(random_path, fakes.course1)


@patch("librelingo_yaml_loader.yaml_loader._load_yaml")
def test_load_skill_complains_about_invalid_word(load_yaml):
    random_path = fakes.path()
    load_yaml.return_value = {
        "Skill": {"Name": "asd", "Id": 32423423},
        "Phrases": [],
        "New words": [""],
    }
    expected_error = f'Skill file "{random_path}" has an invalid word'
    with pytest.raises(RuntimeError, match=expected_error):
        _load_skill(random_path, fakes.course1)


@patch("librelingo_yaml_loader.yaml_loader._load_yaml")
def test_load_skill_complains_about_misspelled_word_in_source_language(load_yaml):
    random_path = fakes.path()
    fake_word_value = str(fakes.fake_value())
    load_yaml.return_value = {
        "Skill": {"Name": "asd", "Id": 32423423},
        "Phrases": [],
        "New words": [
            {
                "Translation": fake_word_value,
                "Word": "ola",
            }
        ],
    }
    fake_hunspell = Mock()
    fake_hunspell.spell.return_value = False
    fake_course = fakes.customize(
        fakes.course1,
        source_language=Language(fakes.fake_value(), fakes.fake_value),
        settings=Settings(
            hunspell=HunspellSettings(
                source_language=fake_hunspell,
                target_language=Mock(),
            )
        ),
    )
    expected_error = re.escape(
        f'The {fake_course.source_language.name} word "{fake_word_value}" is misspelled.'
    )
    with pytest.raises(RuntimeError, match=expected_error):
        _load_skill(random_path, fake_course)


@patch("librelingo_yaml_loader.yaml_loader._load_yaml")
def test_load_skill_complains_about_misspelled_word_in_target_language(load_yaml):
    random_path = fakes.path()
    fake_word_value_simple = str(fakes.fake_value())
    fake_word_value = f"the {fake_word_value_simple}"
    load_yaml.return_value = {
        "Skill": {"Name": "asd", "Id": 32423423},
        "Phrases": [],
        "New words": [
            {
                "Translation": "le asd",
                "Word": fake_word_value,
            }
        ],
    }
    fake_hunspell = Mock()
    fake_hunspell.spell = lambda word: word != fake_word_value_simple
    fake_course = fakes.customize(
        fakes.course1,
        source_language=Language(fakes.fake_value(), fakes.fake_value),
        settings=Settings(
            hunspell=HunspellSettings(
                source_language=Mock(),
                target_language=fake_hunspell,
            )
        ),
    )
    expected_error = re.escape(
        f'The {fake_course.target_language.name} word "{fake_word_value}" is misspelled.'
    )
    with pytest.raises(RuntimeError, match=expected_error):
        _load_skill(random_path, fake_course)


@patch("librelingo_yaml_loader.yaml_loader._load_yaml")
def test_load_skill_complains_about_misspelled_phrase_in_target_language(load_yaml):
    random_path = fakes.path()
    fake_word = str(fakes.fake_value())
    fake_phrase = f"the {fake_word} foo bar"
    load_yaml.return_value = {
        "Skill": {"Name": "asd", "Id": 32423423},
        "Phrases": [
            {
                "Phrase": fake_phrase,
                "Translation": "foo bar",
            }
        ],
        "New words": [],
    }
    fake_hunspell = Mock()
    fake_hunspell.spell = lambda word: word != fake_word
    fake_course = fakes.customize(
        fakes.course1,
        source_language=Language(fakes.fake_value(), fakes.fake_value),
        settings=Settings(
            hunspell=HunspellSettings(
                source_language=Mock(),
                target_language=fake_hunspell,
            )
        ),
    )
    expected_error = re.escape(
        f'The {fake_course.target_language.name} phrase "{fake_phrase}" is misspelled. The word "{fake_word}" is unknown.'
    )
    with pytest.raises(RuntimeError, match=expected_error):
        _load_skill(random_path, fake_course)


@patch("librelingo_yaml_loader.yaml_loader._load_yaml")
def test_load_skill_complains_about_misspelled_phrase_in_source_language(load_yaml):
    random_path = fakes.path()
    fake_word = str(fakes.fake_value())
    fake_phrase = f"the {fake_word} foo bar"
    load_yaml.return_value = {
        "Skill": {"Name": "asd", "Id": 32423423},
        "Phrases": [
            {
                "Translation": fake_phrase,
                "Phrase": "foo bar",
            }
        ],
        "New words": [],
    }
    fake_hunspell = Mock()
    fake_hunspell.spell = lambda word: word != fake_word
    fake_course = fakes.customize(
        fakes.course1,
        source_language=Language(fakes.fake_value(), fakes.fake_value),
        settings=Settings(
            hunspell=HunspellSettings(
                source_language=fake_hunspell,
                target_language=Mock(),
            )
        ),
    )
    expected_error = re.escape(
        f'The {fake_course.source_language.name} phrase "{fake_phrase}" is misspelled. The word "{fake_word}" is unknown.'
    )
    with pytest.raises(RuntimeError, match=expected_error):
        _load_skill(random_path, fake_course)
