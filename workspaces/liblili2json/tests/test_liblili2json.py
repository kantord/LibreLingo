from liblili2json import get_course_data
from liblili2json import Course

fakeCourse1 = Course(
    language_name="my language",
    language_code="de",
    special_characters=["ä", "ß"]
)

fakeCourse2 = Course(
    language_name="another language",
    language_code="tr",
    special_characters=["ç", "ş"]
)


def test_get_course_data_return_value():
    assert get_course_data(fakeCourse1) == {
        "languageName": "my language",
        "languageCode": "de",
        "specialCharacters": ["ä", "ß"]
    }


def test_get_course_data_return_value_2():
    assert get_course_data(fakeCourse2) == {
        "languageName": "another language",
        "languageCode": "tr",
        "specialCharacters": ["ç", "ş"]
    }
