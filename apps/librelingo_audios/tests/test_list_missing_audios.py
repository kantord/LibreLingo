from librelingo_fakes import fakes

from librelingo_audios.functions import list_required_audios


def test_a_course_with_0_phrases_needs_zero_audios():
    assert len(list(list_required_audios(fakes.course2))) == 0


def test_a_course_with_2_phrases_needs_2_audios():
    assert len(list(list_required_audios(fakes.course1))) == 2


def test_result_includes_the_phrase_in_the_target_language():
    result = list(list_required_audios(fakes.course1))
    assert result[0][1] == fakes.course1.modules[0].skills[0].phrases[0].in_target_language[0]


def test_result_includes_the_phrase_in_the_target_language_2():
    result = list(list_required_audios(fakes.course1))
    assert result[1][1] == fakes.course1.modules[0].skills[1].phrases[0].in_target_language[0]


def test_audio_id_is_a_string():
    assert [type(result[0]) for result in list_required_audios(fakes.course1)] == [str, str]


def test_calls_audio_id_to_get_the_id(mocker):
    audio_id = mocker.patch('librelingo_audios.functions.audio_id')
    list(list_required_audios(fakes.course1))
    assert audio_id.call_count == 2


def test_calls_audio_id_with_the_correct_arguments(mocker):
    audio_id = mocker.patch('librelingo_audios.functions.audio_id')
    list(list_required_audios(fakes.course1))
    expected_call_1 = mocker.call(fakes.course1.target_language, fakes.course1.modules[0].skills[0].phrases[0].in_target_language[0])
    expected_call_2 = mocker.call(fakes.course1.target_language, fakes.course1.modules[0].skills[1].phrases[0].in_target_language[0])
    audio_id.assert_has_calls([expected_call_1, expected_call_2])


def test_returns_correct_audio_id_1(mocker):
    audio_id = mocker.patch('librelingo_audios.functions.audio_id')
    audio_id.return_value = "omg"
    assert list(list_required_audios(fakes.course1))[0][0] == "omg"


def test_returns_correct_audio_id_2(mocker):
    audio_id = mocker.patch('librelingo_audios.functions.audio_id')
    audio_id.return_value = "foobar"
    assert list(list_required_audios(fakes.course1))[0][0] == "foobar"
