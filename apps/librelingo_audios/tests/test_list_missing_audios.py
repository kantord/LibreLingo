from librelingo_fakes import fakes

from librelingo_audios.list_missing_audios import list_missing_audios


def test_a_course_with_0_phrases_needs_zero_audios():
    assert len(list(list_missing_audios(fakes.course2))) == 0


def test_a_course_with_2_phrases_needs_2_audios():
    assert len(list(list_missing_audios(fakes.course1))) == 2


def test_result_includes_the_phrase_in_the_target_language():
    result = list(list_missing_audios(fakes.course1))
    assert result[0][1] == fakes.course1.modules[0].skills[0].phrases[0].in_target_language[0]


def test_result_includes_the_phrase_in_the_target_language_2():
    result = list(list_missing_audios(fakes.course1))
    assert result[1][1] == fakes.course1.modules[0].skills[1].phrases[0].in_target_language[0]
