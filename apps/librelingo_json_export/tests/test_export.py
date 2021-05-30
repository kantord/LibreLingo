
import re
from unittest import TestCase
import pytest

from unittest.mock import patch, call
import json
import os
import random
from pyfakefs.fake_filesystem_unittest import TestCase as FakeFsTestCase
from librelingo_fakes import fakes
from librelingo_json_export.export import _export_course_skills, _export_skill, \
    _export_course_data, export_course
from librelingo_types import Module, Language
from librelingo_json_export.challenges import _get_word_challenges
from librelingo_json_export.challenges import _get_phrase_challenges
from librelingo_utils import get_dumb_opaque_id
from librelingo_utils import clean_word
from librelingo_types import Course
from librelingo_types import DictionaryItem
from librelingo_json_export.dictionary import _define_words_in_sentence
from librelingo_json_export.dictionary import _define_word
from librelingo_json_export.course import _get_course_data
from librelingo_json_export.skills import _get_skill_data
from librelingo_utils import calculate_number_of_levels


course_with_markdown = fakes.customize(
        fakes.course2,
        modules=[
            fakes.customize(
                fakes.course2.modules[0],
                skills=[
                    fakes.customize(
                        fakes.course2.modules[0].skills[0],
                        introduction="# *Hello* (https://example.com)[_world_]!",
                    )
                ]
            )
        ]
    )


def get_fake_skill(introduction=None):
    randomname = str(random.randint(0, 5000))
    return randomname, fakes.customize(
        fakes.skillWithPhraseAndWord,
        name="Animals {}".format(randomname),
        introduction=introduction,
    )


class TestExportCourseSkills(FakeFsTestCase):
    def setUp(self):
        self.setUpPyfakefs()
        self.export_path = fakes.path()

    @patch('librelingo_json_export.export._export_skill')
    def test_exports_all_skills(self, _export_skill):
        _, fake_skill_1 = get_fake_skill()
        _, fake_skill_2 = get_fake_skill()
        _, fake_skill_3 = get_fake_skill()
        fake_module_1 = Module(title="", skills=[
            fake_skill_1,
            fake_skill_2,
        ])
        fake_module_2 = Module(title="", skills=[
            fake_skill_3,
        ])
        fake_course = fakes.customize(fakes.course1, modules=[
            fake_module_1, fake_module_2
        ])
        _export_course_skills(self.export_path, fake_course)
        _export_skill.assert_has_calls([
            call(self.export_path, fake_skill_1,  fake_course, None),
            call(self.export_path, fake_skill_2,  fake_course, None),
            call(self.export_path, fake_skill_3,  fake_course, None),
        ], any_order=True)


class TestExportSkill(FakeFsTestCase):
    def setUp(self):
        self.setUpPyfakefs()
        self.export_path = fakes.path()

    def test_creates_the_challenges_file(self):
        randomname, fake_skill = get_fake_skill()
        _export_skill(self.export_path,
                      fake_skill, fakes.course1)
        self.assertTrue(os.path.exists(self.export_path / "challenges" /
                                       "animals-{}.json".format(randomname)))

    def test_creates_the_introduction_file(self):
        fake_name = str(fakes.fake_value())
        introduction="# *Hello* (https://example.com)[_{}_]!".format(fake_name)
        randomname, fake_skill = get_fake_skill(introduction=introduction)
        _export_skill(self.export_path,
                      fake_skill, fakes.course1)
        with open(self.export_path / "introduction" / "animals-{}.md".format(randomname)) as f:
            introduction_file_content = f.read()
            self.assertEqual(introduction_file_content, introduction)


    def test_does_not_create_an_introduction_file_if_theres_no_introduction(self):
        randomname, fake_skill = get_fake_skill()
        _export_skill(self.export_path,
                      fake_skill, fakes.course1)
        self.assertFalse(os.path.exists(self.export_path / "introduction" /
                                       "animals-{}.md".format(randomname)))


    @patch('librelingo_json_export.export._get_skill_data')
    def test_calls__get_skill_data_with_correct_value(self, _get_skill_data):
        _get_skill_data.return_value = []
        _export_skill(self.export_path,
                      fakes.skillWithPhraseAndWord, fakes.course1)
        _get_skill_data.assert_called_with(
            fakes.skillWithPhraseAndWord, fakes.course1)

    @patch('librelingo_json_export.export._get_skill_data')
    def test_writes_correct_value_into_json_file(self, _get_skill_data):
        fake_skill_data = {
            "fake_skill_data": random.randint(0, 1000)
        }
        _get_skill_data.return_value = fake_skill_data
        _export_skill(self.export_path,
                      fakes.skillWithPhraseAndWord, fakes.course1)
        with open(self.export_path /
                  "challenges" / "masculine.json") as f:
            assert json.loads(f.read()) == fake_skill_data

    def test_assert_logs_correctly(self):
        with self.assertLogs("librelingo_json_export", level="INFO") as log:
            _, fake_skill = get_fake_skill()
            _export_skill(self.export_path,
                          fake_skill, fakes.course1)
            assert log.output[0] == \
                "INFO:librelingo_json_export:Writing skill '{}'".format(
                fake_skill.name)


