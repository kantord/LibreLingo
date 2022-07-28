#!/usr/bin/env python
import argparse
import datetime
import json
import logging
import os
import shutil
import tempfile
import zipfile

import requests
from jinja2 import Environment, FileSystemLoader

import lili


def myconverter(o):
    if isinstance(o, datetime.datetime):
        return o.__str__()
    return None


def get_args():
    parser = argparse.ArgumentParser()
    parser.add_argument("--history", help="path to history.json file")
    parser.add_argument("--outdir", required=True, help="path to output directory")
    parser.add_argument("--courses", required=True, help="path to courses.json file")
    parser.add_argument("--log", action="store_true", help="Additional logging")
    args = parser.parse_args()
    return args


def get_template(filename):
    root = os.path.dirname(os.path.abspath(__file__))
    templates_dir = os.path.join(root, "templates")
    env = Environment(loader=FileSystemLoader(templates_dir), autoescape=True)
    return env.get_template(filename)


def generate_history_html(history, outdir):
    template = get_template("history.html")
    html = template.render(
        history=history,
        title="LibreLingo history",
    )

    with open(os.path.join(outdir, "history.html"), "w") as fh:
        fh.write(html)


def generate_index_html(start_time, end_time, links, outdir):
    template = get_template("courses.html")
    html = template.render(
        start_time=start_time,
        end_time=end_time,
        links=links,
        title="LibreLingo courses",
    )

    with open(os.path.join(outdir, "index.html"), "w") as fh:
        fh.write(html)


def download_course(url, tempdir):
    # download zip file
    res = requests.get(url, stream=True)
    filename = os.path.join(tempdir.name, "course.zip")
    if res.status_code == 200:
        with open(filename, "wb") as fh:
            # res.raw.decode_content
            shutil.copyfileobj(res.raw, fh)

    # unzip
    zf = zipfile.ZipFile(filename)
    zf.extractall(path=tempdir.name)


def generate_course(links, courses_data, reldir, outdir, tdir, course_dir):
    logging.info("generate_course %s", course_dir)
    # pylint complains of "Catching too general exception Exception (broad-except)"
    # but I don't know what kind of exception can happen there,
    # so for now let's not catch any exception.
    # try:
    docs_dir = os.path.join(outdir, tdir)
    course = lili.load_course(course_dir)
    target, source, count = lili.collect_data(course)
    lili.export_to_html(course, target, source, count, reldir, docs_dir)
    with open(os.path.join(docs_dir, "course.json")) as fh:
        count = json.load(fh)
    # except Exception as err:
    #    logging.error("Failed to generate course in %s. Exception %s", course_dir, err)
    #    return None

    results = {
        "tdir": tdir,
        "source_name": course.source_language.name,
        "target_name": course.target_language.name,
        "target_words": count["target_words"],
        "target_phrases": count["target_phrases"],
        "source_words": count["source_words"],
        "source_phrases": count["source_phrases"],
    }
    links.append(results)
    with open(os.path.join(outdir, tdir, "course.json")) as fh:
        courses_data[tdir] = json.load(fh)


def save_history(history_file, start_time, courses_data, outdir):
    with open(history_file, "a") as fh:
        json.dump(
            {"courses": courses_data, "date": start_time},
            fh,
            sort_keys=True,
            default=myconverter,
        )
        fh.write("\n")
    shutil.copy(history_file, os.path.join(outdir, "history.json"))
    history = []
    with open(history_file) as fh:
        for line in fh:
            res = json.loads(line)
            history.append(res)
    generate_history_html(history, outdir)


def main():
    args = get_args()
    if args.log:
        logging.basicConfig(level=logging.INFO)

    logging.info("Start generating HTML files")
    outdir = os.path.abspath(args.outdir)
    courses_file = args.courses

    tempdir = tempfile.TemporaryDirectory()
    start_time = datetime.datetime.now()
    with open(courses_file) as fh:
        courses = json.load(fh)

    logging.info("The temporary directory: %s", tempdir.name)

    if os.path.exists(outdir):
        shutil.rmtree(outdir)
    os.mkdir(outdir)

    links = []
    courses_data = {}

    root = os.path.dirname(
        os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    )

    for course in courses:
        if not course["devtoolsEnabled"]:
            continue

        if "url" in course:
            download_course(course["url"], tempdir)
            sdir = os.path.join(tempdir.name, course["paths"]["yamlFolder"])
        else:
            sdir = root

        reldir = "course"
        if "reldir" in course:
            reldir = course["reldir"]

        generate_course(
            links=links,
            courses_data=courses_data,
            reldir=reldir,
            outdir=outdir,
            tdir=course["paths"]["jsonFolder"],
            course_dir=os.path.join(sdir, reldir),
        )

    end_time = datetime.datetime.now()
    with open(os.path.join(outdir, "courses.json"), "w") as fh:
        json.dump(courses_data, fh, sort_keys=True)
    if args.history:
        save_history(args.history, start_time, courses_data, outdir)
    generate_index_html(start_time, end_time, links, outdir)


if __name__ == "__main__":
    main()
