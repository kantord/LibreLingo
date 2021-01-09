from collections import namedtuple

Language = namedtuple("Language", [
    "name",
    "code",
])

Course = namedtuple("Course", [
    "target_language",
    "source_language",
    "special_characters",
    "modules",
    "license",
    "dictionary"
])

License = namedtuple("License", [
    "name",
    "full_name",
    "link",
])

Module = namedtuple("Module", [
    "title",
    "skills",
])

Skill = namedtuple("Skill", [
    "name",
    "id",
    "words",
    "phrases",
    "image_set"
])

Word = namedtuple("Word", [
    "in_target_language",
    "in_source_language",
    "pictures",
])

Phrase = namedtuple("Phrase", [
    "in_target_language",
    "in_source_language",
])

DictionaryItem = namedtuple("DictionaryItem", [
    "word",
    "definition",
    "reverse"
])
