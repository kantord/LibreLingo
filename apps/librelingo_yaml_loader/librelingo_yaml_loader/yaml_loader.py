import collections
import os
import re
from pathlib import Path
from typing import List, Union

import bleach
import html2markdown  # type: ignore
import markdown
from librelingo_types import (
    AudioSettings,
    Course,
    DictionaryItem,
    Language,
    License,
    Module,
    Phrase,
    Settings,
    Skill,
    TextToSpeechSettings,
    Word,
)
from yaml import load, CSafeLoader
from yaml.constructor import SafeConstructor

from ._spelling import _convert_hunspell_settings, _run_skill_spellcheck


def add_bool(self, node):
    return self.construct_scalar(node)


SafeConstructor.add_constructor("tag:yaml.org,2002:bool", add_bool)


def _load_yaml(path: Path):
    """Helper function for reading a YAML file"""
    with open(path) as yaml_file:
        return load(yaml_file, Loader=CSafeLoader)


def _convert_language(raw_language) -> Language:
    """
    Convert a YAML langauge description to a Language() object
    """
    return Language(
        name=raw_language["Name"],
        code=raw_language["IETF BCP 47"],
    )


def _get_dictionary_items_from_new_words(skill: Skill):
    """
    Extract new words in a skill as dictionary items
    """
    for word in skill.words:
        yield word.in_source_language[0], word.in_target_language[0], False
        yield word.in_target_language[0], word.in_source_language[0], True


def _get_dictionary_items_from_skill_mini_dictionary(skill: Skill):
    """
    Iterate over all dictionary items from the mini-dictionary of a skill
    """
    for dictionary_item in skill.dictionary:
        word, definitions, is_in_target_language = dictionary_item
        for definition in definitions:
            yield word, definition, is_in_target_language


def _get_all_skills(modules: List[Module]):
    """
    Iterate over all skills in the supplied list of modules
    """
    for module in modules:
        for skill in module.skills:
            yield skill


def _get_dictionary_items(modules: List[Module]):
    """
    Extract all dictionary items from every module in the supplied list
    """
    for skill in _get_all_skills(modules):
        for item in _get_dictionary_items_from_new_words(skill):
            yield item

        if skill.dictionary is not None:
            for item in _get_dictionary_items_from_skill_mini_dictionary(skill):
                yield item


def _merge_dictionary_definitions(items_generator):
    """
    Merges dictionary items, meaning that multiple definitions of the same word
    are compressed into one definition that has a multiple meanings listed.
    """
    items = collections.defaultdict(set)
    for word, definition, is_in_target_language in items_generator:
        items[(word, is_in_target_language)].add(definition)
    return list(items.items())


def _get_merged_dictionary_items(modules: List[Module]):
    """
    Generates merged dictionary items using every skill in every module that is
    passed in the argument.

    Merging dictionary items means that multiple definitions of the same word
    are compressed into one definition that has a multiple meanings listed.
    """
    return _merge_dictionary_definitions(_get_dictionary_items(modules))


def _load_dictionary(modules: List[Module]) -> list:
    """
    Generates a dictionary using every skill in every module that is
    passed in the argument
    """
    items = []
    for key, definition in _get_merged_dictionary_items(modules):
        word, is_in_target_language = key
        items.append(
            DictionaryItem(
                word=word,
                definition="\n".join(sorted(definition)),
                is_in_target_language=is_in_target_language,
            )
        )
    return items


def _alternatives_from_yaml(raw_object, key: str):
    """
    Returns alternative solutions based on the key, or an empty list if
    there are no alternative solutions specified
    """
    return raw_object[key] if key in raw_object else []


def _solution_from_yaml(raw_object, solution_key: str, alternatives_key: str) -> list:
    """
    Converts a solution and it's alternatives into a single list, where
    the alternatives are optional
    """
    solution = raw_object[solution_key]
    return [solution, *_alternatives_from_yaml(raw_object, alternatives_key)]


def _convert_word(raw_word) -> Word:
    """
    Converts a YAML word definition into a Word() object

    >>> _convert_word(
    ...     {'Images': ["abc"], 'Word': "cat", 'Synonyms': ["kitten"], 'Translation': "gato"}
    ... )
    Word(in_target_language=['cat', 'kitten'], in_source_language=['gato'], pictures=['abc'])
    """
    return Word(
        in_target_language=_solution_from_yaml(raw_word, "Word", "Synonyms"),
        in_source_language=_solution_from_yaml(
            raw_word, "Translation", "Also accepted"
        ),
        pictures=raw_word["Images"] if "Images" in raw_word else None,
    )