class TestExportCourseData(FakeFsTestCase):
    def setUp(self):
        self.setUpPyfakefs()
        self.export_path = fakes.path()

    def test_creates_the_correct_file(self):
        randomname, fake_skill = get_fake_skill()
        _export_course_data(self.export_path, fakes.course1)
        self.assertTrue(os.path.exists(self.export_path / "courseData.json"))

    @patch('librelingo_json_export.export._get_course_data')
    def test_calls__get_course_data_with_correct_value(self, _get_course_data):
        _get_course_data.return_value = []
        _export_course_data(self.export_path, fakes.course1)
        _get_course_data.assert_called_with(fakes.course1)

    @patch('librelingo_json_export.export._get_course_data')
    def test_writes_correct_value_into_json_file(self, _get_course_data):
        fake_course_data = {
            "fake_course_data": random.randint(0, 1000)
        }
        _get_course_data.return_value = fake_course_data
        _export_course_data(self.export_path, fakes.course1)
        with open(self.export_path / "courseData.json") as f:
            assert json.loads(f.read()) == fake_course_data

    def test_assert_logs_correctly(self):
        with self.assertLogs("librelingo_json_export", level="INFO") as log:
            randomname1 = str(random.randint(0, 5000))
            randomname2 = str(random.randint(0, 5000))
            fake_course = fakes.customize(
                fakes.course1,
                target_language=Language(
                    name=randomname1,
                    code=""
                ),
                source_language=Language(
                    name=randomname2,
                    code=""
                )
            )
            _export_course_data(self.export_path, fake_course)
            assert log.output[0] == \
                "INFO:librelingo_json_export:Writing course '{}' for '{}' speakers".format(
                    randomname1, randomname2)


class TestExportCourse(FakeFsTestCase):
    def setUp(self):
        self.setUpPyfakefs()
        self.export_path = fakes.path()

    @patch('librelingo_json_export.export._export_course_data')
    def test_calls__export_course_data_with_correct_value(self, _export_course_data):
        export_course(self.export_path, fakes.course1)
        _export_course_data.assert_called_with(self.export_path, fakes.course1,
                                               None)

    @patch('librelingo_json_export.export._export_course_skills')
    def test_calls__export_course_skills_with_correct_value(self, _export_course_skills):
        export_course(self.export_path, fakes.course1)
        _export_course_skills.assert_called_with(
            self.export_path, fakes.course1, None)


def test__get_course_data_return_value():
    """
    Tests the return value of _get_course_data with the
    fakes.course1 object
    """
    assert _get_course_data(fakes.course1) == {
        "languageName": "my language",
        "languageCode": "de",
        "specialCharacters": ["ä", "ß"],
        "license": {
            "name": {
                "short": "foo",
                "full": "foo bar license",
            },
            "link": None,
        },
        "modules": [
            {
                "title": "Basics",
                "skills": [
                    {
                        "title": "Masculine",
                        "practiceHref": "masculine",
                        "summary": ["lorem ipsum"],
                        "imageSet": ["man1", "man2", "boy1"],
                        'id': 'd7279e4777cd',
                        "levels": 1,
                    },
                    {
                        "title": "Feminine",
                        "practiceHref": "feminine",
                        "imageSet": ["woman1", "woman2", "girl1"],
                        "summary": ["foous", "apfel",  "foous", "apfel", "foous barus"],
                        'id': 'd7279e4777cd',
                        "levels": 2,
                    },
                    {
                        "title": "Neuter",
                        "summary": [],
                        "practiceHref": "neuter",
                        "imageSet": ["foo1", "bar1", "bar2"],
                        'id': 'd7279e4777cd',
                        "levels": 1,
                    },
                ]
            },
            {
                "title": "Phrases",
                "skills": []
            }
        ]
    }


