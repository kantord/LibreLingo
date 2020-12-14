from unittest.mock import patch
from unittest import TestCase
from liblili2json import get_course_data
from liblili2json import get_skill_data
from liblili2json import get_challenges_data
from liblili2json import calculate_number_of_levels
from liblili2json import get_word_challenges
from liblili2json import get_phrase_challenges
from liblili2json import get_cards_challenge
from liblili2json import get_short_input_challenge
from liblili2json import get_listening_challenge
from liblili2json import get_chips_challenge
from liblili2json import get_options_challenge
from liblili2json import get_chips
from liblili2json import clean_word
from liblili2json import define_words_in_sentence
from liblili2json import define_word
from liblili2json.types import Phrase
from liblili2json.types import Course
from liblili2json.types import Word
from liblili2json.types import DictionaryItem
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

    @patch('liblili2json.calculate_number_of_levels')
    def test_correct_number_of_levels(self, mock):
        FAKE_NUMBER = "fake number"
        mock.return_value = FAKE_NUMBER
        converted_skill = get_skill_data(fakes.emptySkill, fakes.course1)
        assert converted_skill["levels"] == FAKE_NUMBER

    @patch('liblili2json.calculate_number_of_levels')
    def test_calculates_levels_correctly(self, mock):
        get_skill_data(fakes.skills[1], fakes.course1)
        mock.assert_called_with(4, 1)

    @patch('liblili2json.get_challenges_data')
    def test_correct_challenges(self, mock):
        FAKE_CHALLENGES = "fake challenges"
        mock.return_value = FAKE_CHALLENGES
        converted_skill = get_skill_data(fakes.skills[1], fakes.course1)
        assert converted_skill["challenges"] == FAKE_CHALLENGES

    @patch('liblili2json.get_challenges_data')
    def test_formats_challenges_correctly(self, mock):
        get_skill_data(fakes.skills[1], fakes.course1)
        mock.assert_called_with(fakes.skills[1], fakes.course1)


class TestGetChallengesData(TestCase):
    def test_empty_skill(self):
        assert get_challenges_data(fakes.emptySkill, fakes.course1) == []

    @patch('liblili2json.get_phrase_challenges')
    def test_generates_phrase_challenges_correctly(self, mock):
        get_challenges_data(fakes.skillWithPhrase, fakes.course1)
        mock.assert_called_with(fakes.phrase2, fakes.course1)

    @patch('liblili2json.get_phrase_challenges')
    def test_includes_every_phrase(self, mock):
        get_challenges_data(fakes.skillWith3Phrases, fakes.course1)
        assert mock.call_count == 3

    @patch('liblili2json.get_word_challenges')
    def test_generates_word_challenges_correctly(self, mock):
        get_challenges_data(fakes.skillWithWord, fakes.course1)
        mock.assert_called_with(fakes.word1, fakes.course1)

    @patch('liblili2json.get_word_challenges')
    def test_includes_every_word(self, mock):
        get_challenges_data(fakes.skillWith3Words, fakes.course1)
        assert mock.call_count == 3

    @patch('liblili2json.get_word_challenges')
    @patch('liblili2json.get_phrase_challenges')
    def test_returns_correct_challenges(self, mock1, mock2):

        mock1.return_value = [fakes.challenge1, fakes.challenge2]
        mock2.return_value = [fakes.challenge3, fakes.challenge4]
        assert get_challenges_data(fakes.skillWithPhraseAndWord, fakes.course1) == [
            fakes.challenge1, fakes.challenge2, fakes.challenge3, fakes.challenge4]


class TestGetWordChallenges(TestCase):
    @patch('liblili2json.get_cards_challenge')
    def test_includes_cards_challenges(self, mock):
        fake_value = fakes.fake_value()
        mock.return_value = fake_value
        assert get_word_challenges(fakes.word1, fakes.course1)[0] == fake_value

    @patch('liblili2json.get_short_input_challenge')
    def test_includes_short_input_challenges(self, mock):
        fake_value = fakes.fake_value()
        mock.return_value = fake_value
        assert get_word_challenges(fakes.word1, fakes.course1)[1] == fake_value

    @patch('liblili2json.get_listening_challenge')
    def test_includes_listening_challenge(self, mock):
        fake_value = fakes.fake_value()
        mock.return_value = fake_value
        assert get_word_challenges(fakes.word1, fakes.course1)[2] == fake_value


class TestGetPhraseChallenges(TestCase):
    @patch('liblili2json.get_options_challenge')
    def test_includes_options_challenges(self, mock):
        fake_value = fakes.fake_value()
        mock.return_value = fake_value
        assert get_phrase_challenges(
            fakes.phrase1, fakes.course1)[0] == fake_value

    @ patch('liblili2json.get_listening_challenge')
    def test_includes_listening_challenge(self, mock):
        fake_value = fakes.fake_value()
        mock.return_value = fake_value
        assert get_phrase_challenges(
            fakes.phrase1, fakes.course1)[1] == fake_value

    @ patch('liblili2json.get_chips_challenge')
    def test_includes_chips_challenge(self, mock):
        fake_value = fakes.fake_value()
        mock.return_value = fake_value
        assert get_phrase_challenges(
            fakes.phrase1, fakes.course1)[2] == fake_value

    @ patch('liblili2json.get_reverse_chips_challenge')
    def test_includes_reverse_chips_challenge(self, mock):
        fake_value = fakes.fake_value()
        mock.return_value = fake_value
        assert get_phrase_challenges(
            fakes.phrase1, fakes.course1)[3] == fake_value


