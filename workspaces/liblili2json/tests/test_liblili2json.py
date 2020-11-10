from unittest.mock import patch
from liblili2json import get_course_data
from liblili2json import get_skill_data
from liblili2json import calculate_number_of_levels
from liblili2json import Course
from liblili2json import Module
from liblili2json import Skill
from liblili2json import Phrase
from liblili2json import Word
from liblili2json import License


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

fakeLicense1 = License(
    name="foo",
    full_name="foo bar license",
    link=None
)

fakeLicense2 = License(
    name="lorem",
    full_name="ipsum lorem license",
    link="https://example.com/lipsum_license"
)

fakeWord2 = Word(
    in_target_langauge="apfel",
    in_source_langauge="apple",
)

fakeSkills = [
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
        words=[fakeWord1, fakeWord2, fakeWord1, fakeWord2],
        phrases=[fakePhrase1],
        image_set=["woman1", "woman2", "girl1"]
    ),
    Skill(
        name="Neuter",
        id=3,
        words=[],
        phrases=[],
        image_set=["foo1", "bar1", "bar2"]
    ),
    Skill(
        name="Mammals and birds",
        id=3,
        words=[fakeWord1],
        phrases=[],
        image_set=["just_one_image"]
    )
]
emptyFakeSkill = fakeSkills[2]

fakeCourse1 = Course(
    language_name="my language",
    language_code="de",
    special_characters=["ä", "ß"],
    license=fakeLicense1,
    modules=[
        Module(title="Basics", skills=[
            fakeSkills[0],
            fakeSkills[1],
            fakeSkills[2],
        ]),
        Module(title="Phrases", skills=[]),
    ]
)

fakeCourse2 = Course(
    language_name="another language",
    language_code="tr",
    special_characters=["ç", "ş"],
    license=fakeLicense2,
    modules=[
        Module(title="Animals", skills=[
            fakeSkills[3]
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
        "license": {
            "name": {
                "short": "foo",
                "full": "foo bar license",
            },
            "link": None,
        },
        "modules": [
            {
                "title": "Basics",
                "skills": [
                    {
                        "title": "Masculine",
                        "practiceHref": "masculine",
                        "summary": ["lorem ipsum"],
                        "imageSet": ["man1", "man2", "boy1"],
                        'id': 'd7279e4777cd',
                        "levels": 1,
                    },
                    {
                        "title": "Feminine",
                        "practiceHref": "feminine",
                        "imageSet": ["woman1", "woman2", "girl1"],
                        "summary": ["foous", "apfel",  "foous", "apfel", "foous barus"],
                        'id': 'd7279e4777cd',
                        "levels": 2,
                    },
                    {
                        "title": "Neuter",
                        "summary": [],
                        "practiceHref": "neuter",
                        "imageSet": ["foo1", "bar1", "bar2"],
                        'id': 'd7279e4777cd',
                        "levels": 1,
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
        "license": {
            "name": {
                "short":  "lorem",
                "full": "ipsum lorem license"
            },
            "link":  "https://example.com/lipsum_license",
        },
        "modules": [
            {
                "title": "Animals",
                "skills": [
                    {
                        'id': 'd7279e4777cd',
                        "title": "Mammals and birds",
                        "practiceHref": "mammals-and-birds",
                        "summary": ["foous"],
                        "levels": 1,
                    }
                ]
            },
        ]
    }


def test_calculate_number_of_levels():
    examples = [
        {"words": 0, "phrases": 0, "result": 1},
        {"words": 10, "phrases": 0, "result": 2},
        {"words": 0, "phrases": 10, "result": 3},
        {"words": 10, "phrases": 10, "result": 4},
    ]

    for example in examples:
        assert calculate_number_of_levels(
            example["words"], example["phrases"]) == example["result"]


def test_get_skill_data_empty_skill():
    assert get_skill_data(fakeSkills[0]) == {
        "id": "d7279e4777cd",
        "levels": 1,
        "challenges": []
    }


@patch('liblili2json.calculate_number_of_levels')
def test_get_skill_data_correct_number_of_levels(mock):
    FAKE_NUMBER = "fake number"
    mock.return_value = FAKE_NUMBER
    converted_skill = get_skill_data(emptyFakeSkill)
    assert converted_skill["levels"] == FAKE_NUMBER


@patch('liblili2json.calculate_number_of_levels')
def test_get_skill_data_calculates_levels_correctly(mock):
    converted_skill = get_skill_data(fakeSkills[1])
    mock.assert_called_with(4, 1)


@patch('liblili2json.get_challenges_data')
def test_get_skill_data_correct_challenges(mock):
    FAKE_CHALLENGES = "fake challenges"
    mock.return_value = FAKE_CHALLENGES
    converted_skill = get_skill_data(fakeSkills[1])
    assert converted_skill["challenges"] == FAKE_CHALLENGES


@patch('liblili2json.get_challenges_data')
def test_get_skill_data_formats_challenges_correctly(mock):
    get_skill_data(fakeSkills[1])
    mock.assert_called_with(fakeSkills[1])
