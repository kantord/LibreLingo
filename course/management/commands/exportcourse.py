import json
import hashlib
from pathlib import Path

from django.core.management.base import BaseCommand, CommandError
from course.models import Course

def opaqueId(obj, salt=""):
    hash = hashlib.sha256()
    hash.update((obj._meta.model_name + str(obj.pk) + salt).encode('utf-8'))
    return hash.hexdigest()[0:10]


def audioId(language_id, text):
    hash = hashlib.sha256()
    hash.update((language_id + "|" + text).encode('utf-8'))
    return hash.hexdigest()


def clean_word(word):
    return "".join(c for c in word if c.isalnum())


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
        "specialCharacters": course.special_characters.split(' '),
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


def generate_learnword_challenged(learnword, formInTargetLanguage, meaningInSourceLanguage, language_id):
    return [
            {
                "type": "cards",
                "pictures": ["{}.jpg".format(image_name) for image_name in [learnword.image1, learnword.image2, learnword.image3]],
                "formInTargetLanguage": formInTargetLanguage,
                "meaningInSourceLanguage": meaningInSourceLanguage,
                "id": opaqueId(learnword, "cards"),
                "priority": 0,
                "group": opaqueId(learnword),
            },
            {
                "type": "shortInput",
                "pictures": ["{}.jpg".format(image_name) for image_name in [learnword.image1, learnword.image2, learnword.image3]],
                "formInTargetLanguage": [formInTargetLanguage],
                "meaningInSourceLanguage": meaningInSourceLanguage,
                "id": opaqueId(learnword, "shortInput"),
                "priority": 1,
                "group": opaqueId(learnword),
            },
            {
                "type": "listeningExercise",
                "answer": formInTargetLanguage,
                "meaning": meaningInSourceLanguage,
                "audio": audioId(language_id, formInTargetLanguage),
                "id": opaqueId(learnword, "listeningExercise"),
                "priority": 1,
                "group": opaqueId(learnword),
            },
        ]


def export_skill(export_path, skill, language_id):
    data = []
    for learnsentence in skill.learnsentence_set.all():
        data = data + [
            {
                "type": "options",
                "formInTargetLanguage": learnsentence.formInTargetLanguage,
                "meaningInSourceLanguage": learnsentence.meaningInSourceLanguage,
                "id": opaqueId(learnsentence, "options"),
                "priority": 0,
                "group": opaqueId(learnsentence),
            },
            {
                "type": "listeningExercise",
                "answer": learnsentence.formInTargetLanguage,
                "meaning": learnsentence.meaningInSourceLanguage,
                "audio": audioId(language_id, learnsentence.formInTargetLanguage),
                "id": opaqueId(learnsentence, "listeningExercise"),
                "priority": 1,
                "group": opaqueId(learnsentence),
            },
            {
                "type": "chips",
                "meaningInSourceLanguage": learnsentence.meaningInSourceLanguage,
                "chips": [clean_word(w) for w in learnsentence.formInTargetLanguage.split()],
                "solution": [clean_word(w) for w in learnsentence.formInTargetLanguage.split()],
                "formInTargetLanguage": learnsentence.formInTargetLanguage,
                "id": opaqueId(learnsentence, "chips"),
                "priority": 2,
                "group": opaqueId(learnsentence),
            },
        ]

    for learnword in skill.learnword_set.all():
        data = data + generate_learnword_challenged(learnword, learnword.formInTargetLanguage, learnword.meaningInSourceLanguage, language_id)
        if (learnword.formInTargetLanguage2):
            data = data + generate_learnword_challenged(learnword, learnword.formInTargetLanguage2, learnword.meaningInSourceLanguage2, language_id)


    Path(Path(export_path) / "challenges").mkdir(parents=True, exist_ok=True)

    with open(Path(export_path) / "challenges" / "{}.json".format(skill.name.lower()), 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


def export_course(course):
    print("Exporting course {}...".format(str(course)))
    language_id = course.language_name.lower()
    source_language_id = course.source_language_name.lower()
    course_id = "{}-from-{}".format(language_id, source_language_id)
    export_path = Path("./src/courses/{}".format(course_id)).resolve()
    print("Exporting to {}".format(export_path))
    print("Making sure course directory exists")
    Path(export_path).mkdir(parents=True, exist_ok=True)
    export_course_data(export_path, course)
    audios_to_fetch = []

    for module in course.module_set.all():
        for skill in module.skill_set.all():
            print("Exporting skill {}".format(str(skill)))
            export_skill(export_path, skill, language_id)
            for learnword in skill.learnword_set.all():
                audios_to_fetch.append("{}|{}|{}".format(language_id, audioId(language_id, learnword.formInTargetLanguage), learnword.formInTargetLanguage))
                if (learnword.formInTargetLanguage2):
                    audios_to_fetch.append("{}|{}|{}".format(language_id, audioId(language_id, learnword.formInTargetLanguage2), learnword.formInTargetLanguage2))
            for learnsentence in skill.learnsentence_set.all():
                audios_to_fetch.append("{}|{}|{}".format(language_id, audioId(language_id, learnsentence.formInTargetLanguage), learnsentence.formInTargetLanguage))

    with open(Path(export_path) / ".." / ".." / ".." / "src" / "audios_to_fetch.csv", 'w', encoding='utf-8') as f:
        f.write("\n".join(audios_to_fetch))