# pylint: disable=line-too-long
def _convert_words(raw_words: List[Word]) -> List[Word]:
    """
    Converts each YAML word definition into Word() objects
    >>> _convert_words([
    ...     {
    ...         'Word': "l'homme",
    ...         'Translation': 'the man',
    ...         'Images': ['man1', 'man2', 'man3']
    ...     },
    ...     {
    ...         'Word': 'la femme',
    ...         'Synonyms': ['la dame'],
    ...         'Translation': 'the woman',
    ...         'Also accepted': ['the female']
    ...     }
    ... ])
    [Word(in_target_language=["l'homme"], in_source_language=['the man'], pictures=['man1', 'man2', 'man3']), Word(in_target_language=['la femme', 'la dame'], in_source_language=['the woman', 'the female'], pictures=None)]
    """
    return list(map(_convert_word, raw_words))


# pylint: disable=line-too-long
def _convert_phrase(raw_phrase) -> Phrase:
    """
    Converts a YAML phrase definition into a Phrase() object
    >>> _convert_phrase({
    ...     'Phrase': 'La femme dit bonjour',
    ...     'Alternative versions': ['la femme dit salut'],
    ...     'Translation': 'The woman says hello',
    ...     'Alternative translations': ['The woman says hi']
    ... })
    Phrase(in_target_language=['La femme dit bonjour', 'la femme dit salut'], in_source_language=['The woman says hello', 'The woman says hi'])
    """
    try:
        return Phrase(
            in_target_language=_solution_from_yaml(
                raw_phrase, "Phrase", "Alternative versions"
            ),
            in_source_language=_solution_from_yaml(
                raw_phrase, "Translation", "Alternative translations"
            ),
        )
    except KeyError as key_error:
        raise RuntimeError(
            f'Phrase "{raw_phrase["Phrase"]}" needs to have a "Translation".'
        ) from key_error


def _convert_phrases(raw_phrases) -> List[Phrase]:
    """
    Converts each YAML phrase definition into Phrase() objects
    """
    return list(map(_convert_phrase, raw_phrases))


def _convert_two_way_dictionary(data) -> List[tuple]:
    """
    Handles loading the Two-way-dictionary form the YAML format
    """
    dictionary: List[tuple] = []
    # return dictionary
    if "Two-way-dictionary" not in data:
        return dictionary
    raw_two_way_dictionary = data["Two-way-dictionary"]
    for item in raw_two_way_dictionary:
        source_text = list(item.keys())[0]
        source_word = re.sub(r" *\([^)]*\) *", "", source_text)
        target_text = item[source_text]
        target_word = re.sub(r" *\([^)]*\) *", "", target_text)
        dictionary.append((source_word, ([target_text]), False))
        dictionary.append((target_word, ([source_text]), True))
    return dictionary


def _convert_mini_dictionary(data, course: Course) -> List[tuple]:
    """
    Handles loading the mini-dictionary form the YAML format
    """
    dictionary: List[tuple] = []
    if "Mini-dictionary" not in data:
        return dictionary

    raw_mini_dictionary = data["Mini-dictionary"]
    configurations = (
        (course.target_language.name, True),
        (course.source_language.name, False),
    )
    for language_name, is_in_target_language in configurations:
        for item in raw_mini_dictionary[language_name]:
            word = list(item.keys())[0]
            raw_definition = list(item.values())[0]
            definition = (
                raw_definition if isinstance(raw_definition, list) else [raw_definition]
            )
            dictionary.append((word, tuple(definition), is_in_target_language))
    return dictionary


def _sanitize_markdown(mdtext: str) -> str:
    "Removes unsafe text content from Markdown"
    dirty_html = markdown.markdown(mdtext)
    clean_html = bleach.clean(
        dirty_html,
        strip=True,
        tags=[*bleach.sanitizer.ALLOWED_TAGS, "h1", "h2", "h3", "h4", "h5", "h6"],
    )

    return html2markdown.convert(clean_html)


def _load_introduction(path: str) -> Union[str, None]:
    "Loads the introduction text from a Markdown file"
    if not os.path.exists(path):
        return None

    with open(path) as f:
        return _sanitize_markdown(f.read())


