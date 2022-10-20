from librelingo_utils.utils import get_words_from_phrase


def test_it_returns_a_list_of_words():
    assert get_words_from_phrase("Hello World, Foo!") == ["Hello", "World,", "Foo!"]


def test_it_returns_exclamation_mark_as_a_part_of_word():
    assert get_words_from_phrase("Hello World, Foo!") == ["Hello", "World,", "Foo!"]


def test_it_does_not_return_exclamation_mark_as_a_word():
    assert get_words_from_phrase("Hello World, Foo !") == ["Hello", "World,", "Foo"]


def test_it_does_not_return_question_mark_as_a_word():
    assert get_words_from_phrase("Hello Foo ? Bar") == ["Hello", "Foo", "Bar"]
