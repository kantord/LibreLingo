#!/usr/bin/env python
import argparse
import collections
import json
import os
import sys
import re
from jinja2 import Environment, FileSystemLoader

from librelingo_yaml_loader.yaml_loader import load_course
from librelingo_json_export.export import export_course

errors = []
warnings = []
images: dict = {
    "tiny": set(),
    "tinier": set(),
    "regular": set(),
}
unused_images = {}

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
    args = parser.parse_args()
    return args


def print_ids(ids):
    for idnum in sorted(ids.keys()):
        print(f"{idnum:6}  {ids[idnum]['module'].title}/{ids[idnum]['skill'].name}")


def load_images(images_dir):
    for img in os.listdir(images_dir):
        if not img.endswith(".jpg"):
            continue

        match = re.search(r"(.*)_tiny\.jpg$", img)
        if match:
            images["tiny"].add(match.group(1))
            continue
        match = re.search(r"(.*)_tinier\.jpg$", img)
        if match:
            images["tinier"].add(match.group(1))
            continue
        match = re.search(r"(.*)\.jpg$", img)
        if match:
            images["regular"].add(match.group(1))
            continue
        sys.exit(f"Unhandled image: {img}")
    unused_images["regular"] = set(images["regular"])
    return images


def check_images(module, skill):
    # print(skill.image_set) # The values from the thumbnails
    for word in skill.words:
        for picture in word.pictures:
            if picture not in images["regular"]:
                warnings.append(
                    f"Image {picture} used in {module.title}/{skill.name} does not exist"
                )
            if picture in unused_images["regular"]:
                unused_images["regular"].remove(picture)
        # print(word.pictures)
    # Word(in_target_language=['la mujer'], in_source_language=['the woman'], pictures=['woman1', 'woman2', 'woman3'])


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
    #    errors.append(f"Exception while exporting to JSON {err}")


def guess_path_to_course(path_to_course):
    if not path_to_course:
        if os.path.exists("course.yaml"):
            path_to_course = "."
        elif os.path.exists(os.path.join("course", "course.yaml")):
            path_to_course = "course"
    return path_to_course


def render(template_file, **args):
    root = os.path.dirname(os.path.abspath(__file__))
    templates_dir = os.path.join(root, "templates")
    env = Environment(loader=FileSystemLoader(templates_dir))
    template = env.get_template(template_file)
    html = template.render(**args)
    return html


def export_main_html_page(course, count, html_dir):
    branch = "main"  # how can we know which is the default branch of a repository?
    #'count', 'dictionary', 'index', 'license', 'modules', 'repository_url', 'settings', 'source_language', 'special_characters', 'target_language'
    # course.modules[0].skills[0].phrases
    # from ptpython.repl import embed
    # embed(globals(), locals())
    repository_url = get_repository_url(course)

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
        "modules.html",
        title=f"{course.target_language.name} for {course.source_language.name} speakers",
        rel="",
        branch=branch,
        course=course,
        repository_url=repository_url,
    )
    with open(os.path.join(html_dir, "modules.html"), "w") as fh:
        fh.write(html)


def export_json(language, filename, html_dir):
    all_words = {}
    for word, translations in language["dictionary"].items():
        if word not in all_words:
            all_words[word] = []
        for translation in translations:
            all_words[word].extend(translation["word"])

    with open(os.path.join(html_dir, filename), "w") as fh:
        json.dump(all_words, fh)


def export_words_html_page(course, all_words, language, count, path, html_file):
    html = render(
        "words.html",
        title=f"{course.target_language.name} for {course.source_language.name} speakers",
        rel="",
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
    if "https://github.com/kantord/LibreLingo/tree/main/courses/" in repository_url:
        repository_url = "https://github.com/kantord/LibreLingo"
    return repository_url


def export_word_html_pages(course, all_words, language, words_dir):
    branch = "main"

    repository_url = get_repository_url(course)

    for target_word in all_words:
        html = render(
            "word.html",
            title=f"{target_word} in {course.target_language.name}",
            rel="../",
            target_word=target_word,
            word_translations=language["words"][target_word],
            dictionary_words=language["dictionary"][target_word],
            phrases=language["phrases"][target_word],
            repository_url=repository_url,
            branch=branch,
            course=course,
        )
        with open(os.path.join(words_dir, target_word.lower() + ".html"), "w") as fh:
            fh.write(html)


def export_to_html(course, target, source, count, html_dir):
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

    export_json(source, "source-to-target.json", html_dir)
    export_json(target, "target-to-source.json", html_dir)

    export_main_html_page(course, count, html_dir)
    export_words_html_page(
        course,
        all_target_words,
        target,
        count,
        "target",
        os.path.join(html_dir, "target.html"),
    )
    export_words_html_page(
        course,
        all_source_words,
        source,
        count,
        "source",
        os.path.join(html_dir, "source.html"),
    )
    export_word_html_pages(
        course, all_target_words, target, os.path.join(html_dir, "target")
    )
    export_word_html_pages(
        course, all_source_words, source, os.path.join(html_dir, "source")
    )
    with open(os.path.join(html_dir, "stats.json"), "w") as fh:
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


def generate_html(course, html_dir):
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

    export_to_html(course, target, source, count, html_dir)


def collect_ids_and_names(args, course):
    skill_ids = {}
    skill_names = {}
    for module in course.modules:
        for skill in module.skills:
            if args.images:
                check_images(module, skill)
            if skill.id in skill_ids:
                errors.append(
                    f"Duplicate id: {skill.id} in {module.title}/{skill.name} and in {skill_ids[skill.id]['module'].title}/{skill_ids[skill.id]['skill'].name}"
                )
            if skill.name in skill_names:
                errors.append(
                    f"Duplicate name: {skill.name} in {module.title}/{skill.name} and in {skill_names[skill.name]['module'].title}/{skill_names[skill.name]['skill'].name}"
                )
            skill_ids[skill.id] = {
                "module": module,
                "skill": skill,
            }
            skill_names[skill.name] = {
                "module": module,
                "skill": skill,
            }
    return skill_ids


def main():
    args = get_args()

    path_to_course = guess_path_to_course(args.course)
    course = load_course(path_to_course)
    # try:
    # except Exception as err:
    #    sys.exit(f"Could not load course {err}")

    # images = None
    # if args.images:
    #    images = load_images(args.images)

    skill_ids = collect_ids_and_names(args, course)

    if args.export:
        check_export(course)

    if args.html:
        generate_html(course, args.html)

    if args.ids:
        print_ids(skill_ids)

    if args.images:
        print("----------------- Unused images ---------------------")
        for img in sorted(unused_images["regular"]):
            print(img)

    if warnings:
        print("------------------ WARNINGS ---------------------")
        for warn in warnings:
            print(warn)

    if errors:
        print("------------------ ERRORS ---------------------")
        for err in errors:
            print(err)
        sys.exit(1)


if __name__ == "__main__":
    main()
