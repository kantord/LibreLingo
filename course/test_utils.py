from django.test import TestCase
from .utils import clean_word


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

