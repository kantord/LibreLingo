import re
import subprocess
import inspect
import json

import pytest

from unittest.mock import patch

from librelingo_fakes import fakes
from librelingo_types import Settings, AudioSettings, TextToSpeechSettings

from librelingo_audios.update_audios import update_audios_for_course
import librelingo_audios.cli as cli

course = fakes.customize(
    fakes.course1,
    settings=Settings(
        audio_settings=AudioSettings(
            enabled=True, text_to_speech_settings_list=[TextToSpeechSettings()]
        )
    ),
)

empty_course = fakes.customize(
    fakes.courseEmpty,
    settings=Settings(
        audio_settings=AudioSettings(
            enabled=True, text_to_speech_settings_list=[TextToSpeechSettings()]
        )
    ),
)


def _mock_hash_for_text(text):
    if text == "lorem ipsum":
        return "7dc37637ce2395ed74d4f6ae0f63e0885536356c8910914d3af8afe05694cab2"

    if text == "foous barus":
        return "0804b0ba52a7fa507998b7f18d6514876195f12dab6cbe7876b924524a1583f6"

    if text == "apfel":
        return "f38b5ac2a5e36c336eed306d56ed517bfd78a728321be0b87db5def8ff8abc3d"

    if text == "foous":
        return "3f981d854531e9f376ae06cb8449a6e997972d3c1b598f9a00b481ef307a469d"

    if text == "an unnecessary phrase":
        return "oldid"

    raise RuntimeError(f"Missing hash mock for '{text}'")


def _mock_audio_file_for_text(text):
    return f"{_mock_hash_for_text(text)}.mp3"


def _mock_meta_data_entry_for_text(text):
    return {
        "id": _mock_hash_for_text(text),
        "text": text,
        "source": "TTS",
        "license": "foo bar license",
        "ttsProvider": "Polly",
        "ttsVoice": "Lupe",
        "ttsEngine": "standard",
    }


@pytest.fixture
def messages(tmp_path):
    return {
        "generating": lambda text: f"Generating {tmp_path / _mock_audio_file_for_text(text)} using Lupe standard",
        "would generate": lambda text: f"Would generate {tmp_path / _mock_audio_file_for_text(text)} using Lupe standard",
        "deleting": lambda text: f"Deleting {tmp_path / _mock_audio_file_for_text(text)}",
    }


def test_dry_run_does_nothing(tmp_path, capsys, messages):
    update_audios_for_course(
        tmp_path, "test", course, cli.Settings(dry_run=True, destructive=False)
    )
    assert len(list(tmp_path.iterdir())) == 0
    captured = capsys.readouterr()
    _assert_output_lines(
        [
            messages["would generate"]("lorem ipsum"),
            messages["would generate"]("foous barus"),
            messages["would generate"]("apfel"),
            messages["would generate"]("foous"),
        ],
        captured.out,
    )


def test_dry_run_does_nothing_with_destructive(tmp_path, capsys, messages):
    update_audios_for_course(
        tmp_path, "test", course, cli.Settings(dry_run=True, destructive=True)
    )
    assert len(list(tmp_path.iterdir())) == 0
    captured = capsys.readouterr()
    _assert_output_lines(
        [
            messages["would generate"]("lorem ipsum"),
            messages["would generate"]("foous barus"),
            messages["would generate"]("apfel"),
            messages["would generate"]("foous"),
        ],
        captured.out,
    )


@patch("subprocess.run")
def test_generate_from_scratch(subprocess_run, tmp_path, capsys, messages):
    update_audios_for_course(
        tmp_path, "test", course, cli.Settings(dry_run=False, destructive=False)
    )
    assert list(tmp_path.iterdir()) == [tmp_path / "test.json"]
    captured = capsys.readouterr()
    _assert_output_lines(
        [
            messages["generating"]("lorem ipsum"),
            messages["generating"]("foous barus"),
            messages["generating"]("apfel"),
            messages["generating"]("foous"),
        ],
        captured.out,
    )
    assert subprocess_run.call_count == 4
    subprocess_run.assert_any_call(
        [
            "aws",
            "polly",
            "synthesize-speech",
            "--output-format",
            "mp3",
            "--voice-id",
            "Lupe",
            "--engine",
            "standard",
            "--text",
            "foous barus",
            tmp_path / _mock_audio_file_for_text("foous barus"),
        ],
        stdout=subprocess.DEVNULL,
    )
    subprocess_run.assert_any_call(
        [
            "aws",
            "polly",
            "synthesize-speech",
            "--output-format",
            "mp3",
            "--voice-id",
            "Lupe",
            "--engine",
            "standard",
            "--text",
            "lorem ipsum",
            tmp_path / _mock_audio_file_for_text("lorem ipsum"),
        ],
        stdout=subprocess.DEVNULL,
    )
    assert _load_json_file(tmp_path / "test.json") == [
        _mock_meta_data_entry_for_text("foous barus"),
        _mock_meta_data_entry_for_text("foous"),
        _mock_meta_data_entry_for_text("lorem ipsum"),
        _mock_meta_data_entry_for_text("apfel"),
    ]


