import re
import subprocess
import inspect
import json
from types import SimpleNamespace

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


@pytest.fixture
def mock_index_entry():
    return lambda text: {
        "id": _mock_hash_for_text(text),
        "text": text,
        "source": "TTS",
        "license": "foo bar license",
        "ttsProvider": "Polly",
        "ttsVoice": "Lupe",
        "ttsEngine": "standard",
    }


@pytest.fixture
def terminal_message(tmp_path):
    return SimpleNamespace(
        **{
            "generating": lambda text: f"Generating {tmp_path / _mock_audio_file_for_text(text)} using Lupe standard",
            "would_generate": lambda text: f"Would generate {tmp_path / _mock_audio_file_for_text(text)} using Lupe standard",
            "deleting": lambda text: f"Deleting {tmp_path / _mock_audio_file_for_text(text)}",
        }
    )


def test_dry_run_does_nothing(tmp_path, capsys, terminal_message):
    update_audios_for_course(
        tmp_path, "test", course, cli.Settings(dry_run=True, destructive=False)
    )
    assert len(list(tmp_path.iterdir())) == 0
    captured = capsys.readouterr()
    _assert_output_lines(
        [
            terminal_message.would_generate("lorem ipsum"),
            terminal_message.would_generate("foous barus"),
            terminal_message.would_generate("apfel"),
            terminal_message.would_generate("foous"),
        ],
        captured.out,
    )


def test_dry_run_does_nothing_with_destructive(tmp_path, capsys, terminal_message):
    update_audios_for_course(
        tmp_path, "test", course, cli.Settings(dry_run=True, destructive=True)
    )
    assert len(list(tmp_path.iterdir())) == 0
    captured = capsys.readouterr()
    _assert_output_lines(
        [
            terminal_message.would_generate("lorem ipsum"),
            terminal_message.would_generate("foous barus"),
            terminal_message.would_generate("apfel"),
            terminal_message.would_generate("foous"),
        ],
        captured.out,
    )


@pytest.fixture
def aws_cli(mocker, tmp_path):
    subprocess_run = mocker.patch("subprocess.run")

    def assert_call_count(count):
        assert subprocess_run.call_count == count

    def assert_audio_generated_for(text):
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
                text,
                tmp_path / _mock_audio_file_for_text(text),
            ],
            stdout=subprocess.DEVNULL,
        )

    return SimpleNamespace(
        **{
            "assert_call_count": assert_call_count,
            "assert_audio_generated_for": assert_audio_generated_for,
        }
    )


def test_generate_from_scratch(
    aws_cli, tmp_path, capsys, terminal_message, mock_index_entry
):
    update_audios_for_course(
        tmp_path, "test", course, cli.Settings(dry_run=False, destructive=False)
    )
    assert list(tmp_path.iterdir()) == [tmp_path / "test.json"]
    captured = capsys.readouterr()
    _assert_output_lines(
        [
            terminal_message.generating("lorem ipsum"),
            terminal_message.generating("foous barus"),
            terminal_message.generating("apfel"),
            terminal_message.generating("foous"),
        ],
        captured.out,
    )
    aws_cli.assert_call_count(4)
    aws_cli.assert_audio_generated_for("foous barus")
    aws_cli.assert_audio_generated_for("lorem ipsum")

    assert _load_json_file(tmp_path / "test.json") == [
        mock_index_entry("foous barus"),
        mock_index_entry("foous"),
        mock_index_entry("lorem ipsum"),
        mock_index_entry("apfel"),
    ]


def test_generate_from_scratch_with_destructive(
    aws_cli,
    tmp_path,
    capsys,
    terminal_message,
    mock_index_entry,
):
    update_audios_for_course(
        tmp_path, "test", course, cli.Settings(dry_run=False, destructive=True)
    )
    assert list(tmp_path.iterdir()) == [tmp_path / "test.json"]
    captured = capsys.readouterr()
    _assert_output_lines(
        [
            terminal_message.generating("lorem ipsum"),
            terminal_message.generating("foous barus"),
            terminal_message.generating("apfel"),
            terminal_message.generating("foous"),
        ],
        captured.out,
    )
    aws_cli.assert_call_count == 4
    aws_cli.assert_audio_generated_for("foous barus")
    aws_cli.assert_audio_generated_for("lorem ipsum")
    aws_cli.assert_audio_generated_for("apfel")
    aws_cli.assert_audio_generated_for("foous")

    assert _load_json_file(tmp_path / "test.json") == [
        mock_index_entry("foous barus"),
        mock_index_entry("foous"),
        mock_index_entry("lorem ipsum"),
        mock_index_entry("apfel"),
    ]


def test_noop_update(aws_cli, tmp_path, capsys, mock_index_entry):
    _write_json_file(
        tmp_path / "test.json",
        [
            mock_index_entry("foous barus"),
            mock_index_entry("foous"),
            mock_index_entry("lorem ipsum"),
            mock_index_entry("apfel"),
        ],
    )
    update_audios_for_course(
        tmp_path, "test", course, cli.Settings(dry_run=False, destructive=False)
    )
    assert list(tmp_path.iterdir()) == [tmp_path / "test.json"]
    captured = capsys.readouterr()
    assert captured.out == ""
    aws_cli.assert_call_count(0)
    assert _load_json_file(tmp_path / "test.json") == [
        mock_index_entry("foous barus"),
        mock_index_entry("foous"),
        mock_index_entry("lorem ipsum"),
        mock_index_entry("apfel"),
    ]


