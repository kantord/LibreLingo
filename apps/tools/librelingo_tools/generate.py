import argparse
import datetime
import json
import logging
import os
import sys
import zipfile
import shutil
import tempfile
import requests
from jinja2 import Environment, FileSystemLoader


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


def generate_course(sdir, outdir, tdir, course_dir):
    lilipy = os.path.join(os.path.dirname(os.path.abspath(__file__)), "lili.py")
    current_dir = os.getcwd()
    os.chdir(sdir)
    docs_dir = os.path.join(outdir, tdir)
    python = sys.executable
    cmd = f"{python} {lilipy} --course {course_dir} --html {docs_dir}"
    logging.info(cmd)
    success = (
        os.system(cmd) == 0
    )  # replace this arbitrary system call with a simple Python call
    # {or refactor this file as a shell script. But Python code is preferable)
    os.chdir(current_dir)
    if success:
        with open(os.path.join(docs_dir, "course.json")) as fh:
            count = json.load(fh)
    else:
        logging.error("Failed to generate course in %s", course_dir)
        return None
    return {
        "tdir": tdir,
        "text": tdir,
        "words": count["target_words"],
        "phrases": count["target_phrases"],
        "success": success,
    }


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
        tdir = course["tdir"]
        results = generate_course(
            sdir=os.path.join(tempdir.name, course["sdir"]),
            outdir=outdir,
            tdir=tdir,
            course_dir="course",
        )
        if results:
            links.append(results)
            with open(os.path.join(outdir, tdir, "course.json")) as fh:
                courses_data[tdir] = json.load(fh)

    root = os.path.dirname(
        os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    )

    tdir = "basque-from-english"
    results = generate_course(
        sdir=".",
        outdir=outdir,
        tdir=tdir,
        course_dir=os.path.join(root, "courses", tdir),
    )
    if results:
        links.append(results)
        with open(os.path.join(outdir, tdir, "course.json")) as fh:
            courses_data[tdir] = json.load(fh)
    courses_dir = os.path.join(root, "temporarily_inactive_courses")
    for tdir in os.listdir(courses_dir):
        if tdir == "basque-from-english":
            continue
        results = generate_course(
            sdir=".",
            outdir=outdir,
            tdir=tdir,
            course_dir=os.path.join(courses_dir, tdir),
        )
        if results:
            links.append(results)
            with open(os.path.join(outdir, tdir, "course.json")) as fh:
                courses_data[tdir] = json.load(fh)

    end_time = datetime.datetime.now()
    with open(os.path.join(outdir, "courses.json"), "w") as fh:
        json.dump(courses_data, fh)
    generate_html(start_time, end_time, links, outdir)


if __name__ == "__main__":
    main()