def test__get_course_data_return_value_2():
    """
    Tests the return value of _get_course_data with the
    fakes.course2 object
    """
    assert _get_course_data(fakes.course2) == {
        "languageName": "another language",
        "languageCode": "tr",
        "specialCharacters": ["ç", "ş"],
        "license": {
            "name": {
                "short":  "lorem",
                "full": "ipsum lorem license"
            },
            "link":  "https://example.com/lipsum_license",
        },
        "modules": [
            {
                "title": "Animals",
                "skills": [
                    {
                        'id': 'd7279e4777cd',
                        "title": "Mammals and birds",
                        "practiceHref": "mammals-and-birds",
                        "summary": ["foous"],
                        "levels": 1,
                    }
                ]
            },
        ]
    }


def test__get_course_data_return_value_with_introduction():
    """
    Tests the return value of _get_course_data with the
    fakes.course2 object

    """
    assert _get_course_data(course_with_markdown) == {
        "languageName": "another language",
        "languageCode": "tr",
        "specialCharacters": ["ç", "ş"],
        "license": {
            "name": {
                "short":  "lorem",
                "full": "ipsum lorem license"
            },
            "link":  "https://example.com/lipsum_license",
        },
        "modules": [
            {
                "title": "Animals",
                "skills": [
                    {
                        'id': 'd7279e4777cd',
                        "title": "Mammals and birds",
                        "practiceHref": "mammals-and-birds",
                        "summary": ["foous"],
                        "introduction": "mammals-and-birds.md",
                        "levels": 1,
                    }
                ]
            },
        ]
    }


def test_calculate_number_of_levels():
    examples = [
        {"words": 0, "phrases": 0, "result": 1},
        {"words": 10, "phrases": 0, "result": 2},
        {"words": 0, "phrases": 10, "result": 3},
        {"words": 10, "phrases": 10, "result": 4},
    ]

    for example in examples:
        assert calculate_number_of_levels(
            example["words"], example["phrases"]) == example["result"]


class TestGetSkillData(TestCase):
    def test_empty_skill(self):
        assert _get_skill_data(fakes.emptySkill, fakes.courseEmpty) == {
            "id": "d7279e4777cd",
            "levels": 1,
            "challenges": []
        }

    @patch('librelingo_json_export.skills.calculate_number_of_levels')
    def test_correct_number_of_levels(self, mock):
        FAKE_NUMBER = "fake number"
        mock.return_value = FAKE_NUMBER
        converted_skill = _get_skill_data(fakes.emptySkill, fakes.course1)
        assert converted_skill["levels"] == FAKE_NUMBER

    @patch('librelingo_json_export.skills.calculate_number_of_levels')
    def test_calculates_levels_correctly(self, mock):
        _get_skill_data(fakes.skills[1], fakes.course1)
        mock.assert_called_with(4, 1)

    @patch('librelingo_json_export.skills.get_challenges_data')
    def test_correct_challenges(self, mock):
        FAKE_CHALLENGES = "fake challenges"
        mock.return_value = FAKE_CHALLENGES
        converted_skill = _get_skill_data(fakes.skills[1], fakes.course1)
        assert converted_skill["challenges"] == FAKE_CHALLENGES

    @patch('librelingo_json_export.skills.get_challenges_data')
    def test_formats_challenges_correctly(self, mock):
        _get_skill_data(fakes.skills[1], fakes.course1)
        mock.assert_called_with(fakes.skills[1], fakes.course1)


class CleanWordTest(TestCase):
    def test_empty_string(self):
        assert clean_word("") == ""

    def test_removes_parentheses(self):
        assert clean_word("(foo") == "foo"

    def test_removes_comma(self):
        assert clean_word("foo,") == "foo"

    def test_doesnt_remove_parts_of_word_1(self):
        assert clean_word("ba-ar") == "ba-ar"

    def test_doesnt_remove_parts_of_word_2(self):
        assert clean_word("L'Hospitalet") == "L'Hospitalet"

    def test_removes_exclamation_mark(self):
        assert clean_word("ba-ar!") == "ba-ar"

    def test_weird_english_posessive(self):
        assert clean_word("cats'") == "cats'"


