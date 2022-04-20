import collections

import pytest
from librelingo_fakes import fakes
from librelingo_json_export.challenge_types import get_pairing_challenge

Example = collections.namedtuple(
    "Example", ["skill", "course", "expected_result", "name"]
)


@pytest.mark.parametrize(
    "example",
    [
        Example(
            fakes.skillWithWord,
            fakes.course1,
            {
                "id": "9ab3c274c821",
                "type": "pairingChallenge",
                "pairs" : [
                    {"meaningInSourceLanguage": "foo", "formInTargetLanguage": "foous"},
                ],
                "priority": 0,
                "group": "21215a000ef0",
            },
            "data_set_1",
        ),
        Example(
            fakes.skillWith3Words,
            fakes.course1,
            {
                "id": "9ab3c274c821",
                "type": "pairingChallenge",
                "pairs" : [
                    {"meaningInSourceLanguage": "foo", "formInTargetLanguage": "foous"},
                    {"meaningInSourceLanguage": "apple", "formInTargetLanguage": "apfel"},
                    {"meaningInSourceLanguage": "apple", "formInTargetLanguage": "apfel"},
                ],
                "priority": 0,
                "group": "21215a000ef0",
            },
            "data_set_2",
        ),
    ],
    ids=lambda example: example.name,
)
def test_get_pairing_challenge(example):
    assert get_pairing_challenge(example.skill, example.course) == [example.expected_result]

