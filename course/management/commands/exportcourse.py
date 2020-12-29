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


def generate_imageset(item):
    return ["{}.jpg".format(image_name) for image_name in [item.image1,
                                                           item.image2,
                                                           item.image3]]


def convert_course(course):
    return liblili2json.Course(
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
                        in_target_language=(
                            [word.formInTargetLanguage] + list(map(
                                lambda x: x.solution, word.alternativesolutionintargetlanguage_set.all()))
                        ),
                        in_source_language=([word.meaningInSourceLanguage] + list(map(
                            lambda x: x.solution, word.alternativesolutioninsourcelanguage_set.all()))
                        ),
                        pictures=generate_imageset(word)) for word in skill.learnword_set.all()],
                    phrases=[liblili2json.Phrase(
                        in_target_language=([sentence.formInTargetLanguage] + list(map(
                            lambda x: x.solution, sentence.alternativesolutionintargetlanguage_set.all()))
                        ),
                        in_source_language=([sentence.meaningInSourceLanguage]) + list(map(
                            lambda x: x.solution, sentence.alternativesolutioninsourcelanguage_set.all()))
                    )
                        for sentence in skill.learnsentence_set.all()],
                    image_set=[skill.image1, skill.image2, skill.image3],
                    id=skill.pk,
                ) for skill in module.skill_set.all()
            ]
        ) for module in course.module_set.all()],
        dictionary=list(
            map(
                lambda x: liblili2json.DictionaryItem(
                    word=x.word,
                    definition=x.definition,
                    reverse=(not x.reverse)
                ),
                DictionaryItem.objects.filter(course__id=course.id))
        )
    )


def get_course_data(course):
    return liblili2json.get_course_data(convert_course(course))


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


def export_skill(export_path, skill, language_id, course):
    liblili2json.export_skill(export_path, skill, course)


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

    converted_course = convert_course(course)
    for module in converted_course.modules:
        for skill in module.skills:
            print("Exporting skill {}".format(str(skill.name)))
            export_skill(export_path, skill, language_id, converted_course)
    for module in course.module_set.all():
        for skill in module.skill_set.all():
            print("Fetching audios for skill {}".format(str(skill)))
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
