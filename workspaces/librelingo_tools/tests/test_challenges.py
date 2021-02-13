from unittest.mock import patch
from unittest import TestCase
from librelingo_tools.challenges import get_challenges_data
from librelingo_tools.challenges import get_word_challenges
from librelingo_tools.challenges import get_phrase_challenges
from librelingo_tools.challenge_types import get_cards_challenge
from librelingo_tools.challenge_types import get_short_input_challenge
from librelingo_tools.challenge_types import get_listening_challenge
from librelingo_tools.challenge_types import get_chips_challenge
from librelingo_tools.challenge_types import get_options_challenge
from librelingo_tools.challenge_types import get_chips
from librelingo_tools.data_types import Phrase
from . import fakes


class TestGetChallengesData(TestCase):
    def test_empty_skill(self):
        assert get_challenges_data(fakes.emptySkill, fakes.course1) == []

    @patch('librelingo_tools.challenges.get_phrase_challenges')
    def test_generates_phrase_challenges_correctly(self, mock):
        get_challenges_data(fakes.skillWithPhrase, fakes.course1)
        mock.assert_called_with(fakes.phrase2, fakes.course1)

    @patch('librelingo_tools.challenges.get_phrase_challenges')
    def test_includes_every_phrase(self, mock):
        get_challenges_data(fakes.skillWith3Phrases, fakes.course1)
        assert mock.call_count == 3

    @patch('librelingo_tools.challenges.get_word_challenges')
    def test_generates_word_challenges_correctly(self, mock):
        get_challenges_data(fakes.skillWithWord, fakes.course1)
        mock.assert_called_with(fakes.word1, fakes.course1)

    @patch('librelingo_tools.challenges.get_word_challenges')
    def test_includes_every_word(self, mock):
        get_challenges_data(fakes.skillWith3Words, fakes.course1)
        assert mock.call_count == 3

    @patch('librelingo_tools.challenges.get_word_challenges')
    @patch('librelingo_tools.challenges.get_phrase_challenges')
    def test_returns_correct_challenges(self, mock1, mock2):

        mock1.return_value = [fakes.challenge1, fakes.challenge2]
        mock2.return_value = [fakes.challenge3, fakes.challenge4]
        assert get_challenges_data(fakes.skillWithPhraseAndWord, fakes.course1) == [
            fakes.challenge1, fakes.challenge2, fakes.challenge3, fakes.challenge4]


class TestGetWordChallenges(TestCase):
    @patch('librelingo_tools.challenges.get_cards_challenge')
    def test_includes_cards_challenges(self, mock):
        fake_value = fakes.fake_value()
        mock.return_value = fake_value
        assert get_word_challenges(fakes.word1, fakes.course1)[0] == fake_value

    @patch('librelingo_tools.challenges.get_short_input_challenge')
    def test_includes_short_input_challenges(self, mock):
        fake_value = fakes.fake_value()
        mock.return_value = fake_value
        assert get_word_challenges(fakes.word1, fakes.course1)[1] == fake_value

    @patch('librelingo_tools.challenges.get_listening_challenge')
    def test_includes_listening_challenge(self, mock):
        fake_value = fakes.fake_value()
        mock.return_value = fake_value
        assert get_word_challenges(fakes.word1, fakes.course1)[2] == fake_value


class TestGetPhraseChallenges(TestCase):
    @patch('librelingo_tools.challenges.get_options_challenge')
    def test_includes_options_challenges(self, mock):
        fake_value = fakes.fake_value()
        mock.return_value = fake_value
        assert get_phrase_challenges(
            fakes.phrase1, fakes.course1)[0] == fake_value

    @patch('librelingo_tools.challenges.get_listening_challenge')
    def test_includes_listening_challenge(self, mock):
        fake_value = fakes.fake_value()
        mock.return_value = fake_value
        assert get_phrase_challenges(
            fakes.phrase1, fakes.course1)[1] == fake_value

    @patch('librelingo_tools.challenges.get_chips_challenge')
    def test_includes_chips_challenge(self, mock):
        fake_value = fakes.fake_value()
        mock.return_value = fake_value
        assert get_phrase_challenges(
            fakes.long_phrase, fakes.course1)[2] == fake_value

    @patch('librelingo_tools.challenges.get_reverse_chips_challenge')
    def test_includes_reverse_chips_challenge(self, mock):
        fake_value = fakes.fake_value()
        mock.return_value = fake_value
        assert get_phrase_challenges(
            fakes.long_phrase, fakes.course1)[3] == fake_value

    def test_returns_correct_number_of_challenged(self):
        assert len(get_phrase_challenges(
            fakes.long_phrase, fakes.course1)) == 4

    def test_doesnt_include_chips_if_sentence_is_short(self):
        assert len(list(filter(
            lambda x: x["type"] == "chips", get_phrase_challenges(
                fakes.customize(
                    fakes.phrase1,
                    in_target_language=["foo"],
                    in_source_language=["bar"],
                ), fakes.course1)))) == 0


class TestGetCardsChallenge(TestCase):
    def test_returns_correct_value1(self):
        challenge = get_cards_challenge(fakes.word1, fakes.course1)
        assert challenge == {
            'id': '95e24ac99aa9',
            "type": "cards",
            "formInTargetLanguage": "foous",
            "meaningInSourceLanguage": "foo",
            "priority": 0,
            'group': 'aab69500f014',
            'pictures': ['foo.jpg', 'bar.jpg', 'baz.jpg']
        }

    def test_returns_correct_value2(self):
        challenge = get_cards_challenge(fakes.word2, fakes.course1)
        assert challenge == {
            'id': '22bd7b11c2c9',
            "type": "cards",
            "formInTargetLanguage": "apfel",
            "meaningInSourceLanguage": "apple",
            "priority": 0,
            'group': '9dbe235cb2d6',
            'pictures': ['1.jpg', '2.jpg', '3.jpg']
        }


