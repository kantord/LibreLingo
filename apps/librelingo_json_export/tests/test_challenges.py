import collections

from unittest.mock import patch
from unittest import TestCase
from librelingo_json_export.challenge_types import get_chips_from_phrase
from librelingo_fakes import fakes


class GetChipsTest(TestCase):
    def test_empty_string(self):
        self.assertEqual(get_chips_from_phrase(lambda _: [""], None, fakes.course1), [])

    @patch("librelingo_json_export.challenge_types.clean_word")
    def test_empty_string_doesnt_call_clean_word(self, clean_word):
        get_chips_from_phrase(lambda _: [""], None, fakes.course1)
        self.assertFalse(clean_word.called)

    @patch("librelingo_json_export.challenge_types.clean_word")
    def test_calls_clean_word_with_correct_argument(self, clean_word):
        # pylint: disable=no-self-use
        get_chips_from_phrase(lambda _: ["foo"], None, fakes.course2)
        clean_word.assert_called_with("foo")

    @patch("librelingo_json_export.challenge_types.clean_word")
    def test_returns_correct_value(self, clean_word):
        clean_word.return_value = fakes.fake_value()
        self.assertEqual(
            get_chips_from_phrase(lambda _: "foo", None, fakes.course1),
            [clean_word.return_value],
        )

    @patch("librelingo_json_export.challenge_types.clean_word")
    def test_returns_correct_number_of_words(self, clean_word):
        # Includes extra words
        clean_word.side_effect = lambda x: x
        self.assertEqual(
            len(
                get_chips_from_phrase(
                    lambda x: ["Sleep well!"] if x is None else x[0],
                    None,
                    fakes.course1,
                )
            ),
            4,
        )

    def test_includes_words_from_other_phrases_sorted_by_edit_distance(self):
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
        self.assertEqual(extra_chips, ["ipsum", "lorem"])

    def test_doesnt_include_duplicates_from_another_phrase(self):
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

        self.assertEqual(chips_count["ipsum"] + chips_count["Ipsum"], 1)

    def test_returns_correct_number_of_words_2(self):
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

        self.assertEqual(len(chips), 5)
