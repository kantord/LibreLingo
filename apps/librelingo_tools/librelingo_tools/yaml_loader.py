import collections
from pathlib import Path
from yaml import load
try:
    from yaml import CLoader as Loader
except ImportError:
    from yaml import Loader

from librelingo_types import Course, Language, License, Module, Skill, \
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


def get_dictionary_items_from_new_words(skill):
    """
    Extract new words in a skill as dictionar items
    """
    for word in skill.words:
        yield word.in_source_language[0], word.in_target_language[0], False
        yield word.in_target_language[0], word.in_source_language[0], True


def get_dictionary_items_from_skill_mini_dictionary(skill):
    """
    Iterate over all dictionary items from the mini-dictionary of a skill
    """
    for dictionary_item in skill.dictionary:
        word, definitions, is_in_target_language = dictionary_item
        for definition in definitions:
            yield word, definition, is_in_target_language


def get_all_skills(modules):
    """
    Iterate over all skills in the supplied list of modules
    """
    for module in modules:
        for skill in module.skills:
            yield skill


def get_dictionary_items(modules):
    """
    Extract all dictionary items from every module in the supplied list
    """
    for skill in get_all_skills(modules):
        for item in get_dictionary_items_from_new_words(skill):
            yield item

        if skill.dictionary is not None:
            for item in get_dictionary_items_from_skill_mini_dictionary(skill):
                yield item


def merge_dictionary_definitions(items_generator):
    """
    Merges dictionary items, meaning that multiple definitions of the same word
    are compressed into one definition that has a multiple meanings listed.
    """
    items = collections.defaultdict(set)
    for word, definition, is_in_target_language in items_generator:
        items[(word, is_in_target_language)].add(
            definition)
    return list(items.items())


def get_merged_dictionary_items(modules):
    """
    Generates merged dictionary items using every skill in every module that is
    passed in the argument.

    Merging dictionary items means that multiple definitions of the same word
    are compressed into one definition that has a multiple meanings listed.
    """
    return merge_dictionary_definitions(get_dictionary_items(modules))


def load_dictionary(modules):
    """
    Generates a dictionary using every skill in every module that is
    passed in the argument
    """
    items = []
    for key, definition in get_merged_dictionary_items(modules):
        word, is_in_target_language = key
        items.append(DictionaryItem(
            word=word,
            definition="\n".join(sorted(definition)),
            is_in_target_language=is_in_target_language,
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


def convert_mini_dictionary(raw_mini_dictionary, course):
    """
    Handles loading the mini-dictionary form the YAML format
    """
    configurations = (
        (course.target_language.name, True),
        (course.source_language.name, False),
    )
    for language_name, is_in_target_language in configurations:
        for item in raw_mini_dictionary[language_name]:
            word = list(item.keys())[0]
            raw_definition = list(item.values())[0]
            definition = raw_definition if type(
                raw_definition) == list else [raw_definition]
            yield (word, tuple(definition), is_in_target_language)


def load_skill(path, course):
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
        dictionary=list(convert_mini_dictionary(
            data["Mini-dictionary"], course))
        if "Mini-dictionary" in data else [],
    )


def load_skills(path, skills, course):
    """
    Load each YAML skill specified in the list
    """
    try:
        return [load_skill(Path(path) / "skills" / skill, course) for skill in skills]
    except TypeError:
        raise RuntimeError(
            'Module file "{}/module.yaml" needs to have a list of skills'.format(path))


def load_module(path, course):
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
        skills=load_skills(path, skills, course)
    )


def load_modules(path, modules, course):
    """
    Load each YAML module specifed in the list
    """
    return [load_module(Path(path) / module, course) for module in modules]


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
    dumb_course = Course(
        target_language=convert_language(course["Language"]),
        source_language=convert_language(course["For speakers of"]),
        license=convert_license(course["License"]),
        special_characters=course["Special characters"],
        dictionary=[],
        modules=[],
    )
    modules = load_modules(path, raw_modules, dumb_course)

    return Course(
        **{
            **dumb_course._asdict(),
            "dictionary": load_dictionary(modules),
            "modules": modules,
        }
    )
