import pytest
from librelingo_types import DictionaryItem, Module, Skill, Word
from librelingo_yaml_loader.yaml_loader import _load_dictionary

from .utils import get_fake_word


@pytest.fixture
def module_with_word():
    word, in_source_language, in_target_language = get_fake_word()
    my_module = Module("", "", skills=[Skill("", "", "", [word], [], [], None, None)])

    return my_module, in_source_language, in_target_language


def test_load_dictionary_returns_a_list(module_with_word):
    assert isinstance(_load_dictionary([module_with_word[0]]), list)


def test_load_dictionary_returns_a_list_of_dictionary_items(module_with_word):
    assert isinstance(_load_dictionary([module_with_word[0]])[0], DictionaryItem)


def test_load_dictionary_includes_word_from_new_word(module_with_word):
    _, in_source_language, in_target_language = module_with_word
    dict_item = DictionaryItem(
        word=in_source_language[0],
        definition=in_target_language[0],
        is_in_target_language=False,
    )
    assert dict_item in _load_dictionary([module_with_word[0]])


def test_load_dictionary_includes_reverse_word_from_new_word(module_with_word):
    _, in_source_language, in_target_language = module_with_word
    dict_item = DictionaryItem(
        word=in_target_language[0],
        definition=in_source_language[0],
        is_in_target_language=True,
    )
    assert dict_item in _load_dictionary([module_with_word[0]])


def test_load_dictionary_includes_word_from_mini_dictionary(module_with_word):
    module, _, __ = module_with_word
    module.skills[0] = Skill(
        **{**module.skills[0]._asdict(), "dictionary": [("foo", ("bar", "baz"), False)]}
    )
    assert DictionaryItem("foo", "bar\nbaz", False) in _load_dictionary(
        [module_with_word[0]]
    )


def test_load_dictionary_handles_multiple_word_per_skill(module_with_word):
    module_with_word[0].skills[0].words.append(get_fake_word()[0])
    assert len(_load_dictionary([module_with_word[0]])) == 4


def test_load_dictionary_handles_multiple_skills_per_module(module_with_word):
    module_with_word[0].skills.append(
        Skill("", "", "", [get_fake_word()[0]], [], [], None, None)
    )
    assert len(_load_dictionary([module_with_word[0]])) == 4


def test_load_dictionary_handles_multiple_modules(module_with_word):
    new_module = Module(
        "", "", [Skill("", "", "", [get_fake_word()[0]], [], [], None, None)]
    )
    assert len(_load_dictionary([module_with_word[0], new_module])) == 4


def test_load_dictionary_includes_duplicate_words_only_once(module_with_word):
    new_module = Module(
        "",
        "",
        [
            Skill(
                "", "", "", [module_with_word[0].skills[0].words[0]], [], [], None, None
            )
        ],
    )
    assert len(_load_dictionary([module_with_word[0], new_module])) == 2


def test_load_dictionary_has_a_single_string_definition(module_with_word):
    assert isinstance(_load_dictionary([module_with_word[0]])[0].definition, str)


def test_load_dictionary_includes_duplicate_words_includes_multiple_definitions(
    module_with_word,
):
    random_new_word = get_fake_word()[0]
    existing_word = module_with_word[0].skills[0].words[0]
    duplicate_word = Word(
        in_source_language=existing_word.in_source_language,
        in_target_language=random_new_word.in_target_language,
        pictures=[],
    )
    new_module = Module(
        "", "", [Skill("", "", "", [duplicate_word], [], [], None, None)]
    )
    definition = _load_dictionary([module_with_word[0], new_module])[0].definition
    assert (
        random_new_word.in_target_language[0] in definition
        and existing_word.in_target_language[0] in definition
    )
