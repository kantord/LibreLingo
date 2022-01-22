#!/usr/bin/env python
import argparse
import collections
import json
import logging
import os
import sys
import re
from jinja2 import Environment, FileSystemLoader

from librelingo_yaml_loader.yaml_loader import load_course
from librelingo_json_export.export import export_course

Settings = collections.namedtuple(
    "Settings",
    [
        "dry_run",
    ],
)


def get_args():
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--course", help="path to course directory that contains the course.yaml"
    )
    parser.add_argument(
        "--reldir", help="relative path of the course in the repository"
    )
    parser.add_argument("--ids", action="store_true", help="show ids of skills")
    parser.add_argument(
        "--export",
        action="store_true",
        help="Check if we can export the course to JSON",
    )
    parser.add_argument("--images", help="path to directory of images")
    parser.add_argument(
        "--html", help="path to directory where to generate html report"
    )
    parser.add_argument("--log", action="store_true", help="Additional logging")
    args = parser.parse_args()
    return args


def print_ids(ids):
    for idnum in sorted(ids.keys()):
        print(f"{idnum:6}  {ids[idnum]['module'].title}/{ids[idnum]['skill'].name}")


def check_export(course):
    settings = Settings(
        dry_run=False,
    )
    output_path = "output"
    if not os.path.exists(output_path):
        os.mkdir(output_path)
    export_course(output_path, course, settings)
    # try:
    # except Exception as err:
    #    self.errors.append(f"Exception while exporting to JSON {err}")


def guess_path_to_course(path_to_course):
    if not path_to_course:
        if os.path.exists("course.yaml"):
            path_to_course = "."
        elif os.path.exists(os.path.join("course", "course.yaml")):
            path_to_course = "course"
    return path_to_course


def skillfile_filter(path):
    match = re.search(r"^([a-z0-9]+)/skills/([a-z0-9-]+)\.yaml$", path)
    if not match:
        raise Exception(f"unrecoginized skill path: '{path}'")
    # return match.group(1) + '/' + match.group(2)
    return match.group(2)


def render(template_file, **args):
    root = os.path.dirname(os.path.abspath(__file__))
    templates_dir = os.path.join(root, "templates")
    env = Environment(loader=FileSystemLoader(templates_dir), autoescape=True)
    env.filters["skillfile"] = skillfile_filter
    template = env.get_template(template_file)
    html = template.render(**args)
    return html


def export_main_html_page(course, count, reldir, html_dir):
    branch = "main"  # how can we know which is the default branch of a repository?
    #'count', 'dictionary', 'index', 'license', 'modules', 'repository_url', 'settings', 'source_language', 'special_characters', 'target_language'
    # course.modules[0].skills[0].phrases
    # from ptpython.repl import embed
    # embed(globals(), locals())

    html = render(
        "index.html",
        title=f"{course.target_language.name} for {course.source_language.name} speakers",
        rel="",
        course=course,
        count=count,
    )
    with open(os.path.join(html_dir, "index.html"), "w") as fh:
        fh.write(html)

    html = render(
        "converter.html",
        title=f"{course.target_language.name} for {course.source_language.name} speakers",
        rel="",
        course=course,
    )
    with open(os.path.join(html_dir, "converter.html"), "w") as fh:
        fh.write(html)

    html = render(
        "modules.html",
        title=f"{course.target_language.name} for {course.source_language.name} speakers",
        rel="",
        branch=branch,
        course=course,
        repository_url=get_repository_url(course),
    )
    with open(os.path.join(html_dir, "modules.html"), "w") as fh:
        fh.write(html)

    html = render(
        "missing_words.html",
        title=f"Missing {course.source_language.name} words",
        rel="",
        course=course,
    )
    with open(os.path.join(html_dir, "words.html"), "w") as fh:
        fh.write(html)


def export_skill_html_pages(course, count, reldir, html_dir):
    branch = "main"  # how can we know which is the default branch of a repository?
    for module in course.modules:
        for skill in module.skills:
            html = render(
                "skill.html",
                title=f"{course.target_language.name} for {course.source_language.name} speakers",
                rel="../../../",
                branch=branch,
                course=course,
                skill=skill,
                repository_url=get_repository_url(course),
            )
            match = re.search(r"^([a-z0-9]+)/skills/([a-z0-9-]+).yaml", skill.filename)
            if match is None:
                exit(skill.filename)
            module_name = match.group(1)
            file_name = match.group(2)
            dir_path = os.path.join(html_dir, "course", module_name, "skills")
            # print(dir_path)
            if not os.path.exists(dir_path):
                os.makedirs(dir_path)
            # filename = skillurl_filter(skill.filename)
            with open(os.path.join(dir_path, file_name + ".html"), "w") as fh:
                fh.write(html)


