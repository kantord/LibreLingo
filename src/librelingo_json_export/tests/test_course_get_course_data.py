from librelingo_fakes import fakes
from librelingo_json_export.course import _get_course_data
from librelingo_utils import calculate_number_of_levels

course_with_markdown = fakes.customize(
    fakes.course2,
    modules=[
        fakes.customize(
            fakes.course2.modules[0],
            skills=[
                fakes.customize(
                    fakes.course2.modules[0].skills[0],
                    introduction="# *Hello* (https://example.com)[_world_]!",
                )
            ],
        )
    ],
)


def test__get_course_data_return_value():
    """
    Tests the return value of _get_course_data with the
    fakes.course1 object
    """
    assert _get_course_data(fakes.course1) == {
        "languageName": "my language",
        "languageCode": "de",
        "uiLanguage": "tr",
        "specialCharacters": ["ä", "ß"],
        # pylint: disable=line-too-long
        "repositoryURL": "https://github.com/kantord/LibreLingo/tree/main/courses/spanish-from-english",
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
                        "id": "d7279e4777cd",
                        "levels": 1,
                    },
                    {
                        "title": "Feminine",
                        "practiceHref": "feminine",
                        "imageSet": ["woman1", "woman2", "girl1"],
                        "summary": ["foous", "apfel", "foous", "apfel", "foous barus"],
                        "id": "d7279e4777cd",
                        "levels": 2,
                    },
                    {
                        "title": "Neuter",
                        "summary": [],
                        "practiceHref": "neuter",
                        "imageSet": ["foo1", "bar1", "bar2"],
                        "id": "d7279e4777cd",
                        "levels": 1,
                    },
                ],
            },
            {"title": "Phrases", "skills": []},
        ],
    }


def test__get_course_data_return_value_2():
    """
    Tests the return value of _get_course_data with the
    fakes.course2 object
    """
    assert _get_course_data(fakes.course2) == {
        "languageName": "another language",
        "languageCode": "tr",
        "uiLanguage": "de",
        "specialCharacters": ["ç", "ş"],
        "repositoryURL": "https://github.com/LibreLingo/LibreLingo-ES-from-EN",
        "license": {
            "name": {"short": "lorem", "full": "ipsum lorem license"},
            "link": "https://example.com/lipsum_license",
        },
        "modules": [
            {
                "title": "Animals",
                "skills": [
                    {
                        "id": "d7279e4777cd",
                        "title": "Mammals and birds",
                        "practiceHref": "mammals-and-birds",
                        "summary": ["foous"],
                        "levels": 1,
                    }
                ],
            },
        ],
    }


def test__get_course_data_return_value_with_introduction():
    """
    Tests the return value of _get_course_data with the
    fakes.course2 object

    """
    assert _get_course_data(course_with_markdown) == {
        "languageName": "another language",
        "languageCode": "tr",
        "uiLanguage": "de",
        "specialCharacters": ["ç", "ş"],
        "repositoryURL": "https://github.com/LibreLingo/LibreLingo-ES-from-EN",
        "license": {
            "name": {"short": "lorem", "full": "ipsum lorem license"},
            "link": "https://example.com/lipsum_license",
        },
        "modules": [
            {
                "title": "Animals",
                "skills": [
                    {
                        "id": "d7279e4777cd",
                        "title": "Mammals and birds",
                        "practiceHref": "mammals-and-birds",
                        "summary": ["foous"],
                        "introduction": "mammals-and-birds.md",
                        "levels": 1,
                    }
                ],
            },
        ],
    }


def test_calculate_number_of_levels():
    examples = [
        {"words": 0, "phrases": 0, "result": 1},
        {"words": 10, "phrases": 0, "result": 2},
        {"words": 0, "phrases": 10, "result": 3},
        {"words": 10, "phrases": 10, "result": 4},
    ]

    for example in examples:
        assert (
            calculate_number_of_levels(example["words"], example["phrases"])
            == example["result"]
        )
