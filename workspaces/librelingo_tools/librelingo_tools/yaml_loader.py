import collections
from pathlib import Path
from yaml import load
try:
    from yaml import CLoader as Loader
except ImportError:
    from yaml import Loader

from librelingo_tools.data_types import Course, Language, License, Module, Skill, \
    Word, Phrase, DictionaryItem


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


def get_dictionary_items(modules):
    for module in modules:
        for skill in module.skills:
            for word in skill.words:
                yield word.in_source_language[0], word.in_target_language[0], False
                yield word.in_target_language[0], word.in_source_language[0], True


def merge_dictionary_definitions(items_generator):
    items = collections.defaultdict(set)
    for word, definition, reverse in items_generator:
        items[(word, reverse)].add(
            definition)
    return list(items.items())


def get_merged_dictionary_items(modules):
    return merge_dictionary_definitions(get_dictionary_items(modules))


def load_dictionary(modules):
    items = []
    for key, definition in get_merged_dictionary_items(modules):
        word, reverse = key
        items.append(DictionaryItem(
            word=word,
            definition="\n".join(sorted(definition)),
            reverse=reverse,
        ))
    return items


def alternatives_from_yaml(raw_object, key):
    """
    Returns alternative solutions based on the key, or an empty list if
    there are no alternative solutions specified
    """
    return (raw_object[key]
            if key in raw_object else [])


def solution_from_yaml(raw_object, solution_key, alternatives_key):
    """
    Converts a solution and it's alternatives into a single list, where
    the alternatives are optional
    """
    solution = raw_object[solution_key]
    return [solution, *alternatives_from_yaml(raw_object, alternatives_key)]


def convert_word(raw_word):
    """
    Converts a YAML word definition into a Word() object
    """
    return Word(
        in_target_language=solution_from_yaml(raw_word, "Word", "Synonyms"),
        in_source_language=solution_from_yaml(
            raw_word, "Translation", "Also accepted"),
        pictures=raw_word["Images"] if "Images" in raw_word else None,
    )


def convert_words(raw_words):
    """
    Converts each YAML word definition into Word() objects
    """
    return list(map(convert_word, raw_words))


def convert_phrase(raw_phrase):
    """
    Converts a YAML phrase definition into a Phrase() object
    """
    try:
        return Phrase(
            in_target_language=solution_from_yaml(
                raw_phrase, "Phrase", "Alternative versions"),
            in_source_language=solution_from_yaml(
                raw_phrase, "Translation", "Alternative translations"),
        )
    except KeyError:
        raise RuntimeError('Phrase "{}" needs to have a "Translation".'.format(
            raw_phrase["Phrase"]
        ))


def convert_phrases(raw_phrases):
    """
    Converts each YAML phrase definition into Phrase() objects
    """
    return list(map(convert_phrase, raw_phrases))


def load_skill(path):
    try:
        data = load_yaml(path)
        skill = data["Skill"]
        words = data["New words"]
        phrases = data["Phrases"]
    except TypeError:
        raise RuntimeError(
            'Skill file "{}" is empty or does not exist'.format(path))
    except KeyError as error:
        raise RuntimeError(
            'Skill file "{}" needs to have a "{}" key'.format(path, error.args[0]))

    try:
        name = skill["Name"]
    except Exception:
        raise RuntimeError(
            'Skill file "{}" needs to have skill name'.format(path))

    try:
        skill_id = skill["Id"]
    except Exception:
        raise RuntimeError(
            'Skill file "{}" needs to have skill id'.format(path))

    try:
        phrases = convert_phrases(phrases)
    except TypeError:
        raise RuntimeError(
            'Skill file "{}" has an invalid phrase'.format(path))

    try:
        words = convert_words(words)
    except TypeError:
        raise RuntimeError(
            'Skill file "{}" has an invalid word'.format(path))

    return Skill(
        name=name,
        id=skill_id,
        words=words,
        phrases=phrases,
        image_set=skill["Thumbnails"] if "Thumbnails" in skill else [],
        dictionary=None,
    )


def load_skills(path, skills):
    """
    Load each YAML skill specified in the list
    """
    try:
        return [load_skill(Path(path) / "skills" / skill) for skill in skills]
    except TypeError:
        raise RuntimeError(
            'Module file "{}/module.yaml" needs to have a list of skills'.format(path))


def load_module(path):
    """
    Load a YAML module
    """
    filepath = Path(path) / "module.yaml"
    data = load_yaml(filepath)
    try:
        module = data["Module"]
        skills = data["Skills"]
    except TypeError:
        raise RuntimeError(
            'Module file "{}" is empty or does not exist'.format(filepath))
    except KeyError as error:
        raise RuntimeError(
            'Module file "{}" needs to have a "{}" key'.format(filepath, error.args[0]))

    try:
        title = module["Name"]
    except Exception:
        raise RuntimeError(
            'Module file "{}" needs to have module name'.format(filepath))

    return Module(
        title=title,
        skills=load_skills(path, skills)
    )


def load_modules(path, modules):
    """
    Load each YAML module specifed in the list
    """
    return [load_module(Path(path) / module) for module in modules]


def convert_license(raw_license):
    """
    Creates a License() object based on the data structure
    in the YAML file
    """
    return License(
        name=raw_license["Short name"],
        full_name=raw_license["Name"],
        link=raw_license["Link"],
    )


def load_course(path):
    """
    Load a YAML based course into a Course() object
    """
    data = load_yaml(Path(path) / "course.yaml")
    course = data["Course"]
    raw_modules = data["Modules"]
    modules = load_modules(path, raw_modules)

    return Course(
        target_language=convert_language(course["Language"]),
        source_language=convert_language(course["For speakers of"]),
        license=convert_license(course["License"]),
        dictionary=load_dictionary(modules),
        modules=modules,
        special_characters=course["Special characters"],
    )
