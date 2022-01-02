from librelingo_fakes import fakes
from librelingo_utils import get_dumb_opaque_id
from utils import FakeLanguages


def test_word_only_first_meaning_matters_1():
    fake_name = str(fakes.fake_value())
    phrase_1 = fakes.customize(fakes.word1, in_source_language=[FakeLanguages.LANG_1])
    phrase_2 = fakes.customize(
        fakes.word1, in_source_language=[FakeLanguages.LANG_1, FakeLanguages.LANG_2]
    )
    assert get_dumb_opaque_id(fake_name, phrase_1) == get_dumb_opaque_id(
        fake_name, phrase_2
    )


def test_phrase_only_first_meaning_matters_1():
    fake_name = str(fakes.fake_value())
    phrase_1 = fakes.customize(fakes.phrase1, in_source_language=[FakeLanguages.LANG_1])
    phrase_2 = fakes.customize(
        fakes.phrase1,
        in_source_language=[FakeLanguages.LANG_1, FakeLanguages.LANG_2],
    )
    assert get_dumb_opaque_id(fake_name, phrase_1) == get_dumb_opaque_id(
        fake_name, phrase_2
    )


def test_word_only_first_meaning_matters_2():
    fake_name = str(fakes.fake_value())
    phrase_1 = fakes.customize(fakes.word1, in_target_language=[FakeLanguages.LANG_1])
    phrase_2 = fakes.customize(
        fakes.word1, in_target_language=[FakeLanguages.LANG_1, FakeLanguages.LANG_2]
    )
    assert get_dumb_opaque_id(fake_name, phrase_1) == get_dumb_opaque_id(
        fake_name, phrase_2
    )


def test_phrase_only_first_meaning_matters_2():
    fake_name = str(fakes.fake_value())
    phrase_1 = fakes.customize(fakes.phrase1, in_target_language=[FakeLanguages.LANG_1])
    phrase_2 = fakes.customize(
        fakes.phrase1,
        in_target_language=[FakeLanguages.LANG_1, FakeLanguages.LANG_2],
    )
    assert get_dumb_opaque_id(fake_name, phrase_1) == get_dumb_opaque_id(
        fake_name, phrase_2
    )


def test_the_first_meaning_does_matter():
    fake_name = str(fakes.fake_value())
    phrase_1 = fakes.customize(fakes.phrase1, in_target_language=[FakeLanguages.LANG_1])
    phrase_2 = fakes.customize(fakes.phrase1, in_target_language=[FakeLanguages.LANG_2])
    assert get_dumb_opaque_id(fake_name, phrase_1) != get_dumb_opaque_id(
        fake_name, phrase_2
    )
