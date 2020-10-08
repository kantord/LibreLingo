from collections import namedtuple

Course = namedtuple("Course", [
    "language_name",
    "language_code",
    "special_characters",
    "modules",
    "license",
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
    "in_target_langauge",
    "in_source_langauge",
    "pictures"
])

Phrase = namedtuple("Phrase", [
    "in_target_langauge",
    "in_source_langauge",
])
