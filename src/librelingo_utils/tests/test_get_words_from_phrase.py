from librelingo_utils.utils import get_words_from_phrase


def test_it_returns_a_list_of_words():
    assert get_words_from_phrase("Hello World, Foo!") == ["Hello", "World,", "Foo!"]


def teset_it_handles_multi_word_phrases():
    assert get_words_from_phrase("Hello {World, Foo!}") == ["Hello", "World, Foo!"]


def test_handles_different_types_of_whitespace():
    assert get_words_from_phrase("Hello\tWorld,\tFoo!") == ["Hello", "World,", "Foo!"]


def test_it_returns_exclamation_mark_as_a_part_of_word():
    assert get_words_from_phrase("Hello World, Foo!") == ["Hello", "World,", "Foo!"]


def test_it_does_not_return_exclamation_mark_as_a_word():
    assert get_words_from_phrase("Hello World, Foo !") == ["Hello", "World,", "Foo"]


def test_it_does_not_return_question_mark_as_a_word():
    assert get_words_from_phrase("Hello Foo ? Bar") == ["Hello", "Foo", "Bar"]


def test_handles_article_contraction_with_comma():
    assert get_words_from_phrase("l'any, passat") == ["l'any,", "passat"]


def test_handles_commas_and_apostrophes_together():
    assert get_words_from_phrase("De l'eau, s'il vous plaît.") == [
        "De",
        "l'eau,",
        "s'il",
        "vous",
        "plaît.",
    ]
