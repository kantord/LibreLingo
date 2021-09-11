import re
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


def test_generate_from_scratch(
    aws_cli, tmp_path, capsys, terminal_message, mock_index_entry, index_file
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

    index_file.assert_entries_match(
        [
            mock_index_entry("foous barus"),
            mock_index_entry("foous"),
            mock_index_entry("lorem ipsum"),
            mock_index_entry("apfel"),
        ]
    )


def test_generate_from_scratch_with_destructive(
    aws_cli,
    tmp_path,
    capsys,
    terminal_message,
    mock_index_entry,
    index_file,
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

    index_file.assert_entries_match(
        [
            mock_index_entry("foous barus"),
            mock_index_entry("foous"),
            mock_index_entry("lorem ipsum"),
            mock_index_entry("apfel"),
        ]
    )


def test_noop_update(aws_cli, tmp_path, capsys, mock_index_entry, index_file):
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

    index_file.assert_entries_match(
        [
            mock_index_entry("foous barus"),
            mock_index_entry("foous"),
            mock_index_entry("lorem ipsum"),
            mock_index_entry("apfel"),
        ]
    )


def test_overwrite_with_destructive(
    aws_cli, tmp_path, capsys, terminal_message, mock_index_entry, index_file
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

    index_file.assert_entries_match(
        [
            mock_index_entry("foous barus"),
            mock_index_entry("foous"),
            mock_index_entry("lorem ipsum"),
            mock_index_entry("apfel"),
        ]
    )


def test_partial_update(
    aws_cli, tmp_path, capsys, terminal_message, mock_index_entry, index_file
):
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

    index_file.assert_entries_match(
        [
            mock_index_entry("foous barus"),
            mock_index_entry("foous"),
            mock_index_entry("lorem ipsum"),
            mock_index_entry("apfel"),
        ]
    )


def test_partial_update_with_deletion(
    aws_cli,
    tmp_path,
    capsys,
    terminal_message,
    mock_index_entry,
    write_mock_audio_file_for_text,
    index_file,
):
    _write_json_file(
        tmp_path / "test.json",
        [
            mock_index_entry("foous barus"),
            mock_index_entry("an unnecessary phrase"),
        ],
    )
    write_mock_audio_file_for_text("an unnecessary phrase")
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

    index_file.assert_entries_match(
        [
            mock_index_entry("foous barus"),
            mock_index_entry("foous"),
            mock_index_entry("lorem ipsum"),
            mock_index_entry("apfel"),
        ]
    )


def test_overwrite_with_deletion(
    aws_cli,
    tmp_path,
    capsys,
    terminal_message,
    mock_index_entry,
    write_mock_audio_file_for_text,
    index_file,
):
    _write_json_file(
        tmp_path / "test.json",
        [
            mock_index_entry("foous barus"),
            mock_index_entry("an unnecessary phrase"),
        ],
    )
    write_mock_audio_file_for_text("an unnecessary phrase")
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

    index_file.assert_entries_match(
        [
            mock_index_entry("foous barus"),
            mock_index_entry("foous"),
            mock_index_entry("lorem ipsum"),
            mock_index_entry("apfel"),
        ]
    )


def test_delete_all(
    aws_cli,
    tmp_path,
    capsys,
    terminal_message,
    mock_index_entry,
    write_mock_audio_file_for_text,
    index_file,
):
    _write_json_file(
        tmp_path / "test.json",
        [
            mock_index_entry("foous barus"),
            mock_index_entry("an unnecessary phrase"),
        ],
    )
    write_mock_audio_file_for_text("an unnecessary phrase")
    write_mock_audio_file_for_text("foous barus")
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
    index_file.assert_entries_match([])


def test_delete_all_with_destructive(
    aws_cli,
    tmp_path,
    capsys,
    terminal_message,
    mock_index_entry,
    write_mock_audio_file_for_text,
    index_file,
):
    _write_json_file(
        tmp_path / "test.json",
        [
            mock_index_entry("foous barus"),
            mock_index_entry("an unnecessary phrase"),
        ],
    )
    write_mock_audio_file_for_text("an unnecessary phrase")
    write_mock_audio_file_for_text("foous barus")
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
    index_file.assert_entries_match([])


def _write_json_file(file_path, value):
    with open(file_path, "w", encoding="utf-8") as f:
        json.dump(value, f, ensure_ascii=False, indent=4)


def _assert_output_lines(lines, text):
    assert set(lines) == set([l for l in text.split("\n") if l != ""])
