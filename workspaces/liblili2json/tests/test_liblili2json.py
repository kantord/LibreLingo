from liblili2json import get_course_data
from liblili2json import Course
from liblili2json import Module
from liblili2json import Skill
from liblili2json import Phrase
from liblili2json import Word

fakePhrase1 = Phrase(
    in_target_langauge="foous barus",
    in_source_langauge="foo bar",
)

fakePhrase2 = Phrase(
    in_target_langauge="lorem ipsum",
    in_source_langauge="john smith",
)

fakeWord1 = Word(
    in_target_langauge="foous",
    in_source_langauge="foo",
)

fakeWord1 = Word(
    in_target_langauge="foous",
    in_source_langauge="foo",
)

fakeWord1 = Word(
    in_target_langauge="foous",
    in_source_langauge="foo",
)

fakeWord2 = Word(
    in_target_langauge="apfel",
    in_source_langauge="apple",
)

fakeCourse1 = Course(
    language_name="my language",
    language_code="de",
    special_characters=["ä", "ß"],
    modules=[
        Module(title="Basics", skills=[
            Skill(
                name="Masculine",
                id=3,
                phrases=[fakePhrase2],
                words=[],
                image_set=["man1", "man2", "boy1"]
            ),
            Skill(
                name="Feminine",
                id=3,
                words=[fakeWord1, fakeWord2, fakePhrase1],
                phrases=[],
                image_set=["woman1", "woman2", "girl1"]
            ),
            Skill(
                name="Neuter",
                id=3,
                words=[],
                phrases=[],
                image_set=["foo1", "bar1", "bar2"]
            )
        ]),
        Module(title="Phrases", skills=[]),
    ]
)

fakeCourse2 = Course(
    language_name="another language",
    language_code="tr",
    special_characters=["ç", "ş"],
    modules=[
        Module(title="Animals", skills=[
            Skill(
                name="Mammals and birds",
                id=3,
                words=[fakeWord1],
                phrases=[],
                image_set=[]
            )
        ]),
    ]
)


def test_get_course_data_return_value():
    """
    Tests the return value of get_course_data with the
    fakeCourse1 object
    """
    assert get_course_data(fakeCourse1) == {
        "languageName": "my language",
        "languageCode": "de",
        "specialCharacters": ["ä", "ß"],
        "modules": [
            {
                "title": "Basics",
                "skills": [
                    {
                        "title": "Masculine",
                        "practiceHref": "masculine",
                        "summary": ["lorem ipsum"],
                        "imageSet": ["man1", "man2", "boy1"],
                    },
                    {
                        "title": "Feminine",
                        "practiceHref": "feminine",
                        "imageSet": ["woman1", "woman2", "girl1"],
                        "summary": ["foous", "apfel", "foous barus"]
                    },
                    {
                        "title": "Neuter",
                        "summary": [],
                        "practiceHref": "neuter",
                        "imageSet": ["foo1", "bar1", "bar2"],
                    },
                ]
            },
            {
                "title": "Phrases",
                "skills": []
            }
        ]
    }


def test_get_course_data_return_value_2():
    """
    Tests the return value of get_course_data with the
    fakeCourse2 object
    """
    assert get_course_data(fakeCourse2) == {
        "languageName": "another language",
        "languageCode": "tr",
        "specialCharacters": ["ç", "ş"],
        "modules": [
            {
                "title": "Animals",
                "skills": [
                    {
                        "title": "Mammals and birds",
                        "practiceHref": "mammals-and-birds",
                        "summary": ["foous"]
                    }
                ]
            },
        ]
    }
