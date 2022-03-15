import re

import pytest
from librelingo_fakes import fakes
from librelingo_json_export.dictionary import _define_word
from librelingo_types import DictionaryItem


def test_definition_not_found():
    word = str(fakes.fake_value())
    pattern = re.escape(
        f'The another language word "{word}" does not have a definition.'
        "Please add it to the mini-dictionary."
    )
    with pytest.raises(ValueError, match=pattern):
        assert _define_word(fakes.course1, word, is_in_target_language=False) is True


def test_includes_definition():
    word = str(fakes.fake_value())
    meaning = str(fakes.fake_value())
    is_in_target_language = fakes.fake_value()
    my_course = fakes.customize(
        fakes.course1,
        dictionary=[
            DictionaryItem(
                word=word,
                definition=meaning,
                is_in_target_language=is_in_target_language,
            ),
        ],
    )
    assert _define_word(
        my_course, word, is_in_target_language=is_in_target_language
    ) == {"word": word, "definition": meaning}


def test_normalizes_words():
    word = str(fakes.fake_value())
    meaning = str(fakes.fake_value())
    is_in_target_language = fakes.fake_value()
    my_course = fakes.customize(
        fakes.course1,
        dictionary=[
            DictionaryItem(
                word=word,
                definition=meaning,
                is_in_target_language=is_in_target_language,
            ),
        ],
    )
    assert _define_word(
        my_course, word + ",", is_in_target_language=is_in_target_language
    ) == {"word": word + ",", "definition": meaning}


def test_matches_definitions_in_a_case_insensitive_way():
    my_course = fakes.customize(
        fakes.course1,
        dictionary=[
            DictionaryItem(
                word="Easier", definition="by a lot", is_in_target_language=True
            ),
        ],
    )
    assert _define_word(my_course, "easier", is_in_target_language=True) == {
        "word": "easier",
        "definition": "by a lot",
    }


def test_matches_definitions_with_spaces():
    my_course = fakes.customize(
        fakes.course1,
        dictionary=[
            DictionaryItem(
                word="three word term",
                definition="something",
                is_in_target_language=True,
            ),
        ],
    )
    assert _define_word(my_course, "three word term", is_in_target_language=True) == {
        "word": "three word term",
        "definition": "something",
    }


def test_doesnt_include_definition_with_different_word():
    word = str(fakes.fake_value())
    meaning = str(fakes.fake_value())
    is_in_target_language = fakes.fake_value()
    my_course = fakes.customize(
        fakes.course1,
        dictionary=[
            DictionaryItem(
                word=word,
                definition=meaning,
                is_in_target_language=is_in_target_language,
            ),
        ],
    )
    with pytest.raises(ValueError):
        _define_word(my_course, "asd", is_in_target_language=is_in_target_language)


def test_doesnt_include_definition_with_different_is_in_target_language():
    word = str(fakes.fake_value())
    meaning = str(fakes.fake_value())
    is_in_target_language = fakes.fake_value()
    my_course = fakes.customize(
        fakes.course1,
        dictionary=[
            DictionaryItem(word=word, definition=meaning, is_in_target_language=False),
        ],
    )
    with pytest.raises(ValueError):
        _define_word(my_course, word, is_in_target_language=is_in_target_language)


def test_skips_non_matching_definitions():
    word = str(fakes.fake_value())
    meaning = str(fakes.fake_value())
    is_in_target_language = fakes.fake_value()
    my_course = fakes.customize(
        fakes.course1,
        dictionary=[
            DictionaryItem(
                word="random shit",
                definition="random shit",
                is_in_target_language="random shit",
            ),
            DictionaryItem(
                word=word,
                definition=meaning,
                is_in_target_language=is_in_target_language,
            ),
        ],
    )
    assert _define_word(
        my_course, word, is_in_target_language=is_in_target_language
    ) == {"word": word, "definition": meaning}


def test_skips_empty_definition():
    word = str(fakes.fake_value())
    my_course = fakes.customize(
        fakes.course1,
        dictionary=[
            DictionaryItem(word=word, definition="", is_in_target_language=False),
        ],
    )
    with pytest.raises(ValueError):
        _define_word(my_course, word, is_in_target_language=False)
