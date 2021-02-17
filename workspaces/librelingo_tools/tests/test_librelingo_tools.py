import re
from unittest.mock import patch
from unittest import TestCase
import pytest
from librelingo_tools.course import get_course_data
from librelingo_tools.skills import get_skill_data
from librelingo_tools.utils import calculate_number_of_levels
from librelingo_tools.challenges import get_word_challenges
from librelingo_tools.challenges import get_phrase_challenges
from librelingo_tools.utils import get_dumb_opaque_id
from librelingo_tools.utils import clean_word
from librelingo_tools.dictionary import define_words_in_sentence
from librelingo_tools.dictionary import define_word
from librelingo_tools.data_types import Course
from librelingo_tools.data_types import DictionaryItem
from . import fakes


def test_get_course_data_return_value():
    """
    Tests the return value of get_course_data with the
    fakes.course1 object
    """
    assert get_course_data(fakes.course1) == {
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


def test_get_course_data_return_value_2():
    """
    Tests the return value of get_course_data with the
    fakes.course2 object
    """
    assert get_course_data(fakes.course2) == {
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
        assert get_skill_data(fakes.emptySkill, fakes.courseEmpty) == {
            "id": "d7279e4777cd",
            "levels": 1,
            "challenges": []
        }

    @patch('librelingo_tools.skills.calculate_number_of_levels')
    def test_correct_number_of_levels(self, mock):
        FAKE_NUMBER = "fake number"
        mock.return_value = FAKE_NUMBER
        converted_skill = get_skill_data(fakes.emptySkill, fakes.course1)
        assert converted_skill["levels"] == FAKE_NUMBER

    @patch('librelingo_tools.skills.calculate_number_of_levels')
    def test_calculates_levels_correctly(self, mock):
        get_skill_data(fakes.skills[1], fakes.course1)
        mock.assert_called_with(4, 1)

    @patch('librelingo_tools.skills.get_challenges_data')
    def test_correct_challenges(self, mock):
        FAKE_CHALLENGES = "fake challenges"
        mock.return_value = FAKE_CHALLENGES
        converted_skill = get_skill_data(fakes.skills[1], fakes.course1)
        assert converted_skill["challenges"] == FAKE_CHALLENGES

    @patch('librelingo_tools.skills.get_challenges_data')
    def test_formats_challenges_correctly(self, mock):
        get_skill_data(fakes.skills[1], fakes.course1)
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
        assert define_words_in_sentence(fakes.course1, "", False) == []

    @patch('librelingo_tools.dictionary.define_word')
    def test_calls_define_word_the_correct_number_of_times(self, define_word):
        define_words_in_sentence(fakes.course1, "foo bar baz", False)
        assert define_word.call_count == 3

    @patch('librelingo_tools.dictionary.define_word')
    def test_calls_define_word_with_the_correct_data(self, define_word):
        is_in_target_language = fakes.fake_value()
        fake_word = str(fakes.fake_value())
        define_words_in_sentence(
            fakes.course1, fake_word, is_in_target_language)
        define_word.assert_called_with(
            fakes.course1, fake_word, is_in_target_language)

    @patch('librelingo_tools.dictionary.define_word')
    def test_returns_correct_value(self, define_word):
        define_word.return_value = fakes.fake_value()
        assert define_words_in_sentence(
            fakes.course1, "foo", True) == [define_word.return_value]

    @patch('librelingo_tools.dictionary.define_word')
    def test_defines_every_word(self, define_word):
        define_word.return_value = fakes.fake_value()
        assert define_words_in_sentence(
            fakes.course1, "foo bar", True) == [define_word.return_value, define_word.return_value]


class TestDefineWord(TestCase):
    def test_definition_not_found(self):
        word = str(fakes.fake_value())
        pattern = re.escape(
            'The another language word "{}" does not have a definition. Please add it to the mini-dictionary.'.format(word))
        with pytest.raises(
                ValueError,
                match=pattern):
            assert define_word(fakes.course1, word,
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
        assert define_word(my_course, word, is_in_target_language=is_in_target_language) == {
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
        assert define_word(my_course, word + ",", is_in_target_language=is_in_target_language) == {
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
        assert define_word(my_course, "easier", is_in_target_language=True) == {
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
            define_word(my_course, "asd",
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
            define_word(my_course, word,
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
        assert define_word(my_course, word, is_in_target_language=is_in_target_language) == {
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
            define_word(my_course, word, is_in_target_language=False)


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
        challenges = get_phrase_challenges(fakes.phrase1, fakes.course1)
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
        challenges = get_word_challenges(fakes.word1, fakes.course1)
        for challenge in challenges:
            self.groups.append(challenge["group"])
            self.ids.append(challenge["id"])
        assert len(self.groups) > 1
        assert len(self.ids) > 1

    def test_group_is_the_same_in_each_challenge_type(self):
        assert len(set(self.groups)) == 1

    def test_id_is_different_in_each_challenge_type(self):
        assert len(set(self.ids)) == len(self.ids)
