from librelingo_types.data_types import HunspellSettings

hunspell = None  # Needed so that hunspell can be mocked


def _validate_word_in_source_language(word, course):
    for variant in word.in_source_language:
        for variant_subword in variant.split():
            if not course.settings.hunspell.source_language.spell(variant_subword):
                raise RuntimeError(
                    f'The {course.source_language.name} word "{variant}" is misspelled.'
                )


def _validate_word_in_target_language(word, course):
    for variant in word.in_target_language:
        for variant_subword in variant.split():
            if not course.settings.hunspell.target_language.spell(variant_subword):
                raise RuntimeError(
                    f'The {course.target_language.name} word "{variant}" is misspelled.'
                )


def _validate_phrase_in_target_language(phrase, course):
    for variant in phrase.in_target_language:
        for variant_subword in variant.split():
            if not course.settings.hunspell.target_language.spell(variant_subword):
                raise RuntimeError(
                    f'The {course.target_language.name} phrase "{variant}" is misspelled.'
                    f'The word "{variant_subword}" is unknown.'
                )


def _validate_phrase_in_source_language(phrase, course):
    for variant in phrase.in_source_language:
        for variant_subword in variant.split():
            if not course.settings.hunspell.source_language.spell(variant_subword):
                raise RuntimeError(
                    f'The {course.source_language.name} phrase "{variant}" is misspelled.'
                    f'The word "{variant_subword}" is unknown.'
                )


def _run_skill_spellcheck(phrases, words, course):
    if not course.settings:
        return

    if not course.settings.hunspell:
        return

    for phrase in phrases:
        if course.settings.hunspell.target_language is not None:
            _validate_phrase_in_target_language(phrase, course)

        if course.settings.hunspell.source_language is not None:
            _validate_phrase_in_source_language(phrase, course)

    for word in words:
        if course.settings.hunspell.source_language is not None:
            _validate_word_in_source_language(word, course)

        if course.settings.hunspell.target_language is not None:
            _validate_word_in_target_language(word, course)


def _convert_hunspell_settings_for_language(raw_language_name):
    language_code = raw_language_name.replace("-", "_")

    # Only import hunspell if actually needed. Still allow mocking it.
    global hunspell
    if not hunspell:
        import hunspell  # type: ignore # pylint: disable=import-error

    return hunspell.HunSpell(
        f"/usr/share/hunspell/{language_code}.dic",
        f"/usr/share/hunspell/{language_code}.aff",
    )


def _convert_hunspell_settings(raw_settings, course):
    if "Hunspell" not in raw_settings:
        return None

    return HunspellSettings(
        source_language=_convert_hunspell_settings_for_language(
            raw_settings["Hunspell"][course.source_language.name]
        ),
        target_language=_convert_hunspell_settings_for_language(
            raw_settings["Hunspell"][course.target_language.name]
        ),
    )
