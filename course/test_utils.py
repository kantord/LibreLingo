from django.test import TestCase
from .utils import clean_word, validate_spelling
from django.core.exceptions import ValidationError


class CleanWordTestCase(TestCase):
    def test_simple_word(self):
        self.assertEqual(clean_word("goes"), 'goes')

    def test_word_with_special_characters_after(self):
        self.assertEqual(clean_word("goes,"), 'goes')

    def test_word_with_special_characters_before(self):
        self.assertEqual(clean_word(",goes"), 'goes')

    def test_word_with_special_characters_inside(self):
        self.assertEqual(clean_word("it's"), "it's")

    def test_messy_word(self):
        self.assertEqual(clean_word(":::col·lecciona'm::?"), "col·lecciona'm")


class SpellCheckValidatorTests(TestCase):
    def test_validate_spelling_incorrect_1(self):
        with self.assertRaises(ValidationError):
            validate_spelling("thare is correct", "en")

    def test_validate_spelling_incorrect_2(self):
        with self.assertRaises(ValidationError):
            validate_spelling("La manzana es pequna", "es")

    def test_validate_spelling_correct_1(self):
        validate_spelling("that is correct", "en")

    def test_validate_spelling_correct_1(self):
        validate_spelling("La manzana es pequeña", "es")
