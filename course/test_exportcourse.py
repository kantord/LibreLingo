from django.core.management import CommandError, find_commands
from django.test import TestCase
from django.core import management
from io import StringIO
import sys
from unittest.mock import patch

from django.utils import translation
from course.management.commands.exportcourse import generate_chips


class CommandTests(TestCase):
    databases = '__all__'
    fixtures = ["dumps/courseData.json"]

    def test_exportcourse(self):
        sys.stdout = out = StringIO()
        management.call_command('exportcourse', 1, stdout=out, verbosity=3)
        self.assertIn("Exporting course Spanish for English speakers course", out.getvalue())

    def test_check_course_does_not_exists(self):
        with self.assertRaisesMessage(CommandError, 'Course "645343" does not exist'):
            management.call_command('exportcourse', 645343, stdout=StringIO(), verbosity=3)

    def test_argument_type(self):
        with self.assertRaisesMessage(CommandError, "Error: argument course_id: invalid int value: 'dgdnfgn'"):
            management.call_command('exportcourse', "dgdnfgn", stdout=StringIO(), verbosity=3)


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

