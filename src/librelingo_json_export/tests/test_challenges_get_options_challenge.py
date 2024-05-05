import collections

import pytest
from librelingo_fakes import fakes
from librelingo_json_export.challenge_types import get_options_challenge

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
                "id": "db8fd4cec19f",
                "type": "options",
                "formInTargetLanguage": "foous",
                "meaningInSourceLanguage": "foo",
                "priority": 0,
                "group": "aab69500f014",
            },
            "data_set_1",
        ),
        Example(
            fakes.word1,
            fakes.course1,
            {
                "id": "db8fd4cec19f",
                "type": "options",
                "formInTargetLanguage": "foous",
                "meaningInSourceLanguage": "foo",
                "priority": 0,
                "group": "aab69500f014",
            },
            "data_set_2",
        ),
        Example(
            fakes.word2,
            fakes.course1,
            {
                "id": "e50475a646e2",
                "type": "options",
                "formInTargetLanguage": "apfel",
                "meaningInSourceLanguage": "apple",
                "priority": 0,
                "group": "9dbe235cb2d6",
            },
            "word_with_spaces",
        ),
    ],
    ids=lambda example: example.name,
)
def test_get_options_challenge(example):
    cur_res = get_options_challenge(example.word, example.course)[0]
    assert cur_res == example.expected_result