class DefineWordsInSentenceTest(TestCase):
    def test_empty_sentence(self):
        assert _define_words_in_sentence(fakes.course1, "", False) == []

    @patch('librelingo_json_export.dictionary._define_word')
    def test_calls_define_word_the_correct_number_of_times(self, _define_word):
        _define_words_in_sentence(fakes.course1, "foo bar baz", False)
        assert _define_word.call_count == 3

    @patch('librelingo_json_export.dictionary._define_word')
    def test_calls_define_word_with_the_correct_data(self, _define_word):
        is_in_target_language = fakes.fake_value()
        fake_word = str(fakes.fake_value())
        _define_words_in_sentence(
            fakes.course1, fake_word, is_in_target_language)
        _define_word.assert_called_with(
            fakes.course1, fake_word, is_in_target_language)

    @patch('librelingo_json_export.dictionary._define_word')
    def test_returns_correct_value(self, _define_word):
        _define_word.return_value = fakes.fake_value()
        assert _define_words_in_sentence(
            fakes.course1, "foo", True) == [_define_word.return_value]

    @patch('librelingo_json_export.dictionary._define_word')
    def test_defines_every_word(self, _define_word):
        _define_word.return_value = fakes.fake_value()
        assert _define_words_in_sentence(
            fakes.course1, "foo bar", True) == [_define_word.return_value, _define_word.return_value]


class TestDefineWord(TestCase):
    def test_definition_not_found(self):
        word = str(fakes.fake_value())
        pattern = re.escape(
            'The another language word "{}" does not have a definition. Please add it to the mini-dictionary.'
            .format(word))
        with pytest.raises(
                ValueError,
                match=pattern):
            assert _define_word(fakes.course1, word,
                                is_in_target_language=False)

    def test_includes_definition(self):
        word = str(fakes.fake_value())
        meaning = str(fakes.fake_value())
        is_in_target_language = fakes.fake_value()
        my_course = Course(
            **{
                **(fakes.course1._asdict()),
                "dictionary": [
                    DictionaryItem(
                        word=word,
                        definition=meaning,
                        is_in_target_language=is_in_target_language
                    ),
                ]
            },
        )
        assert _define_word(my_course, word, is_in_target_language=is_in_target_language) == {
            "word": word,
            "definition": meaning
        }

    def test_normalizes_words(self):
        word = str(fakes.fake_value())
        meaning = str(fakes.fake_value())
        is_in_target_language = fakes.fake_value()
        my_course = Course(
            **{
                **(fakes.course1._asdict()),
                "dictionary": [
                    DictionaryItem(
                        word=word,
                        definition=meaning,
                        is_in_target_language=is_in_target_language
                    ),
                ]
            },
        )
        assert _define_word(my_course, word + ",", is_in_target_language=is_in_target_language) == {
            "word": word + ",",
            "definition": meaning
        }

    def test_matches_definitions_in_a_case_insensitive_way(self):
        my_course = Course(
            **{
                **(fakes.course1._asdict()),
                "dictionary": [
                    DictionaryItem(
                        word="Easier",
                        definition="by a lot",
                        is_in_target_language=True
                    ),
                ]
            },
        )
        assert _define_word(my_course, "easier", is_in_target_language=True) == {
            "word": "easier",
            "definition": "by a lot"
        }

    def test_doesnt_include_definition_with_different_word(self):
        word = str(fakes.fake_value())
        meaning = str(fakes.fake_value())
        is_in_target_language = fakes.fake_value()
        my_course = Course(
            **{
                **(fakes.course1._asdict()),
                "dictionary": [
                    DictionaryItem(
                        word=word,
                        definition=meaning,
                        is_in_target_language=is_in_target_language
                    ),
                ]
            },
        )
        with pytest.raises(ValueError):
            _define_word(my_course, "asd",
                         is_in_target_language=is_in_target_language)

    def test_doesnt_include_definition_with_different_is_in_target_language(self):
        word = str(fakes.fake_value())
        meaning = str(fakes.fake_value())
        is_in_target_language = fakes.fake_value()
        my_course = fakes.customize(fakes.course1, dictionary=[
            DictionaryItem(
                word=word,
                definition=meaning,
                is_in_target_language=False
            ),
        ])
        with pytest.raises(ValueError):
            _define_word(my_course, word,
                         is_in_target_language=is_in_target_language)

    def test_skips_non_matching_definitions(self):
        word = str(fakes.fake_value())
        meaning = str(fakes.fake_value())
        is_in_target_language = fakes.fake_value()
        my_course = fakes.customize(fakes.course1, dictionary=[
            DictionaryItem(
                word="random shit",
                definition="random shit",
                is_in_target_language="random shit"
            ),
            DictionaryItem(
                word=word,
                definition=meaning,
                is_in_target_language=is_in_target_language
            ),
        ])
        assert _define_word(my_course, word, is_in_target_language=is_in_target_language) == {
            "word": word,
            "definition": meaning
        }

    def test_skips_empty_definition(self):
        word = str(fakes.fake_value())
        my_course = fakes.customize(fakes.course1, dictionary=[
            DictionaryItem(
                word=word,
                definition="",
                is_in_target_language=False
            ),
        ])
        with pytest.raises(ValueError):
            _define_word(my_course, word, is_in_target_language=False)