class TestGetCardsChallenge(TestCase):
    def test_returns_correct_value1(self):
        challenge = get_cards_challenge(fakes.word1, fakes.course1)
        assert challenge == {
            'id': '9287bb2f7029',
            "type": "cards",
            "formInTargetLanguage": "foous",
            "meaningInSourceLanguage": "foo",
            "priority": 0,
            'group': 'b95c785ddf3e',
            'pictures': ['foo', 'bar', 'baz']
        }

    def test_returns_correct_value2(self):
        challenge = get_cards_challenge(fakes.word2, fakes.course1)
        assert challenge == {
            'id': '91877ee773d8',
            "type": "cards",
            "formInTargetLanguage": "apfel",
            "meaningInSourceLanguage": "apple",
            "priority": 0,
            'group': 'f2b9d8b7c65a',
            'pictures': ['1', '2', '3']
        }


class TestGetOptionsChallenge(TestCase):
    def test_returns_correct_value1(self):
        challenge = get_options_challenge(fakes.word1, fakes.course1)
        assert challenge == {
            'id': 'e1cacf67191f',
            "type": "options",
            "formInTargetLanguage": "foous",
            "meaningInSourceLanguage": "foo",
            "priority": 0,
            'group': '7c0b175a060c',
        }

    def test_returns_correct_value2(self):
        challenge = get_options_challenge(fakes.word2, fakes.course1)
        assert challenge == {
            'id': '042a45e89943',
            "type": "options",
            "formInTargetLanguage": "apfel",
            "meaningInSourceLanguage": "apple",
            "priority": 0,
            'group': 'da01c2c189a9',
        }


class TestGetShortInputChallenge(TestCase):
    def test_returns_correct_value1(self):
        challenge = get_short_input_challenge(fakes.word1, fakes.course1)
        assert challenge == {
            'id': '98eca012f981',
            "type": "shortInput",
            "formInTargetLanguage": "foous",
            "phrase": "foo",
            "priority": 1,
            'group': 'b95c785ddf3e',
        }

    def test_returns_correct_value2(self):
        challenge = get_short_input_challenge(fakes.word2, fakes.course1)
        assert challenge == {
            'id': '1a196242f155',
            "type": "shortInput",
            "formInTargetLanguage": "apfel",
            "phrase": "apple",
            "priority": 1,
            'group': 'f2b9d8b7c65a',
        }


class TestListeningChallenge(TestCase):
    def test_returns_correct_value1(self):
        challenge = get_listening_challenge(fakes.word1, fakes.course1)
        assert challenge == {
            'id': '3103322a15da',
            "type": "listeningExercise",
            "answer": "foous",
            "meaning": "foo",
            "priority": 1,
            'group': 'b95c785ddf3e',
            'audio': 'b8975c2df0e621d68c96bf1620389a1ae04bc4514aeff6f7a36131daf51f0c62'
        }

    def test_returns_correct_value2(self):
        challenge = get_listening_challenge(fakes.word2, fakes.course1)
        assert challenge == {
            'id': '9fc6514922a6',
            "type": "listeningExercise",
            "answer": "apfel",
            "meaning": "apple",
            "priority": 1,
            'group': 'f2b9d8b7c65a',
            'audio': '509a5b154ef93cd2abac6b6d673f80ded6cd2319902a8d83f15f98c8aaf1cabb'
        }


class TestChipsChallenge(TestCase):
    def test_returns_correct_value1(self):
        challenge = get_chips_challenge(fakes.phrase1, fakes.course1)
        assert challenge == {
            "type": "chips",
            "translatesToSourceLanguage": False,
            "phrase": [
                {"word": "foo"},
                {"word": "bar"},
            ],
            'id': '3103322a15da',
            'group': 'b95c785ddf3e',
            "priority": 2,
            "chips": ["foous", "barus"],
            "solutions": [["foous", "barus"]],
            "formattedSolution": "foous barus",
        }

    @patch('liblili2json.get_chips')
    def test_returns_correct_value2(self, get_chips):
        get_chips.return_value = fakes.fake_value()
        challenge = get_chips_challenge(fakes.phrase2, fakes.course1)
        assert challenge == {
            "type": "chips",
            "translatesToSourceLanguage": False,
            "phrase": [
                {"word": "john"},
                {"word": "smith"},
            ],
            'id': '3103322a15da',
            'group': 'b95c785ddf3e',
            "priority": 2,
            "chips": get_chips.return_value,
            "solutions": [get_chips.return_value],
            "formattedSolution": "lorem ipsum",
        }

    @patch('liblili2json.get_chips')
    def test_calls_get_chips_with_correct_value(self, get_chips):
        fake_phrase = Phrase(
            in_target_langauge=fakes.fake_value(),
            in_source_langauge=""
        )
        get_chips_challenge(fake_phrase, fakes.course1)
        get_chips.assert_called_with(fake_phrase.in_target_langauge)