def collect_phrases(course):
    target_to_source = {}
    source_to_target = {}
    for module in course.modules:
        for skill in module.skills:
            for phrase in skill.phrases:
                # print(phrase)
                for sentence in phrase.in_target_language:
                    # if sentence in target_to_source:
                    #    print(f"Same sentence '{sentence}' found twice")
                    target_to_source[sentence] = phrase.in_source_language
                for sentence in phrase.in_source_language:
                    # if sentence in source_to_target:
                    #    print(f"Same sentence '{sentence}' found twice")
                    source_to_target[sentence] = phrase.in_target_language
    return target_to_source, source_to_target


def collect_words(language, direction):
    all_words = {}
    for word, translations in language["words"].items():
        if word not in all_words:
            all_words[word] = []
        for translation in translations:
            if direction == "source-to-target":
                all_words[word].extend(translation["word"].in_target_language)
            else:
                all_words[word].extend(translation["word"].in_source_language)

    for word, translations in language["dictionary"].items():
        if word not in all_words:
            all_words[word] = []
        for translation in translations:
            all_words[word].extend(translation["word"])
    return all_words


def export_json(all_words, filename, html_dir):
    with open(os.path.join(html_dir, filename), "w") as fh:
        json.dump(all_words, fh)


def export_words_html_page(course, all_words, language, path, reldir, html_file):
    html = render(
        "words.html",
        title=f"{course.target_language.name} for {course.source_language.name} speakers",
        rel="",
        rel_dir=reldir,
        path=path,
        course=course,
        all_words=all_words,
        words=language["words"],
        dictionary=language["dictionary"],
        phrases=language["phrases"],
    )
    with open(html_file, "w") as fh:
        fh.write(html)

    #    word_class = ""
    #    if len(words[word]) > 1:
    #        word_class = 'warning'
    #    dictionary_class = ""
    #    if len(dictionary[word]) > 1:
    #        dictionary_class = 'warning'
    #    if len(words[word]) == 0 and len(dictionary[word]) == 0:
    #        word_class = 'warning'
    #        dictionary_class = 'warning'


def get_repository_url(course):
    repository_url = course.repository_url
    if "https://github.com/LibreLingo/LibreLingo/tree/main/courses/" in repository_url:
        repository_url = "https://github.com/LibreLingo/LibreLingo"
    if (
        "https://github.com/LibreLingo/LibreLingo/tree/main/temporarily_inactive_courses/"
        in repository_url
    ):
        repository_url = "https://github.com/LibreLingo/LibreLingo"
    return repository_url


def export_word_html_pages(course, all_words, language, reldir, words_dir):
    branch = "main"

    for target_word in all_words:
        html = render(
            "word.html",
            title=f"{target_word} in {course.target_language.name}",
            rel="../",
            rel_dir=reldir,
            target_word=target_word,
            word_translations=language["words"][target_word],
            dictionary_words=language["dictionary"][target_word],
            phrases=language["phrases"][target_word],
            repository_url=get_repository_url(course),
            branch=branch,
            course=course,
        )
        with open(os.path.join(words_dir, target_word.lower() + ".html"), "w") as fh:
            fh.write(html)


def export_to_html(course, target, source, count, reldir, html_dir):
    if not os.path.exists(html_dir):
        os.mkdir(html_dir)
    for path in ["target", "source"]:
        words_dir = os.path.join(html_dir, path)
        if not os.path.exists(words_dir):
            os.mkdir(words_dir)
    all_target_words = (
        set(target["words"].keys())
        .union(set(target["dictionary"].keys()))
        .union(set(target["phrases"].keys()))
    )
    count["target_words"] = len(all_target_words)

    all_source_words = (
        set(source["words"].keys())
        .union(set(source["dictionary"].keys()))
        .union(set(source["phrases"].keys()))
    )
    count["source_words"] = len(all_source_words)

    export_json(
        collect_words(source, "source-to-target"), "source-to-target.json", html_dir
    )
    export_json(
        collect_words(target, "target-to-source"), "target-to-source.json", html_dir
    )

    export_main_html_page(course, count, reldir, html_dir)
    export_skill_html_pages(course, count, reldir, html_dir)
    export_words_html_page(
        course,
        all_target_words,
        target,
        "target",
        reldir,
        os.path.join(html_dir, "target.html"),
    )
    export_words_html_page(
        course,
        all_source_words,
        source,
        "source",
        reldir,
        os.path.join(html_dir, "source.html"),
    )
    export_word_html_pages(
        course, all_target_words, target, reldir, os.path.join(html_dir, "target")
    )
    export_word_html_pages(
        course, all_source_words, source, reldir, os.path.join(html_dir, "source")
    )
    with open(os.path.join(html_dir, "course.json"), "w") as fh:
        json.dump(count, fh)


def clean(text):
    return re.sub(r'[{}.!?¡¿",/]', "", text)


def _collect_phrases(skill, count, target, source):
    for phrase in skill.phrases:
        for sentence in phrase.in_target_language:
            count["target_phrases"] += 1
            for word in clean(sentence).split(" "):
                target["phrases"][word.lower()].append(
                    {"sentence": sentence, "skill": skill}
                )
        for sentence in phrase.in_source_language:
            count["source_phrases"] += 1
            for word in clean(sentence).split(" "):
                source["phrases"][word.lower()].append(
                    {"sentence": sentence, "skill": skill}
                )


