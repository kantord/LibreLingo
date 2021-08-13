from librelingo_utils import audio_id, iterate_phrases
from pathlib import Path
import subprocess
import json
import random

def generate_audios_for_course(output_path, course_name, course, settings):
    if not course.settings.audio_settings.enabled:
        return

    index_path = Path(Path(output_path) / "{}.json".format(course_name))

    phrases_in_course = [(_index_dict_for_phrase(p, course), p) for p in iterate_phrases(course)]

    if settings.overwrite:
        # Pretend nothing already exists; recreate everything
        phrase_indices_already_present = []
    else:
        with open(index_path, "r") as f:
            phrase_indices_already_present = json.loads(f.read())["audios"]

    result_index = []

    # For each phrase in the course, if it doesn't exist, generate it.
    for course_phrase_index, course_phrase in phrases_in_course:
        # TODO check for equality along multiple dimensions when there are
        # multiple sources
        existing_matching_index = next((i for i in phrase_indices_already_present if i["id"] == course_phrase_index["id"]), None)

        if existing_matching_index is None:
            _generate_audio_for_phrase(course_phrase, output_path, course, settings)
            result_index.append(course_phrase_index)
        else:
            result_index.append(existing_matching_index)

    # For phrases that already exist as audio, check if they are still needed by
    # the course.
    for index in phrase_indices_already_present:
        matching_course_phrase = next(((i, p) for i, p in phrases_in_course if i["id"] == index["id"]), None)

        if matching_course_phrase is None:
            _delete_audio_for_phrase(course_phrase, output_path, course, settings)

    if not settings.dry_run:
        with open(index_path, "w", encoding="utf-8") as f:
            json.dump({"audios": result_index}, f, ensure_ascii=False, indent=4)

def _generate_audio_for_phrase(phrase, output_path, course, settings):
    tts_settings = random.choice(course.audio_settings.text_to_speech_settings)
    id = audio_id(course.target_language, phrase.in_target_language[0])
    destination_path = Path(Path(output_path) / "{}.mp3".format(id))

    if destination_path.is_file() and not settings.overwrite:
        raise RuntimeError('File {} already exists!'.format(destination_path))

    if settings.dry_run:
        print('Would generate {}'.format(destination_path))
    else:
        print('Generating {}'.format(destination_path))
        subprocess.run([
            "aws", "polly", "synthesize-speech",
            "--output-format", "mp3",
            "--voice-id", tts_settings.voice,
            "--engine", tts_settings.engine,
            "--text", phrase.in_target_language[0],
            destination_path
        ], stdout = subprocess.DEVNULL)

def _delete_audio_for_phrase(phrase, output_path, course, settings):
    id = audio_id(course.target_language, phrase.in_target_language[0])
    target_path = Path(Path(output_path) / "{}.mp3".format(id))

    if not target_path.is_file():
        # It's already not there, for whatever reason
        return

    if settings.dry_run:
        print('Would delete {}'.format(target_path))
    else:
        print('Deleting {}'.format(target_path))
        target_path.unlink()

def _index_dict_for_phrase(phrase, course):
    # TODO add more fields to indicate sources other than TTS
    return {
        "id": audio_id(course.target_language, phrase.in_target_language[0]),
        "text": phrase.in_target_language[0]
    }
