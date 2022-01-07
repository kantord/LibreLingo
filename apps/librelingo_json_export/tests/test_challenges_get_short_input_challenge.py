from librelingo_json_export.challenge_types import get_short_input_challenge

from librelingo_fakes import fakes


def test_returns_correct_value1():
    challenge = get_short_input_challenge(fakes.word1, fakes.course1)[0]
    expected_challenge = {
        "id": "749e7c734898",
        "type": "shortInput",
        "pictures": ["foo.jpg", "bar.jpg", "baz.jpg"],
        "formInTargetLanguage": ["foous"],
        "phrase": [{"word": "foo", "definition": "barrus"}],
        "priority": 1,
        "group": "aab69500f014",
    }
    assert challenge == expected_challenge


def test_returns_correct_value2():
    challenge = get_short_input_challenge(fakes.word2, fakes.course1)[0]
    expected_challenge = {
        "id": "5f1b4778039c",
        "type": "shortInput",
        "pictures": ["1.jpg", "2.jpg", "3.jpg"],
        "formInTargetLanguage": ["apfel"],
        "phrase": [{"word": "apple", "definition": "red fruit"}],
        "priority": 1,
        "group": "9dbe235cb2d6",
    }
    assert challenge == expected_challenge


def test_returns_correct_value_with_spaces():
    challenge = get_short_input_challenge(fakes.word_with_spaces, fakes.course1)[0]
    expected_challenge = {
        "id": "3b0f6c9df85b",
        "type": "shortInput",
        "pictures": ["1.jpg", "2.jpg", "3.jpg"],
        "formInTargetLanguage": ["three word term"],
        "phrase": [{"word": "foo bar baz", "definition": "three word term"}],
        "priority": 1,
        "group": "e707f76a703d",
    }
    assert challenge == expected_challenge
