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


def test_dry_run_does_nothing(tmp_path, capsys, terminal, index_file):
    update_audios_for_course(
        tmp_path, "test", course, cli.Settings(dry_run=True, destructive=False)
    )
    index_file.assert_does_not_exist()
    terminal.assert_output_matches(
        [
            terminal.message.would_generate("lorem ipsum"),
            terminal.message.would_generate("foous barus"),
            terminal.message.would_generate("apfel"),
            terminal.message.would_generate("foous"),
        ],
    )


def test_dry_run_does_nothing_with_destructive(tmp_path, capsys, terminal, index_file):
    update_audios_for_course(
        tmp_path, "test", course, cli.Settings(dry_run=True, destructive=True)
    )
    index_file.assert_does_not_exist()
    terminal.assert_output_matches(
        [
            terminal.message.would_generate("lorem ipsum"),
            terminal.message.would_generate("foous barus"),
            terminal.message.would_generate("apfel"),
            terminal.message.would_generate("foous"),
        ],
    )


def test_generate_from_scratch(
    aws_cli, tmp_path, capsys, terminal, mock_index_entry, index_file
):
    update_audios_for_course(
        tmp_path, "test", course, cli.Settings(dry_run=False, destructive=False)
    )
    index_file.assert_exists()
    terminal.assert_output_matches(
        [
            terminal.message.generating("lorem ipsum"),
            terminal.message.generating("foous barus"),
            terminal.message.generating("apfel"),
            terminal.message.generating("foous"),
        ],
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
    terminal,
    mock_index_entry,
    index_file,
):
    update_audios_for_course(
        tmp_path, "test", course, cli.Settings(dry_run=False, destructive=True)
    )
    index_file.assert_exists()
    terminal.assert_output_matches(
        [
            terminal.message.generating("lorem ipsum"),
            terminal.message.generating("foous barus"),
            terminal.message.generating("apfel"),
            terminal.message.generating("foous"),
        ],
    )
    aws_cli.assert_call_count(4)
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


def test_noop_update(aws_cli, tmp_path, capsys, mock_index_entry, index_file, terminal):
    index_file.set_entries(
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
    index_file.assert_exists()
    terminal.assert_output_matches([])
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
    aws_cli, tmp_path, capsys, terminal, mock_index_entry, index_file
):
    index_file.set_entries(
        [
            mock_index_entry("foous barus"),
            mock_index_entry("lorem ipsum"),
        ],
    )
    update_audios_for_course(
        tmp_path, "test", course, cli.Settings(dry_run=False, destructive=True)
    )
    index_file.assert_exists()
    terminal.assert_output_matches(
        [
            terminal.message.generating("lorem ipsum"),
            terminal.message.generating("foous barus"),
            terminal.message.generating("apfel"),
            terminal.message.generating("foous"),
        ],
    )
    aws_cli.assert_call_count(4)
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
    aws_cli, tmp_path, capsys, terminal, mock_index_entry, index_file
):
    index_file.set_entries(
        [
            mock_index_entry("foous barus"),
        ],
    )
    update_audios_for_course(
        tmp_path, "test", course, cli.Settings(dry_run=False, destructive=False)
    )
    index_file.assert_exists()
    terminal.assert_output_matches(
        [
            terminal.message.generating("lorem ipsum"),
            terminal.message.generating("apfel"),
            terminal.message.generating("foous"),
        ],
    )
    aws_cli.assert_call_count(3)
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
    terminal,
    mock_index_entry,
    write_mock_audio_file_for_text,
    index_file,
):
    index_file.set_entries(
        [
            mock_index_entry("foous barus"),
            mock_index_entry("an unnecessary phrase"),
        ],
    )
    write_mock_audio_file_for_text("an unnecessary phrase")
    update_audios_for_course(
        tmp_path, "test", course, cli.Settings(dry_run=False, destructive=False)
    )
    index_file.assert_exists()
    terminal.assert_output_matches(
        [
            terminal.message.deleting("an unnecessary phrase"),
            terminal.message.generating("lorem ipsum"),
            terminal.message.generating("apfel"),
            terminal.message.generating("foous"),
        ],
    )
    aws_cli.assert_call_count(3)
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
    terminal,
    mock_index_entry,
    write_mock_audio_file_for_text,
    index_file,
):
    index_file.set_entries(
        [
            mock_index_entry("foous barus"),
            mock_index_entry("an unnecessary phrase"),
        ],
    )
    write_mock_audio_file_for_text("an unnecessary phrase")
    update_audios_for_course(
        tmp_path, "test", course, cli.Settings(dry_run=False, destructive=True)
    )
    index_file.assert_exists()
    terminal.assert_output_matches(
        [
            terminal.message.deleting("an unnecessary phrase"),
            terminal.message.generating("foous barus"),
            terminal.message.generating("lorem ipsum"),
            terminal.message.generating("apfel"),
            terminal.message.generating("foous"),
        ],
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


def test_delete_all(
    aws_cli,
    tmp_path,
    capsys,
    terminal,
    mock_index_entry,
    write_mock_audio_file_for_text,
    index_file,
):
    index_file.set_entries(
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
    index_file.assert_exists()
    terminal.assert_output_matches(
        [
            terminal.message.deleting("an unnecessary phrase"),
            terminal.message.deleting("foous barus"),
        ],
    )
    aws_cli.assert_call_count(0)
    index_file.assert_entries_match([])


def test_delete_all_with_destructive(
    aws_cli,
    tmp_path,
    capsys,
    terminal,
    mock_index_entry,
    write_mock_audio_file_for_text,
    index_file,
):
    index_file.set_entries(
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
    index_file.assert_exists()
    terminal.assert_output_matches(
        [
            terminal.message.deleting("an unnecessary phrase"),
            terminal.message.deleting("foous barus"),
        ],
    )
    aws_cli.assert_call_count(0)
    index_file.assert_entries_match([])
