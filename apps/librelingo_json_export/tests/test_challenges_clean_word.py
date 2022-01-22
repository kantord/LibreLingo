import collections
import pytest

from librelingo_utils import clean_word

Example = collections.namedtuple("Example", ["input_str", "expected", "name"])


@pytest.mark.parametrize(
    "example",
    [
        Example("", "", "empty_string"),
        Example("(Hello there", "Hello there", "removes_parentheses"),
        Example("This is,", "This is", "removes_comma"),
        Example("Mother-in-law", "Mother-in-law", "remove_parts_of_word_1"),
        Example("It's him", "It's him", "remove_parts_of_word_2"),
        Example(
            "It's his mother-in-law!",
            "It's his mother-in-law",
            "removes_exclamation_mark",
        ),
        Example("cats'", "cats'", "weird_english_posessive"),
    ],
    ids=lambda example: example.name,
)
def test_clean_word(example):
    assert clean_word(example.input_str) == example.expected
