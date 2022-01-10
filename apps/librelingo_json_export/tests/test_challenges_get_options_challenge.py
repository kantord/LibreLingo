import collections
import pytest

from librelingo_json_export.challenge_types import get_options_challenge
from librelingo_fakes import fakes

TCData = collections.namedtuple("TCData", ["word", "course", "expected_result", "name"])


@pytest.mark.parametrize(
    "test_case_data",
    [
        TCData(
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
        TCData(
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
        TCData(
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
    ids=lambda cur_test_case_data: cur_test_case_data.name,
)
def test_get_options_challenge(test_case_data):
    cur_res = get_options_challenge(test_case_data.word, test_case_data.course)[0]
    assert cur_res == test_case_data.excpected_result