class TestGetOptionsChallenge(TestCase):
    def test_returns_correct_value1(self):
        challenge = get_options_challenge(fakes.word1, fakes.course1)
        assert challenge == {
            'id': 'db8fd4cec19f',
            "type": "options",
            "formInTargetLanguage": "foous",
            "meaningInSourceLanguage": "foo",
            "priority": 0,
            'group': 'aab69500f014',
        }

    def test_returns_correct_value2(self):
        challenge = get_options_challenge(fakes.word2, fakes.course1)
        assert challenge == {
            'id': 'e50475a646e2',
            "type": "options",
            "formInTargetLanguage": "apfel",
            "meaningInSourceLanguage": "apple",
            "priority": 0,
            'group': '9dbe235cb2d6',
        }


class TestGetShortInputChallenge(TestCase):
    def test_returns_correct_value1(self):
        challenge = get_short_input_challenge(fakes.word1, fakes.course1)
        assert challenge == {
            'id': '749e7c734898',
            "type": "shortInput",
            'pictures': ['foo.jpg', 'bar.jpg', 'baz.jpg'],
            "formInTargetLanguage": ["foous"],
            'phrase': [{'word': 'foo', "definition": "barrus"}],
            "priority": 1,
            'group': 'aab69500f014',
        }

    def test_returns_correct_value2(self):
        challenge = get_short_input_challenge(fakes.word2, fakes.course1)
        assert challenge == {
            'id': '5f1b4778039c',
            "type": "shortInput",
            'pictures': ['1.jpg', '2.jpg', '3.jpg'],
            "formInTargetLanguage": ["apfel"],
            'phrase': [{'word': 'apple', "definition": "red fruit"}],
            "priority": 1,
            'group': '9dbe235cb2d6',
        }


class TestListeningChallenge(TestCase):
    def test_returns_correct_value1(self):
        challenge = get_listening_challenge(fakes.word1, fakes.course1)
        assert challenge == {
            'id': 'ae89bd25c323',
            "type": "listeningExercise",
            "answer": "foous",
            "meaning": "foo",
            "priority": 1,
            'group': 'aab69500f014',
            'audio': '3f981d854531e9f376ae06cb8449a6e997972d3c1b598f9a00b481ef307a469d'
        }

    def test_returns_correct_value2(self):
        challenge = get_listening_challenge(fakes.word2, fakes.course1)
        assert challenge == {
            'id': '7de4d5b7f106',
            "type": "listeningExercise",
            "answer": "apfel",
            "meaning": "apple",
            "priority": 1,
            'group': '9dbe235cb2d6',
            'audio': 'f38b5ac2a5e36c336eed306d56ed517bfd78a728321be0b87db5def8ff8abc3d'
        }


class TestChipsChallenge(TestCase):
    def test_returns_correct_value1(self):
        challenge = get_chips_challenge(fakes.phrase1, fakes.course1)
        assert challenge == {
            "type": "chips",
            "translatesToSourceLanguage": False,
            "phrase": [
                {"word": "foo", "definition": "barrus"},
                {"word": "bar", "definition": "furrrr"},
            ],
            'id': '9f9b09771a07',
            'group': '930c4c4e7552',
            "priority": 2,
            "chips": ["foous", "barus"],
            "solutions": [["foous", "barus"]],
            "formattedSolution": "foous barus",
        }

    @patch('librelingo_tools.challenge_types.get_chips')
    def test_returns_correct_value2(self, get_chips):
        get_chips.return_value = fakes.fake_value()
        challenge = get_chips_challenge(
            fakes.phrase_with_alternatives, fakes.course1)
        assert challenge == {
            "type": "chips",
            "translatesToSourceLanguage": False,
            "phrase": [
                {"word": "foo", "definition": "barrus"},
                {"word": "bar", "definition": "furrrr"},
                {"word": "foo", "definition": "barrus"},
                {"word": "bar", "definition": "furrrr"},
            ],
            'id': '4b0e9208ce1b',
            'group': '66a39e74a2c8',
            "priority": 2,
            "solutions": [get_chips.return_value, get_chips.return_value],
            "chips": get_chips.return_value,
            "formattedSolution": "foous barus foous barus ",
        }

    @patch('librelingo_tools.challenge_types.get_chips')
    def test_calls_get_chips_with_correct_value(self, get_chips):
        fake_phrase = Phrase(
            in_target_language=[fakes.fake_value()],
            in_source_language=[""]
        )
        get_chips_challenge(fake_phrase, fakes.course1)
        get_chips.assert_called_with(fake_phrase.in_target_language[0])


class GetChipsTest(TestCase):
    def test_empty_string(self):
        assert get_chips('') == []

    @patch('librelingo_tools.challenge_types.clean_word')
    def test_empty_string_doesnt_call_clean_word(self, clean_word):
        get_chips('')
        assert not clean_word.called

    @patch('librelingo_tools.challenge_types.clean_word')
    def test_calls_clean_word_with_correct_argument(self, clean_word):
        get_chips('foo')
        clean_word.assert_called_with('foo')

    @patch('librelingo_tools.challenge_types.clean_word')
    def test_returns_correct_value(self, clean_word):
        clean_word.return_value = fakes.fake_value()
        assert get_chips('foo') == [clean_word.return_value]

    @patch('librelingo_tools.challenge_types.clean_word')
    def test_returns_correct_number_of_words(self, clean_word):
        assert len(get_chips('foo bar')) == 2
