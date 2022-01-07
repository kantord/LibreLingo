from librelingo_json_export.challenge_types import get_listening_challenge
from librelingo_types import Settings, AudioSettings

from librelingo_fakes import fakes


def test_returns_correct_value1():
    challenge = get_listening_challenge(fakes.word1, fakes.course1)[0]
    expected_challenge = {
        "id": "ae89bd25c323",
        "type": "listeningExercise",
        "answer": "foous",
        "meaning": "foo",
        "priority": 1,
        "group": "aab69500f014",
        "audio": "3f981d854531e9f376ae06cb8449a6e997972d3c1b598f9a00b481ef307a469d",
    }
    assert challenge == expected_challenge


def test_returns_correct_value2():
    challenge = get_listening_challenge(fakes.word2, fakes.course1)[0]
    expected_challenge = {
        "id": "7de4d5b7f106",
        "type": "listeningExercise",
        "answer": "apfel",
        "meaning": "apple",
        "priority": 1,
        "group": "9dbe235cb2d6",
        "audio": "f38b5ac2a5e36c336eed306d56ed517bfd78a728321be0b87db5def8ff8abc3d",
    }
    assert challenge == expected_challenge


def test_returns_correct_value_with_spaces():
    challenge = get_listening_challenge(fakes.word_with_spaces, fakes.course1)[0]
    expected_challenge = {
        "id": "cfc902e834ee",
        "type": "listeningExercise",
        "answer": "three word term",
        "meaning": "foo bar baz",
        "priority": 1,
        "group": "e707f76a703d",
        "audio": "c851c784743954d87b3b49b45290318f9681f2854c0472e613d8d70daae05df7",
    }
    assert challenge == expected_challenge


def test_returns_nothing_if_audio_files_are_disabled_in_the_course():
    my_fake_course = fakes.customize(
        fakes.course1,
        settings=Settings(audio_settings=AudioSettings(enabled=False)),
    )
    result = get_listening_challenge(fakes.word2, my_fake_course)
    assert not result
    assert isinstance(result, list)
