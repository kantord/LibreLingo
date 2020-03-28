import os
from django.apps import apps
from django.core.management import CommandError, find_commands
from django.test import TestCase
from django.core import management
from io import StringIO
from django.test.utils import extend_sys_path
from django.utils import translation


class CommandTests(TestCase):
    databases = '__all__'
    fixtures = ["dumps/courseData.json"]

    def test_command(self):
        out = StringIO()
        management.call_command('exportcourse', 1, stdout=out, verbosity=3)
        # print(out.getvalue())
        # self.assertIn("Exporting course Spanish for English speakers course", out.getvalue())

    def test_language_preserved(self):
        out = StringIO()
        with translation.override('en'):
            management.call_command('exportcourse', 2, stdout=out)
            self.assertEqual(translation.get_language(), 'en', "Same language")
            # self.assertEqual(translation.get_language(), 'fr', "Not Same language")

    def test_exportcourses(self):
        """ An unknown command raises CommandError """
        with self.assertRaisesMessage(CommandError, "Unknown command: 'exportcourses'"):
            management.call_command(('exportcourses',))

    def test_discover_commands_in_eggs(self):
        """
        Management commands can also be loaded from Python eggs.
        """
        egg_dir = '%s/eggs' % os.path.dirname(__file__)
        egg_name = '%s/basic.egg' % egg_dir
        with extend_sys_path(egg_name):
            with self.settings(INSTALLED_APPS=['course']):
                cmds = find_commands(os.path.join(apps.get_app_config('course').path, 'management'))
        self.assertEqual(cmds, ['exportcourse'])
