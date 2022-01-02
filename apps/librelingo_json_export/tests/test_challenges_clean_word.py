from utils import FakeLanguages
from librelingo_utils import clean_word


def test_empty_string():
    assert clean_word("") == ""


def test_removes_parentheses():
    assert clean_word("(foo") == FakeLanguages.LANG_1


def test_removes_comma():
    assert clean_word("foo,") == FakeLanguages.LANG_1


def test_doesnt_remove_parts_of_word_1():
    assert clean_word("ba-ar") == "ba-ar"


def test_doesnt_remove_parts_of_word_2():
    assert clean_word("L'Hospitalet") == "L'Hospitalet"


def test_removes_exclamation_mark():
    assert clean_word("ba-ar!") == "ba-ar"


def test_weird_english_posessive():
    assert clean_word("cats'") == "cats'"
