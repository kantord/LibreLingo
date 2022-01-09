import argparse
import datetime
import json
import logging
import os
import zipfile
import shutil
import tempfile
import requests
from jinja2 import Environment, FileSystemLoader

import lili


def get_args():
    parser = argparse.ArgumentParser()
    parser.add_argument("--outdir", required=True, help="path to output directory")
    parser.add_argument("--courses", required=True, help="path to courses.json file")
    parser.add_argument("--log", action="store_true", help="Additional logging")
    args = parser.parse_args()
    return args


def generate_html(start_time, end_time, links, outdir):
    root = os.path.dirname(os.path.abspath(__file__))
    templates_dir = os.path.join(root, "templates")
    env = Environment(loader=FileSystemLoader(templates_dir), autoescape=True)
    template = env.get_template("courses.html")
    html = template.render(start_time=start_time, end_time=end_time, links=links)

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


def generate_course(links, courses_data, sdir, reldir, outdir, tdir, course_dir):
    logging.info("generate_course %s", course_dir)
    # pylint complains of "Catching too general exception Exception (broad-except)"
    # but I don't know what kind of exception can happen there, so for now let's not catch any exception.
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
        "text": tdir,
        "words": count["target_words"],
        "phrases": count["target_phrases"],
        "success": True,
    }
    links.append(results)
    with open(os.path.join(outdir, tdir, "course.json")) as fh:
        courses_data[tdir] = json.load(fh)


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

    for course in courses:
        download_course(course["url"], tempdir)
        sdir = os.path.join(tempdir.name, course["sdir"])
        generate_course(
            links=links,
            courses_data=courses_data,
            sdir=sdir,
            reldir="course",
            outdir=outdir,
            tdir=course["tdir"],
            course_dir=os.path.join(sdir, "course"),
        )

    root = os.path.dirname(
        os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    )

    generate_course(
        links=links,
        courses_data=courses_data,
        sdir=root,
        reldir="course",
        outdir=outdir,
        tdir="basque-from-english",
        course_dir=os.path.join(root, "courses", "basque-from-english"),
    )

    courses_dir = os.path.join(root, "temporarily_inactive_courses")
    for tdir in os.listdir(courses_dir):
        if tdir == "basque-from-english":
            continue
        generate_course(
            links=links,
            courses_data=courses_data,
            sdir=root,
            reldir=os.path.join("temporarily_inactive_courses", tdir),
            outdir=outdir,
            tdir=tdir,
            course_dir=os.path.join(courses_dir, tdir),
        )

    end_time = datetime.datetime.now()
    with open(os.path.join(outdir, "courses.json"), "w") as fh:
        json.dump(courses_data, fh, sort_keys=True)
    generate_html(start_time, end_time, links, outdir)


if __name__ == "__main__":
    main()
