from liblili2json import get_course_data
from liblili2json import Course
from liblili2json import Module
from liblili2json import Skill

fakeCourse1 = Course(
    language_name="my language",
    language_code="de",
    special_characters=["ä", "ß"],
    modules=[
        Module(title="Basics", skills=[
            Skill(
                name="Masculine",
                id=3,
                words=[],
                phrases=[]
            ),
            Skill(
                name="Feminine",
                id=3,
                words=[],
                phrases=[]
            ),
            Skill(
                name="Neuter",
                id=3,
                words=[],
                phrases=[]
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
                words=[],
                phrases=[]
            )
        ]),
    ]
)


def test_get_course_data_return_value():
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
                    },
                    {
                        "title": "Feminine",
                        "practiceHref": "feminine",
                    },
                    {
                        "title": "Neuter",
                        "practiceHref": "neuter",
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
                        "practiceHref": "mammals-and-birds"
                    }
                ]
            },
        ]
    }
