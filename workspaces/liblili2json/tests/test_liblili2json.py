from liblili2json import get_course_data


def test_get_course_data_return_value():
    assert get_course_data() == {
        "languageName": "my language",
        "languageCode": "de",
        "specialCharacters": ["ä", "ß"]
    }
