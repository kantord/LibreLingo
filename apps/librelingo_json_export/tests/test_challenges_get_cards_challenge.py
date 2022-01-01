from librelingo_json_export.challenge_types import get_cards_challenge
from librelingo_fakes import fakes


def test_returns_correct_value1():
    challenge = get_cards_challenge(fakes.word1, fakes.course1)[0]
    expected_challenge = {
        "id": "95e24ac99aa9",
        "type": "cards",
        "formInTargetLanguage": "foous",
        "meaningInSourceLanguage": "foo",
        "priority": 0,
        "group": "aab69500f014",
        "pictures": ["foo.jpg", "bar.jpg", "baz.jpg"],
    }
    assert challenge == expected_challenge


def test_returns_correct_value2():
    challenge = get_cards_challenge(fakes.word2, fakes.course1)[0]
    expected_challenge = {
        "id": "22bd7b11c2c9",
        "type": "cards",
        "formInTargetLanguage": "apfel",
        "meaningInSourceLanguage": "apple",
        "priority": 0,
        "group": "9dbe235cb2d6",
        "pictures": ["1.jpg", "2.jpg", "3.jpg"],
    }
    assert challenge == expected_challenge


def test_returns_correct_value_with_spaces():
    challenge = get_cards_challenge(fakes.word_with_spaces, fakes.course1)[0]
    expected_challenge = {
        "id": "5bc48626f40f",
        "type": "cards",
        "formInTargetLanguage": "three word term",
        "meaningInSourceLanguage": "foo bar baz",
        "priority": 0,
        "group": "e707f76a703d",
        "pictures": ["1.jpg", "2.jpg", "3.jpg"],
    }
    assert challenge == expected_challenge
