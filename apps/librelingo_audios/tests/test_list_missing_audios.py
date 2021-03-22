from librelingo_fakes import fakes

from librelingo_audios.list_missing_audios import list_missing_audios


def test_a_course_with_0_phrases_needs_zero_audios():
    assert len(list(list_missing_audios(fakes.course2))) == 0


def test_a_course_with_2_phrases_needs_2_audios():
    assert len(list(list_missing_audios(fakes.course1))) == 2

