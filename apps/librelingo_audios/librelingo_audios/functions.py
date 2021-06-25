from librelingo_utils import audio_id, iterate_phrases


def list_required_audios(course):
    for phrase in iterate_phrases(course):
        # Returning only the first version because
        # the other versions never need audio.
        text = phrase.in_target_language[0]
        id_ = audio_id(course.target_language, phrase.in_target_language[0])
        yield [id_, text]
