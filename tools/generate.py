import argparse
import datetime
import json
import requests
import os
import sys
import zipfile
import shutil
import tempfile
from jinja2 import Environment, FileSystemLoader


def get_args():
    parser = argparse.ArgumentParser()
    parser.add_argument('--outdir',        required=True, help='path to output directory')
    parser.add_argument('--courses',       required=True, help='path to courses.json file')
    args = parser.parse_args()
    return args


def generate_html(start_time, end_time, links, outdir):
    root = os.path.dirname(os.path.abspath(__file__))
    templates_dir = os.path.join(root, 'templates')
    env = Environment( loader = FileSystemLoader(templates_dir) )
    template = env.get_template('courses.html')
    html = template.render(start_time=start_time, end_time=end_time, links=links)

    with open(os.path.join(outdir, "index.html"), 'w') as fh:
        fh.write(html)


def download_course(url, tempdir):
    # download zip file
    res = requests.get(url, stream=True)
    filename = os.path.join(tempdir.name, "course.zip")
    if res.status_code == 200:
        with open(filename, 'wb') as fh:
            #res.raw.decode_content
            shutil.copyfileobj(res.raw, fh)

    # unzip
    zf = zipfile.ZipFile(filename)
    zf.extractall(path=tempdir.name)


def generate_course(sdir, outdir, tdir, course_dir):
    lilipy = os.path.join( os.path.dirname(os.path.abspath(__file__)), 'lili.py')
    current_dir = os.getcwd()
    os.chdir(sdir)
    docs_dir = os.path.join(outdir, tdir)
    python = sys.executable
    cmd = f"{python} {lilipy} --course {course_dir} --html {docs_dir}"
    print(cmd)
    success = os.system(cmd) == 0
    os.chdir(current_dir)
    with open(os.path.join(docs_dir, 'stats.json')) as fh:
        count = json.load(fh)
    return { 'tdir': tdir, 'text': tdir, 'words': count["target_words"], 'phrases': count["target_phrases"], 'success': success }


def main():
    args = get_args()
    outdir = os.path.abspath(args.outdir)
    courses_file = args.courses

    tempdir = tempfile.TemporaryDirectory()
    start_time = datetime.datetime.now()
    with open(courses_file) as fh:
        courses = json.load(fh)

    print(tempdir.name)

    if os.path.exists(outdir):
        shutil.rmtree(outdir)
    os.mkdir(outdir)

    links = []

    for course in courses:
        download_course(course['url'], tempdir)
        links.append( generate_course(sdir=os.path.join(tempdir.name, course['sdir']), outdir=outdir, tdir=course['tdir'], course_dir='course') )

    links.append( generate_course(sdir='LibreLingo', outdir=outdir, tdir='basque-from-english', course_dir='courses/basque-from-english') )

    for tdir in os.listdir('LibreLingo/temporarily_inactive_courses/'):
        if tdir == 'basque-from-english':
            continue
        links.append( generate_course(sdir='LibreLingo', outdir=outdir, tdir=tdir, course_dir=f'temporarily_inactive_courses/{tdir}') )

    end_time = datetime.datetime.now()
    generate_html(start_time, end_time, links, outdir)


if __name__ == '__main__':
    main()
