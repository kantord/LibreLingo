import collections
import pytest

from librelingo_utils import clean_word

TCData = collections.namedtuple("TCData", ["input_str", "expected", "name"])


@pytest.mark.parametrize(
    "test_case_data",
    [
        TCData("", "", "empty_string"),
        TCData("(Hello there", "Hello there", "removes_parentheses"),
        TCData("This is,", "This is", "removes_comma"),
        TCData("Mother-in-law", "Mother-in-law", "remove_parts_of_word_1"),
        TCData("It's him", "It's him", "remove_parts_of_word_2"),
        TCData(
            "It's his mother-in-law!",
            "It's his mother-in-law",
            "removes_exclamation_mark",
        ),
        TCData("cats'", "cats'", "weird_english_posessive"),
    ],
    ids=lambda cur_test_case_data: cur_test_case_data.name,
)
def test_clean_word(test_case_data):
    assert clean_word(test_case_data.input_str) == test_case_data.expected
