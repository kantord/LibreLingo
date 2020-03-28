from django.test import TestCase
from .utils import clean_word

class TestCleanWord(TestCase):
    def test_word_without_special_characters(self):
        """Word without special character"""
        self.assertEqual(clean_word("hello"), 'hello')

    def test_word_with_special_characters_around(self):
        """Word with special characters around"""
        self.assertEqual(clean_word("-,hello??"), 'hello')

    def test_word_with_special_characters_inside(self):
        """Word with special characters inside"""
        self.assertEqual(clean_word("-,it's??"), "it's")

    def test_word_with_special_characters_inside_2(self):
        """Word with special characters inside"""
        self.assertEqual(clean_word("col·lecció"), "col·lecció")
