from django.core.management import CommandError, find_commands
from django.test import TestCase
from django.core import management
from io import StringIO
import sys


class CommandTests(TestCase):
    databases = '__all__'
    fixtures = ["dumps/courseData.json"]

    def test_command(self):
        sys.stdout = out = StringIO()
        management.call_command('exportcourse', 1, stdout=out, verbosity=3)
        self.assertIn("Exporting course Spanish for English speakers course", out.getvalue())

    def test_calling_a_command_without_argument(self):
        with self.assertRaisesMessage(CommandError, 'Error: the following arguments are required: course_id'):
            sys.stdout = out = StringIO()
            management.call_command('exportcourse', stdout=out)

    def test_exportcourses(self):
        with self.assertRaisesMessage(CommandError, "Unknown command: 'exportcourses'"):
            management.call_command(('exportcourses',))

    def test_check_course_does_not_exists(self):
        with self.assertRaisesMessage(CommandError, 'Course "3" does not exist'):
            sys.stdout = out = StringIO()
            management.call_command('exportcourse', 3, stdout=out, verbosity=3)