class TestGetDumbOpaqueId(TestCase):
    def test_word_only_first_meaning_matters_1(self):
        x, y = "foo", "bar"
        z = str(fakes.fake_value())
        p1 = fakes.customize(fakes.word1, in_source_language=[x])
        p2 = fakes.customize(fakes.word1, in_source_language=[x, y])
        assert get_dumb_opaque_id(z, p1) == get_dumb_opaque_id(z, p2)

    def test_phrase_only_first_meaning_matters_1(self):
        x, y = "foo", "bar"
        z = str(fakes.fake_value())
        p1 = fakes.customize(fakes.phrase1, in_source_language=[x])
        p2 = fakes.customize(fakes.phrase1, in_source_language=[x, y])
        assert get_dumb_opaque_id(z, p1) == get_dumb_opaque_id(z, p2)

    def test_word_only_first_meaning_matters_2(self):
        x, y = "foo", "bar"
        z = str(fakes.fake_value())
        p1 = fakes.customize(fakes.word1, in_target_language=[x])
        p2 = fakes.customize(fakes.word1, in_target_language=[x, y])
        assert get_dumb_opaque_id(z, p1) == get_dumb_opaque_id(z, p2)

    def test_phrase_only_first_meaning_matters_2(self):
        x, y = "foo", "bar"
        z = str(fakes.fake_value())
        p1 = fakes.customize(fakes.phrase1, in_target_language=[x])
        p2 = fakes.customize(fakes.phrase1, in_target_language=[x, y])
        assert get_dumb_opaque_id(z, p1) == get_dumb_opaque_id(z, p2)

    def test_the_first_meaning_does_matter(self):
        x, y = "foo", "bar"
        z = str(fakes.fake_value())
        p1 = fakes.customize(fakes.phrase1, in_target_language=[x])
        p2 = fakes.customize(fakes.phrase1, in_target_language=[y])
        assert get_dumb_opaque_id(z, p1) != get_dumb_opaque_id(z, p2)


class TestGroupAndIdPhrase(TestCase):
    def setUp(self):
        self.groups = []
        self.ids = []
        challenges = _get_phrase_challenges(fakes.phrase1, fakes.course1)
        for challenge in challenges:
            self.groups.append(challenge["group"])
            self.ids.append(challenge["id"])
        assert len(self.groups) > 1
        assert len(self.ids) > 1

    def test_group_is_the_same_in_each_challenge_type(self):
        assert len(set(self.groups)) == 1

    def test_id_is_different_in_each_challenge_type(self):
        assert len(set(self.ids)) == len(self.ids)


class TestGroupAndIdWord(TestCase):
    def setUp(self):
        self.groups = []
        self.ids = []
        challenges = _get_word_challenges(fakes.word1, fakes.course1)
        for challenge in challenges:
            self.groups.append(challenge["group"])
            self.ids.append(challenge["id"])
        assert len(self.groups) > 1
        assert len(self.ids) > 1

    def test_group_is_the_same_in_each_challenge_type(self):
        assert len(set(self.groups)) == 1

    def test_id_is_different_in_each_challenge_type(self):
        assert len(set(self.ids)) == len(self.ids)
