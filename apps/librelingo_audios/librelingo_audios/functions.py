from librelingo_utils import audio_id

def list_missing_audios(course):
    for module in course.modules:
        for skill in module.skills:
            for phrase in skill.phrases:
                # Returning only the first version because
                # the other versions never need audio.
                text = phrase.in_target_language[0]
                id_ = audio_id(course.target_language, phrase.in_target_language[0])
                yield [id_, text]
