from librelingo_utils import clean_word


def test_empty_string():
    assert clean_word("") == ""


def test_removes_parentheses():
    assert clean_word("(Hello there") == "Hello there"


def test_removes_comma():
    assert clean_word("This is,") == "This is"


def test_doesnt_remove_parts_of_word_1():
    assert clean_word("Mother-in-law") == "Mother-in-law"


def test_doesnt_remove_parts_of_word_2():
    assert clean_word("It's him") == "It's him"


def test_removes_exclamation_mark():
    assert clean_word("It's his mother-in-law!") == "It's his mother-in-law"


def test_weird_english_posessive():
    assert clean_word("cats'") == "cats'"
