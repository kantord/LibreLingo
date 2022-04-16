import collections

import pytest
from librelingo_fakes import fakes
from librelingo_json_export.challenge_types import get_pairing_challenge

Example = collections.namedtuple(
    "Example", ["word", "course", "expected_result", "name"]
)


@pytest.mark.parametrize(
    "example",
    [
        Example(
            fakes.pairs1,
            fakes.course1,
            {
                "id": "33e2a4a86ca9",
                "type": "pairing",
                "pairs" : [
                    {"meaningInSourceLanguage": "dog", "formInTargetLanguage": "perro"},
                    {"meaningInSourceLanguage": "cat", "formInTargetLanguage": "gata"}
                ],
                "priority": 0,
                "group": "b4be982a043f",
            },
            "data_set_1",
        ),
        Example(
            fakes.pairs2,
            fakes.course1,
            {
                "id": "33e2a4a86ca9",
                "type": "pairing",
                "pairs" : [
                    {"meaningInSourceLanguage": "dog", "formInTargetLanguage": "perro"},
                    {"meaningInSourceLanguage": "cat", "formInTargetLanguage": "gata"},
                    {"meaningInSourceLanguage": "duck", "formInTargetLanguage": "pato"},
                    {"meaningInSourceLanguage": "lion", "formInTargetLanguage": "leon"},
                    {"meaningInSourceLanguage": "horse", "formInTargetLanguage": "caballo"}
                ],
                "priority": 0,
                "group": "b4be982a043f",
            },
            "data_set_2",
        ),
    ],
    ids=lambda example: example.name,
)
def test_get_pairing_challenge(example):
    cur_res = get_pairing_challenge(example.word, example.course)[0]
    assert cur_res == example.expected_result
