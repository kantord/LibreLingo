from librelingo_types.data_types import Course
from librelingo_utils import audio_id, iterate_phrases
from librelingo_utils.utils import iterate_words


def list_required_audios(course: Course):
    for phrase in iterate_phrases(course):
        # Returning only the first version because
        # the other versions never need audio.
        text = phrase.in_target_language[0]
        id_ = audio_id(course.target_language, phrase.in_target_language[0])
        yield [id_, text]

    for word in iterate_words(course):
        # Returning only the first version because
        # the other versions never need audio.
        text = word.in_target_language[0]
        id_ = audio_id(course.target_language, word.in_target_language[0])
        yield [id_, text]
