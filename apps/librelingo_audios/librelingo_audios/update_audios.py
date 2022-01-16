from pathlib import Path
import subprocess
import json
import random
from typing import Set, Union
from librelingo_audios.functions import list_required_audios
from librelingo_types.data_types import Course, PhraseIdentity
from librelingo_utils import audio_id


def update_audios_for_course(
    output_path: str, course_name: str, course: Course, settings
):
    if not course.settings.audio_settings.enabled:
        return

    index_file_path = Path(Path(output_path) / f"{course_name}.json")

    phrases_with_existing_audios = _load_index_file(index_file_path)

    # We want to go from the old state (the existing audios) to the new state
    # (the phrases now in the course). So we determine which phrases are the
    # same in both, which are new, and which are no longer needed.
    new_phrase_set = {
        _phrase_identity_info_from_text(p[1]) for p in list_required_audios(course)
    }
    old_phrase_set = {
        _phrase_identity_info_from_index(p) for p in phrases_with_existing_audios
    }

    if settings.destructive:
        phrases_to_keep = set()
    else:
        phrases_to_keep = new_phrase_set & old_phrase_set
    phrases_to_fetch = new_phrase_set - phrases_to_keep
    phrases_to_delete = old_phrase_set - phrases_to_keep

    _delete_phrases(
        phrases_to_delete, output_path, phrases_with_existing_audios, settings
    )

    kept_phrases_index_entries = _keep_phrases(
        phrases_to_keep, phrases_with_existing_audios
    )
    fetched_phrases_index_entries = _fetch_phrases(
        phrases_to_fetch, output_path, course, settings
    )
    result_index = kept_phrases_index_entries + fetched_phrases_index_entries

    if not settings.dry_run:
        _save_index(result_index, index_file_path)


def _load_index_file(file_path: Path):
    if not file_path.is_file():
        return []

    with open(file_path, "r") as f:
        return json.loads(f.read())


def _keep_phrases(phrases_to_keep: Union[Set, Set[PhraseIdentity]], existing_index):
    return [
        phrase
        for phrase in existing_index
        if _phrase_identity_info_from_index(phrase) in phrases_to_keep
    ]


def _fetch_phrases(
    phrases: Set[PhraseIdentity], output_path: str, course: Course, settings
):
    return [
        _fetch_audio_for_phrase(phrase_identity, output_path, course, settings)
        for phrase_identity in phrases
    ]


def _fetch_audio_for_phrase(
    phrase_identity: PhraseIdentity, output_path: str, course: Course, settings
):
    file_name = audio_id(course.target_language, phrase_identity.text)
    destination_path = Path(Path(output_path) / f"{file_name}.mp3")

    # This is where more audio sources would be added with an if statement. For
    # now there is only TTS.
    return _generate_audio_with_tts(
        phrase_identity, file_name, destination_path, course, settings
    )


def _generate_audio_with_tts(
    phrase_identity: PhraseIdentity,
    file_name: str,
    destination_path: Path,
    course: Course,
    settings,
):
    tts_settings_list = course.settings.audio_settings.text_to_speech_settings_list
    if tts_settings_list == []:
        raise RuntimeError(
            f"Cannot generate {destination_path} because there are no TTS settings configured"
        )

    chosen_tts_settings = random.choice(tts_settings_list)

    if settings.dry_run:
        print(
            f"Would generate {destination_path} using {chosen_tts_settings.voice} {chosen_tts_settings.engine}"
        )
    else:
        print(
            f"Generating {destination_path} using {chosen_tts_settings.voice} {chosen_tts_settings.engine}"
        )
        # This is where more more TTS providers would be added with an if statement.
        # For now there is only Polly.
        subprocess.run(
            [
                "aws",
                "polly",
                "synthesize-speech",
                "--output-format",
                "mp3",
                "--voice-id",
                chosen_tts_settings.voice,
                "--engine",
                chosen_tts_settings.engine,
                "--text",
                phrase_identity.text,
                destination_path,
            ],
            stdout=subprocess.DEVNULL,
        )

    return {
        "id": file_name,
        "text": phrase_identity.text,
        "source": "TTS",
        "license": course.license.full_name,
        "ttsProvider": "Polly",
        "ttsVoice": chosen_tts_settings.voice,
        "ttsEngine": chosen_tts_settings.engine,
    }


def _delete_phrases(
    phrases: Set[PhraseIdentity], output_path: str, existing_index, settings
):
    for phrase_index in existing_index:
        if _phrase_identity_info_from_index(phrase_index) in phrases:
            _delete_audio_for_phrase(phrase_index, output_path, settings)


def _delete_audio_for_phrase(index_entry, output_path: str, settings):
    target_path = Path(Path(output_path) / f"{index_entry['id']}.mp3")

    if not target_path.is_file():
        # It's already not there, for whatever reason
        return

    if settings.dry_run:
        print("Would delete {target_path}")
    else:
        print(f"Deleting {target_path}")
        target_path.unlink()


def _save_index(result_index: list, index_file_path: Path):
    with open(index_file_path, "w", encoding="utf-8") as f:
        json.dump(
            sorted(result_index, key=lambda i: i["id"]), f, ensure_ascii=False, indent=4
        )


def _phrase_identity_info_from_text(text):
    return PhraseIdentity(text, "TTS")


def _phrase_identity_info_from_index(phrase_index_entry):
    return PhraseIdentity(phrase_index_entry["text"], phrase_index_entry["source"])
