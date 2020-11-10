from unittest.mock import patch
from unittest import TestCase
from liblili2json import get_course_data
from liblili2json import get_skill_data
from liblili2json import get_challenges_data
from liblili2json import calculate_number_of_levels
from liblili2json import get_word_challenges
from liblili2json import get_cards_challenge
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
        assert get_skill_data(fakes.skills[0]) == {
            "id": "d7279e4777cd",
            "levels": 1,
            "challenges": []
        }

    @patch('liblili2json.calculate_number_of_levels')
    def test_correct_number_of_levels(self, mock):
        FAKE_NUMBER = "fake number"
        mock.return_value = FAKE_NUMBER
        converted_skill = get_skill_data(fakes.emptySkill)
        assert converted_skill["levels"] == FAKE_NUMBER

    @patch('liblili2json.calculate_number_of_levels')
    def test_calculates_levels_correctly(self, mock):
        get_skill_data(fakes.skills[1])
        mock.assert_called_with(4, 1)

    @patch('liblili2json.get_challenges_data')
    def test_correct_challenges(self, mock):
        FAKE_CHALLENGES = "fake challenges"
        mock.return_value = FAKE_CHALLENGES
        converted_skill = get_skill_data(fakes.skills[1])
        assert converted_skill["challenges"] == FAKE_CHALLENGES

    @patch('liblili2json.get_challenges_data')
    def test_formats_challenges_correctly(self, mock):
        get_skill_data(fakes.skills[1])
        mock.assert_called_with(fakes.skills[1])


class TestGetChallengesData(TestCase):
    def test_empty_skill(self):
        assert get_challenges_data(fakes.emptySkill) == []

    @patch('liblili2json.get_phrase_challenges')
    def test_generates_phrase_challenges_correctly(self, mock):
        get_challenges_data(fakes.skillWithPhrase)
        mock.assert_called_with(fakes.phrase2)

    @patch('liblili2json.get_phrase_challenges')
    def test_includes_every_phrase(self, mock):
        get_challenges_data(fakes.skillWith3Phrases)
        assert mock.call_count == 3

    @patch('liblili2json.get_word_challenges')
    def test_generates_word_challenges_correctly(self, mock):
        get_challenges_data(fakes.skillWithWord)
        mock.assert_called_with(fakes.word1)

    @patch('liblili2json.get_word_challenges')
    def test_includes_every_word(self, mock):
        get_challenges_data(fakes.skillWith3Words)
        assert mock.call_count == 3

    @patch('liblili2json.get_word_challenges')
    @patch('liblili2json.get_phrase_challenges')
    def test_returns_correct_challenges(self, mock1, mock2):

        mock1.return_value = [fakes.challenge1, fakes.challenge2]
        mock2.return_value = [fakes.challenge3, fakes.challenge4]
        assert get_challenges_data(fakes.skillWithPhraseAndWord) == [
            fakes.challenge1, fakes.challenge2, fakes.challenge3, fakes.challenge4]


class TestGetWordChallenges(TestCase):
    @patch('liblili2json.get_cards_challenge')
    def test_includes_cards_challenge(self, mock):
        fake_value = fakes.fake_value()
        mock.return_value = fake_value
        assert get_word_challenges(fakes.word1)[0] == fake_value


class TestGetCardsChallenge(TestCase):
    def test_returns_correct_value1(self):
        challenge = get_cards_challenge(fakes.word1)
        assert challenge == {
            "type": "cards",
            "formInTargetLanguage": "foous",
            "meaningInSourceLanguage": "foo",
            "priority": 0,
            'group': 'afc87ec8e438'
        }
