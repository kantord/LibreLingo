import json
import hashlib
from pathlib import Path

from django.core.management.base import BaseCommand, CommandError
from course.models import Course

def opaqueId(obj, salt=""):
    hash = hashlib.sha256()
    hash.update((obj._meta.model_name + str(obj.pk) + salt).encode('utf-8'))
    return hash.hexdigest()[0:10]

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
        "languageCode": course.target_language_code,
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


def export_skill(export_path, skill):
    data = []
    for learnword in skill.learnword_set.all():
        data = data + [
            {
                "type": "cards",
                "pictures": ["{}.jpg".format(image_name) for image_name in [learnword.image1, learnword.image2, learnword.image3]],
                "formInTargetLanguage": learnword.formInTargetLanguage,
                "meaningInSourceLanguage": learnword.meaningInSourceLanguage,
                "id": opaqueId(learnword, "cards"),
                "priority": 0,
                "group": opaqueId(learnword),
            },
            {
                "type": "shortInput",
                "pictures": ["{}.jpg".format(image_name) for image_name in [learnword.image1, learnword.image2, learnword.image3]],
                "formInTargetLanguage": [learnword.formInTargetLanguage],
                "meaningInSourceLanguage": learnword.meaningInSourceLanguage,
                "id": opaqueId(learnword, "shortInput"),
                "priority": 1,
                "group": opaqueId(learnword),
            },
        ]

    Path(Path(export_path) / "challenges").mkdir(parents=True, exist_ok=True)

    with open(Path(export_path) / "challenges" / "{}.json".format(skill.name.lower()), 'w', encoding='utf-8') as f:
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

    for module in course.module_set.all():
        for skill in module.skill_set.all():
            print("Exporting skill {}".format(str(skill)))
            export_skill(export_path, skill)