@patch("subprocess.run")
def test_generate_from_scratch_with_destructive(
    subprocess_run, tmp_path, capsys, messages
):
    update_audios_for_course(
        tmp_path, "test", course, cli.Settings(dry_run=False, destructive=True)
    )
    assert list(tmp_path.iterdir()) == [tmp_path / "test.json"]
    captured = capsys.readouterr()
    _assert_output_lines(
        [
            messages["generating"]("lorem ipsum"),
            messages["generating"]("foous barus"),
            messages["generating"]("apfel"),
            messages["generating"]("foous"),
        ],
        captured.out,
    )
    assert subprocess_run.call_count == 4
    subprocess_run.assert_any_call(
        [
            "aws",
            "polly",
            "synthesize-speech",
            "--output-format",
            "mp3",
            "--voice-id",
            "Lupe",
            "--engine",
            "standard",
            "--text",
            "foous barus",
            tmp_path / _mock_audio_file_for_text("foous barus"),
        ],
        stdout=subprocess.DEVNULL,
    )
    subprocess_run.assert_any_call(
        [
            "aws",
            "polly",
            "synthesize-speech",
            "--output-format",
            "mp3",
            "--voice-id",
            "Lupe",
            "--engine",
            "standard",
            "--text",
            "lorem ipsum",
            tmp_path / _mock_audio_file_for_text("lorem ipsum"),
        ],
        stdout=subprocess.DEVNULL,
    )
    assert _load_json_file(tmp_path / "test.json") == [
        _mock_meta_data_entry_for_text("foous barus"),
        _mock_meta_data_entry_for_text("foous"),
        _mock_meta_data_entry_for_text("lorem ipsum"),
        _mock_meta_data_entry_for_text("apfel"),
    ]


@patch("subprocess.run")
def test_noop_update(subprocess_run, tmp_path, capsys):
    _write_json_file(
        tmp_path / "test.json",
        [
            _mock_meta_data_entry_for_text("foous barus"),
            _mock_meta_data_entry_for_text("foous"),
            _mock_meta_data_entry_for_text("lorem ipsum"),
            _mock_meta_data_entry_for_text("apfel"),
        ],
    )
    update_audios_for_course(
        tmp_path, "test", course, cli.Settings(dry_run=False, destructive=False)
    )
    assert list(tmp_path.iterdir()) == [tmp_path / "test.json"]
    captured = capsys.readouterr()
    assert captured.out == ""
    assert subprocess_run.call_count == 0
    assert _load_json_file(tmp_path / "test.json") == [
        _mock_meta_data_entry_for_text("foous barus"),
        _mock_meta_data_entry_for_text("foous"),
        _mock_meta_data_entry_for_text("lorem ipsum"),
        _mock_meta_data_entry_for_text("apfel"),
    ]