class GetChipsTest(TestCase):
    def test_empty_string(self):
        assert get_chips('') == []

    @patch('liblili2json.clean_word')
    def test_empty_string_doesnt_call_clean_word(self, clean_word):
        get_chips('')
        assert not clean_word.called

    @patch('liblili2json.clean_word')
    def test_calls_clean_word_with_correct_argument(self, clean_word):
        get_chips('foo')
        clean_word.assert_called_with('foo')

    @patch('liblili2json.clean_word')
    def test_returns_correct_value(self, clean_word):
        clean_word.return_value = fakes.fake_value()
        assert get_chips('foo') == [clean_word.return_value]

    @patch('liblili2json.clean_word')
    def test_returns_correct_number_of_words(self, clean_word):
        assert len(get_chips('foo bar')) == 2


class CleanWordTest(TestCase):
    def test_empty_string(self):
        assert clean_word("") == ""

    def test_removes_parentheses(self):
        assert clean_word("(foo") == "foo"

    def test_removes_comma(self):
        assert clean_word("foo,") == "foo"

    def test_doesnt_remove_parts_of_word(self):
        assert clean_word("ba-ar") == "ba-ar"

    def test_doesnt_remove_parts_of_word(self):
        assert clean_word("L'Hospitalet") == "L'Hospitalet"

    def test_removes_exclamation_mark(self):
        assert clean_word("ba-ar!") == "ba-ar"

    def test_weird_english_posessive(self):
        assert clean_word("cats'") == "cats'"


class DefineWordsInSentenceTest(TestCase):
    def test_empty_sentence(self):
        assert define_words_in_sentence(fakes.course1, "", False) == []

    @patch('liblili2json.define_word')
    def test_calls_define_word_the_correct_number_of_times(self, define_word):
        define_words_in_sentence(fakes.course1, "foo bar baz", False) == []
        assert define_word.call_count == 3

    @patch('liblili2json.define_word')
    def test_calls_define_word_with_the_correct_data(self, define_word):
        reverse = fakes.fake_value()
        fake_word = str(fakes.fake_value())
        define_words_in_sentence(
            fakes.course1, fake_word, reverse) == []
        define_word.assert_called_with(fakes.course1, fake_word, reverse)

    @patch('liblili2json.define_word')
    def test_returns_correct_value(self, define_word):
        define_word.return_value = fakes.fake_value()
        assert define_words_in_sentence(
            fakes.course1, "foo", True) == [define_word.return_value]

    @ patch('liblili2json.define_word')
    def test_defines_every_word(self, define_word):
        define_word.return_value = fakes.fake_value()
        assert define_words_in_sentence(
            fakes.course1, "foo bar", True) == [define_word.return_value, define_word.return_value]


class TestDefineWord(TestCase):
    def test_definition_not_found(self):
        word = fakes.fake_value()
        assert define_word(fakes.course1, word, reverse=False) == {
            "word": word
        }

    def test_includes_definition(self):
        word = fakes.fake_value()
        meaning = fakes.fake_value()
        reverse = fakes.fake_value()
        my_course = Course(
            **{
                **(fakes.course1._asdict()),
                "dictionary": [
                    DictionaryItem(
                        word=word,
                        definition=meaning,
                        reverse=reverse
                    ),
                ]
            },
        )
        assert define_word(my_course, word, reverse=reverse) == {
            "word": word,
            "definition": meaning
        }

    def test_doesnt_include_definition_with_different_word(self):
        word = fakes.fake_value()
        meaning = fakes.fake_value()
        reverse = fakes.fake_value()
        my_course = Course(
            **{
                **(fakes.course1._asdict()),
                "dictionary": [
                    DictionaryItem(
                        word=word,
                        definition=meaning,
                        reverse=reverse
                    ),
                ]
            },
        )
        assert define_word(my_course, "asd", reverse=reverse) == {
            "word": "asd",
        }

    def test_doesnt_include_definition_with_different_reverse(self):
        word = fakes.fake_value()
        meaning = fakes.fake_value()
        reverse = fakes.fake_value()
        my_course = fakes.customize(fakes.course1, dictionary=[
            DictionaryItem(
                word=word,
                definition=meaning,
                reverse=False
            ),
        ])
        assert define_word(my_course, word, reverse=reverse) == {
            "word": word,
        }

    def test_skips_non_matching_definitions(self):
        word = fakes.fake_value()
        meaning = fakes.fake_value()
        reverse = fakes.fake_value()
        my_course = fakes.customize(fakes.course1, dictionary=[
            DictionaryItem(
                word=None,
                definition=None,
                reverse=None
            ),
            DictionaryItem(
                word=word,
                definition=meaning,
                reverse=reverse
            ),
        ])
        assert define_word(my_course, word, reverse=reverse) == {
            "word": word,
            "definition": meaning
        }
