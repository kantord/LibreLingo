import collections

import pytest
from librelingo_fakes import fakes
from librelingo_json_export.challenge_types import get_chips_from_phrase


def test_empty_string():
    chips = get_chips_from_phrase(lambda _: [""], None, fakes.course1)
    assert not chips
    assert isinstance(chips, list)


@pytest.fixture
def mock_clean_word(mocker):
    return mocker.patch("librelingo_json_export.challenge_types.clean_word")


def test_empty_string_doesnt_call_clean_word(mock_clean_word):
    get_chips_from_phrase(lambda _: [""], None, fakes.course1)
    assert not mock_clean_word.called


def test_calls_clean_word_with_correct_argument(mock_clean_word):
    get_chips_from_phrase(lambda _: ["foo"], None, fakes.course2)
    mock_clean_word.assert_called_with("foo")


def test_returns_correct_value(mock_clean_word):
    mock_clean_word.return_value = fakes.fake_value()
    assert get_chips_from_phrase(lambda _: "foo", None, fakes.course1) == [
        mock_clean_word.return_value
    ]


def test_returns_correct_number_of_words(mock_clean_word):
    # Includes extra words
    mock_clean_word.side_effect = lambda x: x
    assert (
        len(
            get_chips_from_phrase(
                lambda x: ["Sleep well!"] if x is None else x[0],
                None,
                fakes.course1,
            )
        )
        == 4
    )


def test_includes_words_from_other_phrases_sorted_by_edit_distance():
    extra_chips = list(
        get_chips_from_phrase(
            lambda x: ["something lipsum"] if x is None else x[0],
            None,
            fakes.course1,
        )
    )
    while "something" in extra_chips:
        extra_chips.remove("something")
    while "lipsum" in extra_chips:
        extra_chips.remove("lipsum")
    assert extra_chips == ["ipsum", "lorem"]


def test_doesnt_include_duplicates_from_another_phrase():
    my_fake_module = fakes.customize(
        fakes.course1.modules[0],
        skills=[
            fakes.customize(
                fakes.course1.modules[0].skills[0],
                phrases=[
                    fakes.customize(
                        fakes.course1.modules[0].skills[0].phrases[0],
                        in_target_language=["Ipsum"],
                    )
                ],
            )
        ],
    )
    fake_course_with_duplicated_chip = fakes.customize(
        fakes.course1,
        modules=[
            fakes.course1.modules[0],
            fakes.course1.modules[0],
            my_fake_module,
        ],
    )
    chips_count = collections.Counter(
        get_chips_from_phrase(
            lambda x: ["something lipsum"] if x is None else x[0],
            None,
            fake_course_with_duplicated_chip,
        )
    )

    assert chips_count["ipsum"] + chips_count["Ipsum"] == 1


def test_returns_correct_number_of_words_2():
    fake_course_with_duplicated_chip = fakes.customize(
        fakes.course1, modules=[fakes.course1.modules[0], fakes.course1.modules[0]]
    )
    chips = list(
        get_chips_from_phrase(
            lambda x: ["something lipsum dolor"] if x is None else x[0],
            None,
            fake_course_with_duplicated_chip,
        )
    )

    assert len(chips) == 5