def _load_skill(path: Path, course: Course) -> Skill:
    try:
        data = _load_yaml(path)
        introduction = _load_introduction(str(path).replace(".yaml", ".md"))
        skill = data["Skill"]
        words = data["New words"]
        phrases = data["Phrases"]
    except TypeError as type_error:
        raise RuntimeError(
            f'Skill file "{path}" is empty or does not exist'
        ) from type_error
    except KeyError as error:
        raise RuntimeError(
            f'Skill file "{path}" needs to have a "{error.args[0]}" key'
        ) from error

    try:
        name = skill["Name"]
    except Exception as exception:
        raise RuntimeError(
            f'Skill file "{path}" needs to have skill name'
        ) from exception

    try:
        skill_id = skill["Id"]
    except Exception as exception:
        raise RuntimeError(f'Skill file "{path}" needs to have skill id') from exception

    try:
        phrases = _convert_phrases(phrases)
    except TypeError as type_error:
        raise RuntimeError(f'Skill file "{path}" has an invalid phrase') from type_error

    try:
        words = _convert_words(words)
    except TypeError as type_error:
        raise RuntimeError(f'Skill file "{path}" has an invalid word') from type_error

    _run_skill_spellcheck(phrases, words, course)

    return Skill(
        name=name,
        filename=os.path.relpath(path, start=course.course_dir),
        id=skill_id,
        words=words,
        phrases=phrases,
        image_set=skill["Thumbnails"] if "Thumbnails" in skill else [],
        dictionary=_convert_mini_dictionary(data, course)
        + _convert_two_way_dictionary(data),
        introduction=introduction,
    )


def _load_skills(path: str, skills, course: Course) -> List[Skill]:
    """
    Load each YAML skill specified in the list
    """
    try:
        return [_load_skill(Path(path) / "skills" / skill, course) for skill in skills]
    except TypeError as type_error:
        raise RuntimeError(
            f'Module file "{path}/module.yaml" needs to have a list of skills'
        ) from type_error


def _load_module(path: str, course: Course):
    """
    Load a YAML module
    """
    filepath = Path(path) / "module.yaml"
    data = _load_yaml(filepath)
    try:
        module = data["Module"]
        skills = data["Skills"]
    except TypeError as type_error:
        raise RuntimeError(
            f'Module file "{filepath}" is empty or does not exist'
        ) from type_error
    except KeyError as error:
        raise RuntimeError(
            f'Module file "{filepath}" needs to have a "{error.args[0]}" key'
        ) from error

    try:
        title = module["Name"]
    except Exception as exception:
        raise RuntimeError(
            f'Module file "{filepath}" needs to have module name'
        ) from exception

    return Module(
        title=title,
        filename=os.path.relpath(path, start=course.course_dir),
        skills=_load_skills(path, skills, course),
    )


def _load_modules(path: str, modules, course: Course):
    """
    Load each YAML module specified in the list
    """
    return [_load_module(Path(path) / module, course) for module in modules]


def _convert_license(raw_license):
    """
    Creates a License() object based on the data structure
    in the YAML file
    """
    return License(
        name=raw_license["Short name"],
        full_name=raw_license["Name"],
        link=raw_license["Link"],
    )


def _convert_text_to_speech_settings_list(raw_audio_settings):
    """
    Creates an TextToSpeechSettings() object based on the data structure in the YAML
    file
    """
    if "TTS" not in raw_audio_settings:
        return AudioSettings().text_to_speech_settings_list

    return [
        TextToSpeechSettings(tts["Provider"], tts["Voice"], tts["Engine"])
        for tts in raw_audio_settings["TTS"]
    ]


def _convert_audio_settings(raw_settings):
    """
    Creates an AudioSettings() object based on the data structure in the YAML
    file
    """
    if "Audio" not in raw_settings:
        return AudioSettings()

    raw_audio_settings = raw_settings["Audio"]

    if raw_audio_settings["Enabled"]:
        text_to_speech_settings_list = _convert_text_to_speech_settings_list(
            raw_audio_settings
        )
    else:
        text_to_speech_settings_list = []

    return AudioSettings(
        enabled=raw_audio_settings["Enabled"] == "True",
        text_to_speech_settings_list=text_to_speech_settings_list,
    )


def _convert_settings(data, course: Course):
    if "Settings" not in data:
        return Settings()

    raw_settings = data["Settings"]

    return Settings(
        audio_settings=_convert_audio_settings(raw_settings),
        hunspell=_convert_hunspell_settings(raw_settings, course),
    )


def load_course(path: str):
    """
    Load a YAML-based course into a Course() object
    """
    data = _load_yaml(Path(path) / "course.yaml")
    course = data["Course"]
    raw_modules = data["Modules"]
    dumb_course = Course(
        target_language=_convert_language(course["Language"]),
        source_language=_convert_language(course["For speakers of"]),
        license=_convert_license(course["License"]),
        special_characters=course["Special characters"],
        dictionary=[],
        modules=[],
        settings=None,
        repository_url=course["Repository"],
        course_dir=path,
    )
    dumb_course = Course(
        **{
            **dumb_course._asdict(),
            "settings": _convert_settings(data, dumb_course),
        }
    )
    modules = _load_modules(path, raw_modules, dumb_course)

    return Course(
        **{
            **dumb_course._asdict(),
            "settings": _convert_settings(data, dumb_course),
            "dictionary": _load_dictionary(modules),
            "modules": modules,
        }
    )
