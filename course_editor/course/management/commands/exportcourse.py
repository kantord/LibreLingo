import json
from pathlib import Path

from django.core.management.base import BaseCommand, CommandError
from course.models import Course

class Command(BaseCommand):
    help = 'Exports a given langauge course'

    def add_arguments(self, parser):
        parser.add_argument('course_id', type=int)

    def handle(self, *args, **options):
        course_id = options['course_id']
        try:
            course = Course.objects.get(pk=course_id)
            export_course(course)
        except Course.DoesNotExist:
            raise CommandError('Course "%s" does not exist' % course_id)


def export_course_data(export_path, course):
    print("Exporting course meta data")
    data = {
        "languageName": course.language_name,
        "modules": [{
            "title": module.name,
            "skills": [{
                "imageSet": [skill.image1, skill.image2, skill.image3],
                "summary": [word.formInTargetLanguage for word in skill.learnword_set.all()],
                "practiceHref": skill.name.lower(),
                "title": skill.name,
            } for skill in module.skill_set.all()]
        } for module in course.module_set.all()]
    }
    with open(Path(export_path) / "courseData.json", 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


def export_course(course):
    print("Exporting course {}...".format(str(course)))
    language_id = course.language_name.lower()
    source_language_id = course.source_language_name.lower()
    course_id = "{}-from-{}".format(language_id, source_language_id)
    export_path = Path("../src/courses/{}".format(course_id)).resolve()
    print("Exporting to {}".format(export_path))
    print("Making sure course directory exists")
    Path(export_path).mkdir(parents=True, exist_ok=True)
    export_course_data(export_path, course)
