import collections
import pytest

from librelingo_json_export.challenge_types import get_cards_challenge
from librelingo_fakes import fakes

Example = collections.namedtuple(
    "Example", ["word", "course", "expected_result", "name"]
)


@pytest.mark.parametrize(
    "example",
    [
        Example(
            fakes.word1,
            fakes.course1,
            {
                "id": "95e24ac99aa9",
                "type": "cards",
                "formInTargetLanguage": "foous",
                "meaningInSourceLanguage": "foo",
                "priority": 0,
                "group": "aab69500f014",
                "pictures": ["foo.jpg", "bar.jpg", "baz.jpg"],
            },
            "data_set_1",
        ),
        Example(
            fakes.word2,
            fakes.course1,
            {
                "id": "22bd7b11c2c9",
                "type": "cards",
                "formInTargetLanguage": "apfel",
                "meaningInSourceLanguage": "apple",
                "priority": 0,
                "group": "9dbe235cb2d6",
                "pictures": ["1.jpg", "2.jpg", "3.jpg"],
            },
            "data_set_2",
        ),
        Example(
            fakes.word_with_spaces,
            fakes.course1,
            {
                "id": "5bc48626f40f",
                "type": "cards",
                "formInTargetLanguage": "three word term",
                "meaningInSourceLanguage": "foo bar baz",
                "priority": 0,
                "group": "e707f76a703d",
                "pictures": ["1.jpg", "2.jpg", "3.jpg"],
            },
            "word_with_spaces",
        ),
    ],
    ids=lambda example: example.name,
)
def test_get_cards_challenge(example):
    cur_res = get_cards_challenge(example.word, example.course)[0]
    assert cur_res == example.expected_result