@patch("subprocess.run")
def test_overwrite_with_destructive(subprocess_run, tmp_path, capsys, messages):
    _write_json_file(
        tmp_path / "test.json",
        [
            _mock_meta_data_entry_for_text("foous barus"),
            _mock_meta_data_entry_for_text("lorem ipsum"),
        ],
    )
    update_audios_for_course(
        tmp_path, "test", course, cli.Settings(dry_run=False, destructive=True)
    )
    assert list(tmp_path.iterdir()) == [tmp_path / "test.json"]
    captured = capsys.readouterr()
    _assert_output_lines(
        [
            messages["generating"]("lorem ipsum"),
            messages["generating"]("foous barus"),
            messages["generating"]("apfel"),
            messages["generating"]("foous"),
        ],
        captured.out,
    )
    assert subprocess_run.call_count == 4
    subprocess_run.assert_any_call(
        [
            "aws",
            "polly",
            "synthesize-speech",
            "--output-format",
            "mp3",
            "--voice-id",
            "Lupe",
            "--engine",
            "standard",
            "--text",
            "foous barus",
            tmp_path / _mock_audio_file_for_text("foous barus"),
        ],
        stdout=subprocess.DEVNULL,
    )
    subprocess_run.assert_any_call(
        [
            "aws",
            "polly",
            "synthesize-speech",
            "--output-format",
            "mp3",
            "--voice-id",
            "Lupe",
            "--engine",
            "standard",
            "--text",
            "lorem ipsum",
            tmp_path / _mock_audio_file_for_text("lorem ipsum"),
        ],
        stdout=subprocess.DEVNULL,
    )
    assert _load_json_file(tmp_path / "test.json") == [
        _mock_meta_data_entry_for_text("foous barus"),
        _mock_meta_data_entry_for_text("foous"),
        _mock_meta_data_entry_for_text("lorem ipsum"),
        _mock_meta_data_entry_for_text("apfel"),
    ]


@patch("subprocess.run")
def test_partial_update(subprocess_run, tmp_path, capsys, messages):
    _write_json_file(
        tmp_path / "test.json",
        [
            _mock_meta_data_entry_for_text("foous barus"),
        ],
    )
    update_audios_for_course(
        tmp_path, "test", course, cli.Settings(dry_run=False, destructive=False)
    )
    assert list(tmp_path.iterdir()) == [tmp_path / "test.json"]
    captured = capsys.readouterr()
    _assert_output_lines(
        [
            messages["generating"]("lorem ipsum"),
            messages["generating"]("apfel"),
            messages["generating"]("foous"),
        ],
        captured.out,
    )
    assert subprocess_run.call_count == 3
    subprocess_run.assert_any_call(
        [
            "aws",
            "polly",
            "synthesize-speech",
            "--output-format",
            "mp3",
            "--voice-id",
            "Lupe",
            "--engine",
            "standard",
            "--text",
            "lorem ipsum",
            tmp_path / _mock_audio_file_for_text("lorem ipsum"),
        ],
        stdout=subprocess.DEVNULL,
    )
    assert _load_json_file(tmp_path / "test.json") == [
        _mock_meta_data_entry_for_text("foous barus"),
        _mock_meta_data_entry_for_text("foous"),
        _mock_meta_data_entry_for_text("lorem ipsum"),
        _mock_meta_data_entry_for_text("apfel"),
    ]


@patch("subprocess.run")
def test_partial_update_with_deletion(subprocess_run, tmp_path, capsys, messages):
    _write_json_file(
        tmp_path / "test.json",
        [
            _mock_meta_data_entry_for_text("foous barus"),
            _mock_meta_data_entry_for_text("an unnecessary phrase"),
        ],
    )
    _write_dummy_audio_file(tmp_path / "oldid.mp3")
    update_audios_for_course(
        tmp_path, "test", course, cli.Settings(dry_run=False, destructive=False)
    )
    assert list(tmp_path.iterdir()) == [tmp_path / "test.json"]
    captured = capsys.readouterr()
    _assert_output_lines(
        [
            messages["deleting"]("an unnecessary phrase"),
            messages["generating"]("lorem ipsum"),
            messages["generating"]("apfel"),
            messages["generating"]("foous"),
        ],
        captured.out,
    )
    assert subprocess_run.call_count == 3
    subprocess_run.assert_any_call(
        [
            "aws",
            "polly",
            "synthesize-speech",
            "--output-format",
            "mp3",
            "--voice-id",
            "Lupe",
            "--engine",
            "standard",
            "--text",
            "lorem ipsum",
            tmp_path / _mock_audio_file_for_text("lorem ipsum"),
        ],
        stdout=subprocess.DEVNULL,
    )
    assert _load_json_file(tmp_path / "test.json") == [
        _mock_meta_data_entry_for_text("foous barus"),
        _mock_meta_data_entry_for_text("foous"),
        _mock_meta_data_entry_for_text("lorem ipsum"),
        _mock_meta_data_entry_for_text("apfel"),
    ]


