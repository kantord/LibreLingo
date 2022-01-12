import collections
import pytest

from librelingo_json_export.challenge_types import get_listening_challenge
from librelingo_types import Settings, AudioSettings

from librelingo_fakes import fakes

Example = collections.namedtuple(
    "Example", ["word", "course", "expected_result", "name"]
)


@pytest.mark.parametrize(
    "example",
    [
        Example(
            fakes.word1,
            fakes.course1,
            {
                "id": "ae89bd25c323",
                "type": "listeningExercise",
                "answer": "foous",
                "meaning": "foo",
                "priority": 1,
                "group": "aab69500f014",
                "audio": "3f981d854531e9f376ae06cb8449a6e997972d3c1b598f9a00b481ef307a469d",
            },
            "data_set_1",
        ),
        Example(
            fakes.word2,
            fakes.course1,
            {
                "id": "7de4d5b7f106",
                "type": "listeningExercise",
                "answer": "apfel",
                "meaning": "apple",
                "priority": 1,
                "group": "9dbe235cb2d6",
                "audio": "f38b5ac2a5e36c336eed306d56ed517bfd78a728321be0b87db5def8ff8abc3d",
            },
            "data_set_2",
        ),
        Example(
            fakes.word_with_spaces,
            fakes.course1,
            {
                "id": "cfc902e834ee",
                "type": "listeningExercise",
                "answer": "three word term",
                "meaning": "foo bar baz",
                "priority": 1,
                "group": "e707f76a703d",
                "audio": "c851c784743954d87b3b49b45290318f9681f2854c0472e613d8d70daae05df7",
            },
            "word_with_spaces",
        ),
    ],
    ids=lambda example: example.name,
)
def test_get_listening_challenge(example):
    cur_res = get_listening_challenge(example.word, example.course)[0]
    assert cur_res == example.expected_result


def test_returns_nothing_if_audio_files_are_disabled_in_the_course():
    my_fake_course = fakes.customize(
        fakes.course1,
        settings=Settings(audio_settings=AudioSettings(enabled=False)),
    )
    result = get_listening_challenge(fakes.word2, my_fake_course)
    assert not result
    assert isinstance(result, list)
