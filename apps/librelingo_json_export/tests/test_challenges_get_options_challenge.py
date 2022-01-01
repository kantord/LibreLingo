from librelingo_json_export.challenge_types import get_options_challenge

from librelingo_fakes import fakes


def test_returns_correct_value1():
    challenge = get_options_challenge(fakes.word1, fakes.course1)[0]
    expected_challenge = {
        "id": "db8fd4cec19f",
        "type": "options",
        "formInTargetLanguage": "foous",
        "meaningInSourceLanguage": "foo",
        "priority": 0,
        "group": "aab69500f014",
    }
    assert challenge == expected_challenge


def test_returns_correct_value2():
    challenge = get_options_challenge(fakes.word2, fakes.course1)[0]
    expected_challenge = {
        "id": "e50475a646e2",
        "type": "options",
        "formInTargetLanguage": "apfel",
        "meaningInSourceLanguage": "apple",
        "priority": 0,
        "group": "9dbe235cb2d6",
    }
    assert challenge == expected_challenge


def test_returns_correct_value_with_spaces():
    challenge = get_options_challenge(fakes.word_with_spaces, fakes.course1)[0]
    expected_challenge = {
        "id": "98220c0c74ac",
        "type": "options",
        "formInTargetLanguage": "three word term",
        "meaningInSourceLanguage": "foo bar baz",
        "priority": 0,
        "group": "e707f76a703d",
    }
    assert challenge == expected_challenge
