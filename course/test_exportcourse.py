from django.core.management import CommandError, find_commands
from snapshottest.django import TestCase
from django.core import management
from io import StringIO
import sys
from unittest.mock import patch
from os import path, listdir

from django.utils import translation
from course.management.commands.exportcourse import generate_chips
<<<<<<< HEAD
from course import test_data
=======
from course.management.commands.exportcourse import get_skill_data
from course.management.commands.exportcourse import get_course_data
from course.models import Course, Skill, Module
>>>>>>> master


class CommandTests(TestCase):
    databases = '__all__'
    fixtures = ["dumps/courseData.json"]

    def test_exportcourse(self):
        sys.stdout = out = StringIO()
        course_id = next(iter(test_data['course.course'].keys()))  # Get the first available course
        management.call_command('exportcourse', 1, stdout=out, verbosity=3)
        course_data = test_data['course.course'][course_id]
        self.assertIn("Exporting course {1} for {0} speakers course".format(course_data['source_language_name'],
                                                                            course_data['language_name']),
                      out.getvalue())

    def test_check_course_does_not_exists(self):
        course_id = min(list(test_data['course.course'].keys())) - 1  # get 1 from the least course id
        with self.assertRaisesMessage(CommandError, 'Course \"{0}\" does not exist'.format(str(course_id))):
            management.call_command('exportcourse', course_id, stdout=StringIO(), verbosity=3)

    def test_argument_type(self):
        course_id = "dgdnfgn"
        with self.assertRaisesMessage(CommandError,
                              "Error: argument course_id: invalid int value: \'{0}\'".format(course_id)):
                              management.call_command('exportcourse', course_id, stdout=StringIO(), verbosity=3)


    def test_course_all_skills(self):
        sys.stdout = out = StringIO()
        course_id = next(iter(test_data['course.course'].keys()))  # get the first available course
        management.call_command('exportcourse', course_id, stdout=out, verbosity=3)
        course_data = test_data['course.course'][course_id]
        module_ids_for_course = [key for key, value in test_data['course.module'].items() if
                                 value['course'] == course_id]
        for skill in list(test_data['course.skill'].values()):
            if skill['module'] in module_ids_for_course:
                self.assertIn("Exporting skill {0} in {1} in {3} for {2} speakers course".format(str(skill['name']), str(test_data['course.module'][skill['module']]['name']), str(course_data['source_language_name']),
                                                                            str(course_data['language_name'])), out.getvalue())

    def test_files_created(self):
        course_id = next(iter(test_data['course.course'].keys())) # get the first available course
        course_data = test_data['course.course'][course_id]
        exportPathString = "./src/courses/{0}-from-{1}".format(course_data['language_name'],
                                                                course_data['source_language_name'])
        # check for course metadata file
        try:
            if not path.isfile(exportPathString + '/courseData.json'):
                print('Course\'s metadata file was not created')
        except:
            print('Course\'s metadata file path is not created')

        # check for course challenges files
        if not path.isdir(exportPathString + '/challenges'):
            print('Course\'s challenges path is not created')

        files_in_path = [f for f in listdir(exportPathString + '/challenges') if
                         path.isfile(path.join(exportPathString + '/challenges', f))]
        files_should_be_in_path = []
        module_ids_for_course = [key for key, value in test_data['course.module'].items() if
                                 value['course'] == course_id]
        for skill in list(test_data['course.skill'].values()):
            if skill['module'] in module_ids_for_course:
                self.assertIn("{0}.json".format(str(skill['name']).lower()), ",".join(files_in_path))


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
<<<<<<< HEAD
=======


class ExportSkillTest(TestCase):
    databases = '__all__'
    fixtures = ["dumps/courseData.json"]

    def test_export_skill_correct_output_format(self):
        course = Course.objects.get(pk=1)
        skill = Skill.objects.get(pk=1)
        language_id = "test"
        data = get_skill_data(skill, language_id, course)
        self.assertMatchSnapshot(data[0:1])


class CourseDataTest(TestCase):
    databases = '__all__'

    def setUp(self):
        self.course = Course.objects.create(
            language_name="Spanish",
            source_language_name="English",
            target_language_code="ES",
            special_characters="a b"
        )
        self.module = Module.objects.create(
            course=self.course,
            name="Basics"
        )
        self.skill = Skill.objects.create(
            module=self.module,
            name="Animals",
            image1="water1",
            image2="water2",
            image3="water3",
        )

    def test_correct_output_format(self):
        data = get_course_data(self.course)
        self.assertMatchSnapshot(data)

    def test_imageset_optional(self):
        self.skill.image1 = None
        self.skill.image2 = None
        self.skill.image3 = None
        self.skill.save()
        data = get_course_data(self.course)
        assert "imageSet" not in data["modules"][0]["skills"][0], "Has not imageset"

>>>>>>> master