def test_overwrite_with_destructive(
    aws_cli, tmp_path, capsys, terminal_message, mock_index_entry
):
    _write_json_file(
        tmp_path / "test.json",
        [
            mock_index_entry("foous barus"),
            mock_index_entry("lorem ipsum"),
        ],
    )
    update_audios_for_course(
        tmp_path, "test", course, cli.Settings(dry_run=False, destructive=True)
    )
    assert list(tmp_path.iterdir()) == [tmp_path / "test.json"]
    captured = capsys.readouterr()
    _assert_output_lines(
        [
            terminal_message.generating("lorem ipsum"),
            terminal_message.generating("foous barus"),
            terminal_message.generating("apfel"),
            terminal_message.generating("foous"),
        ],
        captured.out,
    )
    aws_cli.assert_call_count == 4
    aws_cli.assert_audio_generated_for("foous barus")
    aws_cli.assert_audio_generated_for("lorem ipsum")
    aws_cli.assert_audio_generated_for("apfel")
    aws_cli.assert_audio_generated_for("foous")

    assert _load_json_file(tmp_path / "test.json") == [
        mock_index_entry("foous barus"),
        mock_index_entry("foous"),
        mock_index_entry("lorem ipsum"),
        mock_index_entry("apfel"),
    ]


def test_partial_update(aws_cli, tmp_path, capsys, terminal_message, mock_index_entry):
    _write_json_file(
        tmp_path / "test.json",
        [
            mock_index_entry("foous barus"),
        ],
    )
    update_audios_for_course(
        tmp_path, "test", course, cli.Settings(dry_run=False, destructive=False)
    )
    assert list(tmp_path.iterdir()) == [tmp_path / "test.json"]
    captured = capsys.readouterr()
    _assert_output_lines(
        [
            terminal_message.generating("lorem ipsum"),
            terminal_message.generating("apfel"),
            terminal_message.generating("foous"),
        ],
        captured.out,
    )
    aws_cli.assert_call_count == 3
    aws_cli.assert_audio_generated_for("lorem ipsum")

    assert _load_json_file(tmp_path / "test.json") == [
        mock_index_entry("foous barus"),
        mock_index_entry("foous"),
        mock_index_entry("lorem ipsum"),
        mock_index_entry("apfel"),
    ]


def test_partial_update_with_deletion(
    aws_cli, tmp_path, capsys, terminal_message, mock_index_entry
):
    _write_json_file(
        tmp_path / "test.json",
        [
            mock_index_entry("foous barus"),
            mock_index_entry("an unnecessary phrase"),
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
            terminal_message.deleting("an unnecessary phrase"),
            terminal_message.generating("lorem ipsum"),
            terminal_message.generating("apfel"),
            terminal_message.generating("foous"),
        ],
        captured.out,
    )
    aws_cli.assert_call_count == 3
    aws_cli.assert_audio_generated_for("lorem ipsum")

    assert _load_json_file(tmp_path / "test.json") == [
        mock_index_entry("foous barus"),
        mock_index_entry("foous"),
        mock_index_entry("lorem ipsum"),
        mock_index_entry("apfel"),
    ]


def test_overwrite_with_deletion(
    aws_cli, tmp_path, capsys, terminal_message, mock_index_entry
):
    _write_json_file(
        tmp_path / "test.json",
        [
            mock_index_entry("foous barus"),
            mock_index_entry("an unnecessary phrase"),
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
            terminal_message.deleting("an unnecessary phrase"),
            terminal_message.generating("foous barus"),
            terminal_message.generating("lorem ipsum"),
            terminal_message.generating("apfel"),
            terminal_message.generating("foous"),
        ],
        captured.out,
    )
    aws_cli.assert_call_count == 4
    aws_cli.assert_audio_generated_for("foous barus")
    aws_cli.assert_audio_generated_for("lorem ipsum")

    assert _load_json_file(tmp_path / "test.json") == [
        mock_index_entry("foous barus"),
        mock_index_entry("foous"),
        mock_index_entry("lorem ipsum"),
        mock_index_entry("apfel"),
    ]


def test_delete_all(aws_cli, tmp_path, capsys, terminal_message, mock_index_entry):
    _write_json_file(
        tmp_path / "test.json",
        [
            mock_index_entry("foous barus"),
            mock_index_entry("an unnecessary phrase"),
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
            terminal_message.deleting("an unnecessary phrase"),
            terminal_message.deleting("foous barus"),
        ],
        captured.out,
    )
    aws_cli.assert_call_count == 0
    assert _load_json_file(tmp_path / "test.json") == []


def test_delete_all_with_destructive(
    aws_cli, tmp_path, capsys, terminal_message, mock_index_entry
):
    _write_json_file(
        tmp_path / "test.json",
        [
            mock_index_entry("foous barus"),
            mock_index_entry("an unnecessary phrase"),
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
            terminal_message.deleting("an unnecessary phrase"),
            terminal_message.deleting("foous barus"),
        ],
        captured.out,
    )
    aws_cli.assert_call_count == 0
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
