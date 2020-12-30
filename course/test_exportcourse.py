from django.core.management import CommandError, find_commands
from snapshottest.django import TestCase
from django.core import management
from io import StringIO
import sys
from unittest.mock import patch

from django.utils import translation
from course.management.commands.exportcourse import generate_chips
from course.management.commands.exportcourse import opaqueId, audioId
from course.management.commands.exportcourse import define_word
from course.models import Course, Skill, Module, LearnWord, LearnSentence, DictionaryItem


class CommandTests(TestCase):
    databases = '__all__'
    fixtures = ["courseData.json"]

    def test_exportcourse(self):
        sys.stdout = out = StringIO()
        management.call_command('exportcourse', 1, stdout=out, verbosity=3)
        self.assertIn(
            "Exporting course Spanish for English speakers",
            out.getvalue())

    def test_check_course_does_not_exists(self):
        with self.assertRaisesMessage(CommandError, 'Course "645343" does not exist'):
            management.call_command(
                'exportcourse',
                645343,
                stdout=StringIO(),
                verbosity=3)

    def test_argument_type(self):
        with self.assertRaisesMessage(CommandError, "Error: argument course_id: invalid int value: 'dgdnfgn'"):
            management.call_command(
                'exportcourse',
                "dgdnfgn",
                stdout=StringIO(),
                verbosity=3)


class AudioIdTest(TestCase):
    def test_audio_id_unique(self):
        self.assertNotEqual(audioId("1", "foo"), audioId("2", "bar"))

    def test_audio_id_return_value(self):
        self.assertEqual(audioId(
            "1", "foo"), "36d2a6c2d0e94f671e29b7f0f6223b977e495f08b2d067fde87ef18bd6222ec8")


class OpaqueIdTest(TestCase):
    databases = '__all__'
    fixtures = ["courseData.json"]

    def test_opaque_id_return_value(self):
        learnWord = LearnWord.objects.get(pk=1)
        self.assertEqual(opaqueId(learnWord), "759ec39eacef")

    def test_opaque_id_unique(self):
        learnword1 = LearnWord.objects.get(pk=1)
        learnword2 = LearnWord.objects.get(pk=2)
        self.assertNotEqual(opaqueId(learnword1), opaqueId(learnword2))

    def test_opaque_id_unique_with_salt(self):
        learnword = LearnWord.objects.get(pk=1)
        self.assertNotEqual(opaqueId(learnword), opaqueId(learnword, "foo"))


class DefineWordTest(TestCase):
    databases = '__all__'
    fixtures = ["courseData.json"]

    def test_non_existing_word(self):
        course = Course.objects.get(pk=1)
        expected_result = {"word": "foo"}
        self.assertEqual(define_word(course, "foo", True), expected_result)

    def test_existing_word(self):
        course = Course.objects.get(pk=1)
        expected_result = {
            'word': "dog",
            'definition': "perro"
        }
        self.assertEqual(define_word(course, "dog", True), expected_result)


class GenerateChipsTest(TestCase):
    def test_empty_string(self):
        self.assertEqual(generate_chips(''), [])

    @patch('course.management.commands.exportcourse.clean_word')
    def test_empty_string_doesnt_call_clean_word(self, clean_word):
        generate_chips('')
        assert not clean_word.called

    @patch('course.management.commands.exportcourse.clean_word')
    def test_calls_clean_word_with_correct_argument(self, clean_word):
        generate_chips('foo')
        clean_word.assert_called_with('foo')

    @patch('course.management.commands.exportcourse.clean_word')
    def test_returns_correct_value(self, clean_word):
        clean_word.return_value = "bar"
        self.assertEqual(generate_chips('foo'), ["bar"])

    @patch('course.management.commands.exportcourse.clean_word')
    def test_calls_clean_word_correct_times(self, clean_word):
        generate_chips('foo bar bazz')
        self.assertEqual(clean_word.call_count, 3)