def collect_data(course):
    target = {
        "words": collections.defaultdict(list),
        "dictionary": collections.defaultdict(list),
        "phrases": collections.defaultdict(list),
    }
    source = {
        "words": collections.defaultdict(list),
        "dictionary": collections.defaultdict(list),
        "phrases": collections.defaultdict(list),
    }

    count = {
        "target_phrases": 0,
        "source_phrases": 0,
        "target_language_name": course.target_language.name,
        "source_language_name": course.source_language.name,
        "target_language_code": course.target_language.code,
        "source_language_code": course.source_language.code,
    }

    for module in course.modules:
        for skill in module.skills:
            for word in skill.words:
                for txt in word.in_target_language:
                    target["words"][clean(txt).lower()].append(
                        {"word": word, "skill": skill}
                    )
                for txt in word.in_source_language:
                    source["words"][clean(txt).lower()].append(
                        {"word": word, "skill": skill}
                    )

            for left, right, target_to_source in skill.dictionary:
                if target_to_source:
                    target["dictionary"][clean(left).lower()].append(
                        {"word": right, "skill": skill}
                    )
                else:
                    source["dictionary"][clean(left).lower()].append(
                        {"word": right, "skill": skill}
                    )

            _collect_phrases(skill, count, target, source)
    return target, source, count


class Lili:
    def __init__(self):
        self.skill_ids = {}
        self.skill_names = {}
        self.errors = []
        self.warnings = []
        self.images: dict = {
            "tiny": set(),
            "tinier": set(),
            "regular": set(),
        }
        self.unused_images = {}

    def load_images(self, images_dir):
        for img in os.listdir(images_dir):
            if not img.endswith(".jpg"):
                continue
            match = re.search(r"(.*)_tiny\.jpg$", img)
            if match:
                self.images["tiny"].add(match.group(1))
                continue
            match = re.search(r"(.*)_tinier\.jpg$", img)
            if match:
                self.images["tinier"].add(match.group(1))
                continue
            match = re.search(r"(.*)\.jpg$", img)
            if match:
                self.images["regular"].add(match.group(1))
                continue
            sys.exit(f"Unhandled image: {img}")
        self.unused_images["regular"] = set(self.images["regular"])

    def check_images(self, module, skill):
        # print(skill.image_set) # The values from the thumbnails
        for word in skill.words:
            for picture in word.pictures:
                if picture not in self.images["regular"]:
                    self.warnings.append(
                        f"Image {picture} used in {module.title}/{skill.name} does not exist"
                    )
                if picture in self.unused_images["regular"]:
                    self.unused_images["regular"].remove(picture)
            # print(word.pictures)
        # Word(in_target_language=['la mujer'], in_source_language=['the woman'], pictures=['woman1', 'woman2', 'woman3'])

    def collect_ids_and_names(self, images, course):
        for module in course.modules:
            for skill in module.skills:
                if images:
                    self.check_images(module, skill)
                if skill.id in self.skill_ids:
                    self.errors.append(
                        f"Duplicate id: {skill.id} in {module.title}/{skill.name} and in {self.skill_ids[skill.id]['module'].title}/{self.skill_ids[skill.id]['skill'].name}"
                    )
                if skill.name in self.skill_names:
                    self.errors.append(
                        f"Duplicate name: {skill.name} in {module.title}/{skill.name} and in {self.skill_names[skill.name]['module'].title}/{self.skill_names[skill.name]['skill'].name}"
                    )
                self.skill_ids[skill.id] = {
                    "module": module,
                    "skill": skill,
                }
                self.skill_names[skill.name] = {
                    "module": module,
                    "skill": skill,
                }


def main():
    args = get_args()
    if args.log:
        logging.basicConfig(level=logging.INFO)
    logging.info("Start Lili")

    path_to_course = guess_path_to_course(args.course)
    logging.info("Path to course: '%s'", path_to_course)
    course = load_course(path_to_course)
    # try:
    # except Exception as err:
    #    sys.exit(f"Could not load course {err}")

    lili = Lili()
    if args.images:
        lili.load_images(args.images)

    lili.collect_ids_and_names(args.images, course)

    if args.export:
        check_export(course)

    if args.html:
        target, source, count = collect_data(course)
        export_to_html(course, target, source, count, args.reldir, args.html)

    if args.ids:
        print_ids(lili.skill_ids)

    if args.images:
        print("----------------- Unused images ---------------------")
        for img in sorted(lili.unused_images["regular"]):
            print(img)

    if lili.warnings:
        print("------------------ WARNINGS ---------------------")
        for warn in lili.warnings:
            print(warn)

    if lili.errors:
        print("------------------ ERRORS ---------------------")
        for err in lili.errors:
            print(err)
        sys.exit(1)


if __name__ == "__main__":
    main()
