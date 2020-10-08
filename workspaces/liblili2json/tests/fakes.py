import random
from collections import namedtuple
from liblili2json import Course
from liblili2json import Module
from liblili2json import Skill
from liblili2json import Phrase
from liblili2json import Word
from liblili2json import License


challenge1 = "challenge1"
challenge2 = "challenge2"
challenge3 = "challenge3"
challenge4 = "challenge4"

phrase1 = Phrase(
    in_target_langauge="foous barus",
    in_source_langauge="foo bar",
)

phrase2 = Phrase(
    in_target_langauge="lorem ipsum",
    in_source_langauge="john smith",
)

word1 = Word(
    in_target_langauge="foous",
    in_source_langauge="foo",
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
    in_target_langauge="apfel",
    in_source_langauge="apple",
    pictures=['1', '2', '3']
)

emptySkill = Skill(
    name="Neuter",
    id=3,
    words=[],
    phrases=[],
    image_set=["foo1", "bar1", "bar2"]
)

skillWithPhrase = Skill(
    name="Masculine",
    id=3,
    phrases=[phrase2],
    words=[],
    image_set=["man1", "man2", "boy1"]
)


skillWithWord = Skill(
    name="Masculine",
    id=3,
    phrases=[],
    words=[word1],
    image_set=["man1", "man2", "boy1"]
)


skillWithPhraseAndWord = Skill(
    name="Masculine",
    id=3,
    phrases=[phrase2],
    words=[word1],
    image_set=["man1", "man2", "boy1"]
)


skillWith3Words = Skill(
    name="Masculine",
    id=3,
    phrases=[],
    words=[word1, word2, word2],
    image_set=["man1", "man2", "boy1"]
)

skillWith3Phrases = Skill(
    name="Masculine",
    id=3,
    phrases=[phrase1, phrase2, phrase2],
    words=[],
    image_set=["man1", "man2", "boy1"]
)

skills = [
    skillWithPhrase,
    Skill(
        name="Feminine",
        id=3,
        words=[word1, word2, word1, word2],
        phrases=[phrase1],
        image_set=["woman1", "woman2", "girl1"]
    ),
    emptySkill,
    Skill(
        name="Mammals and birds",
        id=3,
        words=[word1],
        phrases=[],
        image_set=["just_one_image"]
    )
]

courseEmpty = Course(
    language_name="my language",
    language_code="de",
    special_characters=["ä", "ß"],
    license=license1,
    modules=[]
)


course1 = Course(
    language_name="my language",
    language_code="de",
    special_characters=["ä", "ß"],
    license=license1,
    modules=[
        Module(title="Basics", skills=[
            skills[0],
            skills[1],
            skills[2],
        ]),
        Module(title="Phrases", skills=[]),
    ]
)

course2 = Course(
    language_name="another language",
    language_code="tr",
    special_characters=["ç", "ş"],
    license=license2,
    modules=[
        Module(title="Animals", skills=[
            skills[3]
        ]),
    ]
)


def fake_value():
    FakeValue = namedtuple("FakeValue", ["id"])
    return FakeValue(random.randint(0, 10000))
