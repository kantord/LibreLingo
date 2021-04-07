from librelingo_utils import audio_id

def _iterate_phrases(course):
    '"Flatten" a course into a sequence of phrases'
    for module in course.modules:
        for skill in module.skills:
            for phrase in skill.phrases:
                yield phrase


def list_required_audios(course):
    for phrase in _iterate_phrases(course):
        # Returning only the first version because
        # the other versions never need audio.
        text = phrase.in_target_language[0]
        id_ = audio_id(course.target_language, phrase.in_target_language[0])
        yield [id_, text]
