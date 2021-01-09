from .utils import get_dumb_opaque_id, audio_id, clean_word
from .dictionary import define_words_in_sentence


def get_listening_challenge(source, course):
    return {
        "type": "listeningExercise",
        "answer": source.in_target_language[0],
        "meaning": source.in_source_language[0],
        "audio": audio_id(course.target_language.name,
                          source.in_target_language[0]),
        "id": get_dumb_opaque_id("Word", source, "listeningExercise"),
        "priority": 1,
        "group": get_dumb_opaque_id("Group", source),
    }


def get_short_input_challenge(source, course):
    return {
        "type": "shortInput",
        'pictures': source.pictures,
        "formInTargetLanguage": source.in_target_language,
        "phrase": define_words_in_sentence(course, source.in_source_language[0], reverse=False),
        "id": get_dumb_opaque_id("Word", source, "shortInput"),
        "priority": 1,
        "group": get_dumb_opaque_id("Group", source),
    }


def get_cards_challenge(word, _):
    return {
        "type": "cards",
        'pictures': word.pictures,
        "formInTargetLanguage": word.in_target_language[0],
        "meaningInSourceLanguage": word.in_source_language[0],
        "id": get_dumb_opaque_id("Word", word, "cards"),
        "priority": 0,
        "group": get_dumb_opaque_id("Group", word),
    }


def get_options_challenge(phrase, _):
    return {
        "type": "options",
        "formInTargetLanguage": phrase.in_target_language[0],
        "meaningInSourceLanguage": phrase.in_source_language[0],
        "id": get_dumb_opaque_id("Options", phrase, "options"),
        "priority": 0,
        "group": get_dumb_opaque_id("Group", phrase),
    }


def get_chips(phrase):
    return list(map(clean_word, phrase.split()))


def create_chips_challenge_generator(reverse):
    def get_input_texts(phrase):
        return phrase.in_source_language if reverse else phrase.in_target_language

    def get_phrase_texts(phrase):
        return phrase.in_target_language if reverse else phrase.in_source_language

    def get_input_text(phrase):
        return get_input_texts(phrase)[0]

    def get_phrase_text(phrase):
        return get_phrase_texts(phrase)[0]

    def get_chips_challenge(phrase, course):
        return {
            "type": "chips",
            "translatesToSourceLanguage": reverse,
            "phrase": define_words_in_sentence(course, get_phrase_text(phrase), reverse),
            "chips": get_chips(get_input_text(phrase)),
            "solutions": [get_chips(x) for x in get_input_texts(phrase)],
            "formattedSolution": get_input_text(phrase),
            "id": get_dumb_opaque_id("Chips", phrase, "reverse chips" if reverse else "chips"),
            "priority": 2,
            "group": get_dumb_opaque_id("Group", phrase),
        }

    return get_chips_challenge


get_chips_challenge = create_chips_challenge_generator(False)
get_reverse_chips_challenge = create_chips_challenge_generator(True)


def is_long_enough_to_have_chips(phrase):
    if len(phrase.in_source_language[0].split()) < 2:
        return False
    if len(phrase.in_target_language[0].split()) < 2:
        return False
    return True
