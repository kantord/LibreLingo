"""
This package contains fake data for testing LibreLingo-related packages.

The fake data is returned using the types from [librelingo-types](https://pypi.org/project/librelingo-types/).

## Usage
```python

from librelingo_fakes import fakes

fakes.course1  # This is a Course() object
fakes.course2  # This is another Course() object
fakes.courseEmpty  # This is an empty course
```

For the full list of fakes, use the autocomplete or check out the [this file](https://github.com/kantord/LibreLingo/blob/main/apps/librelingo_fakes/librelingo_fakes/fakes.py).

### Customizing fakes

You can use `fakes.customize` to change some attributes on a fake object.
If you want to change the modules on `fakes.course1`, you'd do it like this:

```python
fake_course = fakes.customize(fakes.course1, modules=[
    fake_module_1, fake_module_2
])
```


"""

from pathlib import Path
import random
from collections import namedtuple
from librelingo_types import Course
from librelingo_types import Module
from librelingo_types import Skill
from librelingo_types import Phrase
from librelingo_types import Word
from librelingo_types import License
from librelingo_types import Language
from librelingo_types import DictionaryItem


challenge1 = "challenge1"
challenge2 = "challenge2"
challenge3 = "challenge3"
challenge4 = "challenge4"

fake_dictionary = [
    DictionaryItem("foo", "barrus", False),
    DictionaryItem("bar", "furrrr", False),
    DictionaryItem("foous", "lipsum", True),
    DictionaryItem("barus", "aaa", True),
    DictionaryItem("apple", "red fruit", False),
    DictionaryItem("john", "red fruit", False),
    DictionaryItem("smith", "red fruit", False),
    DictionaryItem("lorem", "red fruit", True),
    DictionaryItem("ipsum", "red fruit", True),
]

phrase1 = Phrase(
    in_target_language=["foous barus"],
    in_source_language=["foo bar"],
)

phrase2 = Phrase(
    in_target_language=["lorem ipsum"],
    in_source_language=["john smith"],
)

long_phrase = Phrase(
    in_target_language=["foous barus " * 5],
    in_source_language=["foo bar " * 6],
)

phrase_with_alternatives = Phrase(
    in_target_language=["foous barus " * 2] + ["bar baz" * 2],
    in_source_language=["foo bar " * 2] + ["ad o" * 2],
)

word1 = Word(
    in_target_language=["foous"],
    in_source_language=["foo"],
    pictures=['foo', 'bar', 'baz']
)

license1 = License(
    name="foo",
    full_name="foo bar license",
    link=None
)

license2 = License(
    name="lorem",
    full_name="ipsum lorem license",
    link="https://example.com/lipsum_license"
)

word2 = Word(
    in_target_language=["apfel"],
    in_source_language=["apple"],
    pictures=['1', '2', '3']
)

emptySkill = Skill(
    name="Neuter",
    id=3,
    words=[],
    phrases=[],
    image_set=["foo1", "bar1", "bar2"],
    dictionary=fake_dictionary,
    introduction=None,
)

skillWithPhrase = Skill(
    name="Masculine",
    id=3,
    phrases=[phrase2],
    words=[],
    image_set=["man1", "man2", "boy1"],
    dictionary=fake_dictionary,
    introduction=None,
)


skillWithWord = Skill(
    name="Masculine",
    id=3,
    phrases=[],
    words=[word1],
    image_set=["man1", "man2", "boy1"],
    dictionary=fake_dictionary,
    introduction=None,
)


skillWithPhraseAndWord = Skill(
    name="Masculine",
    id=3,
    phrases=[phrase2],
    words=[word1],
    image_set=["man1", "man2", "boy1"],
    dictionary=fake_dictionary,
    introduction=None,
)


skillWith3Words = Skill(
    name="Masculine",
    id=3,
    phrases=[],
    words=[word1, word2, word2],
    image_set=["man1", "man2", "boy1"],
    dictionary=fake_dictionary,
    introduction=None,
)

skillWith3Phrases = Skill(
    name="Masculine",
    id=3,
    phrases=[phrase1, phrase2, phrase2],
    words=[],
    image_set=["man1", "man2", "boy1"],
    dictionary=fake_dictionary,
    introduction=None,
)

skills = [
    skillWithPhrase,
    Skill(
        name="Feminine",
        id=3,
        words=[word1, word2, word1, word2],
        phrases=[phrase1],
        image_set=["woman1", "woman2", "girl1"],
        dictionary=fake_dictionary,
        introduction=None,
    ),
    emptySkill,
    Skill(
        name="Mammals and birds",
        id=3,
        words=[word1],
        phrases=[],
        image_set=["just_one_image"],
        dictionary=fake_dictionary,
        introduction=None,
    )
]

language_1 = Language(
    name="my language",
    code="de",
)


language_2 = Language(
    name="another language",
    code="tr",
)

courseEmpty = Course(
    target_language=language_1,
    source_language=language_2,
    special_characters=["ä", "ß"],
    license=license1,
    modules=[],
    dictionary=fake_dictionary,
    repository_url="https://github.com/kantord/LibreLingo/tree/main/courses/spanish-from-english"
)


course1 = Course(
    target_language=language_1,
    source_language=language_2,
    special_characters=["ä", "ß"],
    license=license1,
    modules=[
        Module(title="Basics", skills=[
            skills[0],
            skills[1],
            skills[2],
        ]),
        Module(title="Phrases", skills=[]),
    ],
    dictionary=fake_dictionary,
    repository_url="https://github.com/kantord/LibreLingo/tree/main/courses/spanish-from-english"
)

course2 = Course(
    target_language=language_2,
    source_language=language_1,
    special_characters=["ç", "ş"],
    license=license2,
    modules=[
        Module(title="Animals", skills=[
            skills[3]
        ]),
    ],
    dictionary=fake_dictionary,
    repository_url="https://github.com/kantord/LibreLingo-Spanish-from-English"
)


def fake_value():
    FakeValue = namedtuple("FakeValue", ["id"])
    return FakeValue(random.randint(0, 10000))


def customize(fake, **kwargs):
    return type(fake)(
        **{
            **(fake._asdict()),
            **kwargs
        },
    )


def path():
    return Path("./path{}".format(random.randint(0, 5000)))
