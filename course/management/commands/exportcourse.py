import json
import hashlib
from pathlib import Path

from slugify import slugify
from django.core.management.base import BaseCommand, CommandError

from course.models import Course
from course.models import DictionaryItem
from course.utils import clean_word
from course.models import LICENSES

import workspaces.liblili2json.liblili2json as liblili2json


def opaqueId(obj, salt=""):
    hash = hashlib.sha256()
    hash.update((obj._meta.model_name + str(obj.pk) + salt).encode('utf-8'))
    return hash.hexdigest()[0:12]


def audioId(language_id, text):
    hash = hashlib.sha256()
    hash.update((language_id + "|" + text).encode('utf-8'))
    return hash.hexdigest()


def generate_chips(text):
    return [clean_word(w) for w in text.split()]


def generate_chips_in_target_language(item):
    return [generate_chips(item.formInTargetLanguage)] + \
        [generate_chips(solution.solution)
         for solution in item.alternativesolutionintargetlanguage_set.all()]


def generate_chips_in_source_language(item):
    return [generate_chips(item.meaningInSourceLanguage)] + \
        [generate_chips(solution.solution)
         for solution in item.alternativesolutioninsourcelanguage_set.all()]


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


def get_levels(skill):
    new_words = skill.learnword_set.count()
    new_sentences = skill.learnsentence_set.count()

    return round(1 + (new_words / 7) + (new_sentences / 5))


def get_course_data(course):
    converted_course = liblili2json.Course(
        language_code=course.target_language_code,
        language_name=course.language_name,
        special_characters=course.special_characters.split(' '),
        license=liblili2json.License(
            name=course.license,
            full_name=LICENSES[course.license]["full_name"],
            link=LICENSES[course.license]["link"],),
        modules=[liblili2json.Module(
            title=module.name,
            skills=[
                liblili2json.Skill(
                    name=skill.name,
                    words=[liblili2json.Word(
                        in_target_langauge=word.formInTargetLanguage,
                        in_source_langauge=word.meaningInSourceLanguage,
                        pictures=[]) for word in skill.learnword_set.all()],
                    phrases=[liblili2json.Phrase(
                        in_target_langauge=sentence.formInTargetLanguage,
                        in_source_langauge=sentence.meaningInSourceLanguage)
                        for sentence in skill.learnsentence_set.all()],
                    image_set=[skill.image1, skill.image2, skill.image3],
                    id=skill.pk,
                ) for skill in module.skill_set.all()
            ]
        ) for module in course.module_set.all()],
        dictionary=[]
    )
    return liblili2json.get_course_data(converted_course)