@patch("subprocess.run")
def test_overwrite_with_deletion(subprocess_run, tmp_path, capsys, messages):
    _write_json_file(
        tmp_path / "test.json",
        [
            _mock_meta_data_entry_for_text("foous barus"),
            _mock_meta_data_entry_for_text("an unnecessary phrase"),
        ],
    )
    _write_dummy_audio_file(tmp_path / "oldid.mp3")
    update_audios_for_course(
        tmp_path, "test", course, cli.Settings(dry_run=False, destructive=True)
    )
    assert list(tmp_path.iterdir()) == [tmp_path / "test.json"]
    captured = capsys.readouterr()
    _assert_output_lines(
        [
            messages["deleting"]("an unnecessary phrase"),
            messages["generating"]("foous barus"),
            messages["generating"]("lorem ipsum"),
            messages["generating"]("apfel"),
            messages["generating"]("foous"),
        ],
        captured.out,
    )
    assert subprocess_run.call_count == 4
    subprocess_run.assert_any_call(
        [
            "aws",
            "polly",
            "synthesize-speech",
            "--output-format",
            "mp3",
            "--voice-id",
            "Lupe",
            "--engine",
            "standard",
            "--text",
            "foous barus",
            tmp_path / _mock_audio_file_for_text("foous barus"),
        ],
        stdout=subprocess.DEVNULL,
    )
    subprocess_run.assert_any_call(
        [
            "aws",
            "polly",
            "synthesize-speech",
            "--output-format",
            "mp3",
            "--voice-id",
            "Lupe",
            "--engine",
            "standard",
            "--text",
            "lorem ipsum",
            tmp_path / _mock_audio_file_for_text("lorem ipsum"),
        ],
        stdout=subprocess.DEVNULL,
    )
    assert _load_json_file(tmp_path / "test.json") == [
        _mock_meta_data_entry_for_text("foous barus"),
        _mock_meta_data_entry_for_text("foous"),
        _mock_meta_data_entry_for_text("lorem ipsum"),
        _mock_meta_data_entry_for_text("apfel"),
    ]


@patch("subprocess.run")
def test_delete_all(subprocess_run, tmp_path, capsys, messages):
    _write_json_file(
        tmp_path / "test.json",
        [
            _mock_meta_data_entry_for_text("foous barus"),
            _mock_meta_data_entry_for_text("an unnecessary phrase"),
        ],
    )
    _write_dummy_audio_file(tmp_path / "oldid.mp3")
    _write_dummy_audio_file(tmp_path / _mock_audio_file_for_text("foous barus"))
    update_audios_for_course(
        tmp_path, "test", empty_course, cli.Settings(dry_run=False, destructive=False)
    )
    assert list(tmp_path.iterdir()) == [tmp_path / "test.json"]
    captured = capsys.readouterr()
    _assert_output_lines(
        [
            messages["deleting"]("an unnecessary phrase"),
            messages["deleting"]("foous barus"),
        ],
        captured.out,
    )
    assert subprocess_run.call_count == 0
    assert _load_json_file(tmp_path / "test.json") == []


@patch("subprocess.run")
def test_delete_all_with_destructive(subprocess_run, tmp_path, capsys, messages):
    _write_json_file(
        tmp_path / "test.json",
        [
            _mock_meta_data_entry_for_text("foous barus"),
            _mock_meta_data_entry_for_text("an unnecessary phrase"),
        ],
    )
    _write_dummy_audio_file(tmp_path / "oldid.mp3")
    _write_dummy_audio_file(tmp_path / _mock_audio_file_for_text("foous barus"))
    update_audios_for_course(
        tmp_path, "test", empty_course, cli.Settings(dry_run=False, destructive=True)
    )
    assert list(tmp_path.iterdir()) == [tmp_path / "test.json"]
    captured = capsys.readouterr()
    _assert_output_lines(
        [
            messages["deleting"]("an unnecessary phrase"),
            messages["deleting"]("foous barus"),
        ],
        captured.out,
    )
    assert subprocess_run.call_count == 0
    assert _load_json_file(tmp_path / "test.json") == []


def _write_dummy_audio_file(file_path):
    with open(file_path, "w") as f:
        f.write("this is a fake audio file")


def _write_json_file(file_path, value):
    with open(file_path, "w", encoding="utf-8") as f:
        json.dump(value, f, ensure_ascii=False, indent=4)


def _load_json_file(file_path):
    with open(file_path, "r") as f:
        return json.loads(f.read())


def _assert_output_lines(lines, text):
    assert set(lines) == set([l for l in text.split("\n") if l != ""])
