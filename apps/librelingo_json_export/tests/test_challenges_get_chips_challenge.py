import collections
import pytest

from librelingo_json_export.challenge_types import get_chips_challenge
from librelingo_fakes import fakes

Example = collections.namedtuple(
    "Example", ["phrase", "course", "expected_result", "name"]
)


@pytest.mark.parametrize(
    "example",
    [
        Example(
            fakes.phrase1,
            fakes.course1,
            {
                "type": "chips",
                "translatesToSourceLanguage": False,
                "phrase": [
                    {"word": "foo", "definition": "barrus"},
                    {"word": "bar", "definition": "furrrr"},
                ],
                "id": "9f9b09771a07",
                "group": "930c4c4e7552",
                "priority": 2,
                "chips": ["foous", "barus", "lorem", "ipsum"],
                "solutions": [["foous", "barus"]],
                "formattedSolution": "foous barus",
            },
            "simple_data_set",
        ),
        Example(
            fakes.phrase_with_multi_word_terms,
            fakes.course1,
            {
                "type": "chips",
                "translatesToSourceLanguage": False,
                "phrase": [
                    {"word": "foo", "definition": "barrus"},
                    {"word": "bar", "definition": "furrrr"},
                    {"word": "baz quux", "definition": "very big word"},
                ],
                "id": "3e4d0ed7d738",
                "group": "e87212735da5",
                "priority": 2,
                "chips": ["foous", "barus", "very", "big", "word", "lorem", "ipsum"],
                "solutions": [["foous", "barus", "very", "big", "word"]],
                "formattedSolution": "foous barus very big word",
            },
            "multi_word_terms",
        ),
    ],
    ids=lambda example: example.name,
)
def test_returns_correct_value(example):
    cur_res = get_chips_challenge(example.phrase, example.course)[0]
    assert cur_res == example.expected_result


@pytest.fixture
def mock_get_solutions_from_phrase(mocker):
    return mocker.patch(
        "librelingo_json_export.challenge_types.get_solutions_from_phrase"
    )


@pytest.fixture
def mock_get_chips_from_phrase(mocker):
    return mocker.patch("librelingo_json_export.challenge_types.get_chips_from_phrase")


def test_returns_correct_value2(
    mock_get_chips_from_phrase, mock_get_solutions_from_phrase
):
    mock_get_chips_from_phrase.return_value = fakes.fake_value()
    challenge = get_chips_challenge(fakes.phrase_with_alternatives, fakes.course1)[0]
    expected_challenge = {
        "type": "chips",
        "translatesToSourceLanguage": False,
        "phrase": [
            {"word": "foo", "definition": "barrus"},
            {"word": "bar", "definition": "furrrr"},
            {"word": "foo", "definition": "barrus"},
            {"word": "bar", "definition": "furrrr"},
        ],
        "id": "4b0e9208ce1b",
        "group": "66a39e74a2c8",
        "priority": 2,
        "solutions": mock_get_solutions_from_phrase.return_value,
        "chips": mock_get_chips_from_phrase.return_value,
        "formattedSolution": "foous barus foous barus ",
    }
    assert challenge == expected_challenge
