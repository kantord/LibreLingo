def list_missing_audios(course):
    for module in course.modules:
        for skill in module.skills:
            for phrase in skill.phrases:
                yield None
