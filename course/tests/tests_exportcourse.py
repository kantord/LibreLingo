from django.core.management import CommandError, find_commands
from django.test import TestCase
from django.core import management
from io import StringIO
import sys

from django.utils import translation


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