def export_course_data(export_path, course):
    print("Exporting course meta data")
    data = get_course_data(course)
    with open(Path(export_path) / "courseData.json", 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


def define_word(course, word, reverse):
    try:
        dictionary_item = DictionaryItem.objects.exclude(
            definition="").get(
            course__id=course.id,
            word=word,
            reverse=reverse)
        return {
            "word": word,
            "definition": dictionary_item.definition
        }
    except DictionaryItem.DoesNotExist:
        return {
            "word": word
        }


def define_words_in_sentence(course, sentence, reverse):
    return [define_word(course, word, reverse) for word in sentence.split(" ")]


def generate_learnword_challenge(
    learnword,
    formInTargetLanguage,
    meaningInSourceLanguage,
    language_id,
        course):
    return [{"type": "cards",
             "pictures": ["{}.jpg".format(image_name) for image_name in [learnword.image1,
                                                                         learnword.image2,
                                                                         learnword.image3]],
             "formInTargetLanguage": formInTargetLanguage,
             "meaningInSourceLanguage": meaningInSourceLanguage,
             "id": opaqueId(learnword,
                            "cards"),
             "priority": 0,
             "group": opaqueId(learnword),
             },
            {"type": "shortInput",
             "pictures": ["{}.jpg".format(image_name) for image_name in [learnword.image1,
                                                                         learnword.image2,
                                                                         learnword.image3]],
             "formInTargetLanguage": [formInTargetLanguage] + list(map(
                 lambda x: x.solution, learnword.alternativesolutionintargetlanguage_set.all())),
             "phrase": define_words_in_sentence(course,
                                                meaningInSourceLanguage,
                                                True),
             "id": opaqueId(learnword,
                            "shortInput"),
             "priority": 1,
             "group": opaqueId(learnword),
             },
            {"type": "listeningExercise",
             "answer": formInTargetLanguage,
             "meaning": meaningInSourceLanguage,
             "audio": audioId(language_id,
                              formInTargetLanguage),
             "id": opaqueId(learnword,
                            "listeningExercise"),
             "priority": 1,
             "group": opaqueId(learnword),
             },
            ]


def get_skill_data(skill, language_id, course):
    data = []
    for learnsentence in skill.learnsentence_set.all():
        data = data + [{"type": "options",
                        "formInTargetLanguage": learnsentence.formInTargetLanguage,
                        "meaningInSourceLanguage": learnsentence.meaningInSourceLanguage,
                        "id": opaqueId(learnsentence,
                                       "options"),
                        "priority": 0,
                        "group": opaqueId(learnsentence),
                        },
                       {"type": "listeningExercise",
                        "answer": learnsentence.formInTargetLanguage,
                        "meaning": learnsentence.meaningInSourceLanguage,
                        "audio": audioId(language_id,
                                         learnsentence.formInTargetLanguage),
                        "id": opaqueId(learnsentence,
                                       "listeningExercise"),
                        "priority": 1,
                        "group": opaqueId(learnsentence),
                        },
                       ]

        if len(generate_chips_in_target_language(learnsentence)[0]) >= 2:
            data = data + [{"type": "chips",
                            "translatesToSourceLanguage": False,
                            "phrase": define_words_in_sentence(course,
                                                               learnsentence.meaningInSourceLanguage,
                                                               True),
                            "chips": generate_chips_in_target_language(learnsentence)[0],
                            "solutions": generate_chips_in_target_language(learnsentence),
                            "formattedSolution": learnsentence.formInTargetLanguage,
                            "id": opaqueId(learnsentence,
                                           "chips"),
                            "priority": 2,
                            "group": opaqueId(learnsentence),
                            },
                           ]

        if len(generate_chips_in_source_language(learnsentence)[0]) >= 2:
            data = data + [{"type": "chips",
                            "translatesToSourceLanguage": True,
                            "phrase": define_words_in_sentence(course,
                                                               learnsentence.formInTargetLanguage,

                                                               False),
                            "chips": generate_chips_in_source_language(learnsentence)[0],
                            "solutions": generate_chips_in_source_language(learnsentence),
                            "formattedSolution": learnsentence.meaningInSourceLanguage,
                            "id": opaqueId(learnsentence,
                                           "chips"),
                            "priority": 2,
                            "group": opaqueId(learnsentence),
                            },
                           ]

    for learnword in skill.learnword_set.all():
        data = data + generate_learnword_challenge(
            learnword,
            learnword.formInTargetLanguage,
            learnword.meaningInSourceLanguage,
            language_id,
            course
        )

    return {
        "id": opaqueId(skill, "Skill"),
        "levels": get_levels(skill),
        "challenges": data
    }


def export_skill(export_path, skill, language_id, course):
    data = get_skill_data(skill, language_id, course)
    Path(Path(export_path) / "challenges").mkdir(parents=True, exist_ok=True)

    with open(Path(export_path) / "challenges" / "{}.json".format(slugify(skill.name)), 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


def export_course(course):
    print("Exporting course {}...".format(str(course)))
    language_id = course.language_name.lower()
    source_language_id = course.source_language_name.lower()
    course_id = "{}-from-{}".format(language_id, source_language_id)
    export_path = Path(
        "./workspaces/web/src/courses/{}".format(course_id)).resolve()
    print("Exporting to {}".format(export_path))
    print("Making sure course directory exists")
    Path(export_path).mkdir(parents=True, exist_ok=True)
    export_course_data(export_path, course)
    audios_to_fetch = []

    for module in course.module_set.all():
        for skill in module.skill_set.all():
            print("Exporting skill {}".format(str(skill)))
            export_skill(export_path, skill, language_id, course)
            for learnword in skill.learnword_set.all():
                audios_to_fetch.append(
                    "{}|{}|{}".format(
                        language_id,
                        audioId(
                            language_id,
                            learnword.formInTargetLanguage),
                        learnword.formInTargetLanguage))
            for learnsentence in skill.learnsentence_set.all():
                audios_to_fetch.append(
                    "{}|{}|{}".format(
                        language_id,
                        audioId(
                            language_id,
                            learnsentence.formInTargetLanguage),
                        learnsentence.formInTargetLanguage))

    with open(Path(export_path) / ".." / ".." / ".." / "src" / "audios_to_fetch.csv", 'w', encoding='utf-8') as f:
        f.write("\n".join(audios_to_fetch))
