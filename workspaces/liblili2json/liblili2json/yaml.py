from pathlib import Path
from yaml import load
try:
    from yaml import CLoader as Loader
except ImportError:
    from yaml import Loader

from liblili2json.types import Course, Language


def load_yaml(path):
    """Helper function for simply loading a YAML file"""
    with open(path) as f:
        return load(f, Loader=Loader)


def convert_language(raw_language):
    """
    Convert a YAML langauge description into a Language() object
    """
    return Language(
        name=raw_language["Name"],
        code=raw_language["IETF BCP 47"],
    )


def load_dictionary():
    return []


def load_modules():
    return []


def convert_license():
    return []


def load_course(path):
    """
    Load a YAML based course into a Course() object
    """
    data = load_yaml(Path(path) / "course.yaml")
    course = data["Course"]
    modules = data["Modules"]

    return Course(
        target_language=convert_language(course["Language"]),
        source_language=convert_language(course["For speakers of"]),
        license=convert_license(course["License"]),
        dictionary=load_dictionary(path),
        modules=load_modules(path, modules),
        special_characters=course["Special characters"],
    )
