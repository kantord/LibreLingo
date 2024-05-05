# pylint: skip-file
import os
import pytest
from pathlib import Path

from librelingo_json_export.export import export_course
from librelingo_yaml_loader.yaml_loader import load_course
from librelingo_types import (
    #    AudioSettings,
    #    Course,
    #    DictionaryItem,
    #    HunspellSettings,
    Language,
    License,
    Module,
    #    Phrase,
    #    Settings,
    Skill,
    #    TextToSpeechSettings,
    #    Word,
)
from librelingo_fakes import fakes


def load(name):
    root = os.path.abspath(__file__)
    root = os.path.dirname(root)
    root = os.path.dirname(root)
    path_to_course = os.path.join(root, "tests", "fixtures", name)
    course = load_course(path_to_course)
    return course


def test_error_1(tmpdir):
    course = load("e1")
    settings = fakes.settings_not_dry_run()

    with pytest.raises(RuntimeError) as err:
        export_course(str(tmpdir), course, settings)
    assert (
        str(err.value)
        # pylint: disable=line-too-long
        == f"""Error while exporting skill "Hello" in file "{str(Path("basics/skills/hello.yaml"))}": The English word "Excuse me" does not have a definition. Please add it to the mini-dictionary."""
    )


def test_error_2(tmpdir):
    course = load("e2")
    settings = fakes.settings_not_dry_run()

    # issue: https://github.com/LibreLingo/LibreLingo/issues/1885
    with pytest.raises(RuntimeError) as err:
        export_course(str(tmpdir), course, settings)
    assert (
        str(err.value)
        # pylint: disable=line-too-long
        == f"""Error while exporting skill "Hello" in file "{str(Path("basics/skills/hello.yaml"))}": The English word "uncompersick" does not have a definition. Please add it to the mini-dictionary."""
    )


def test_minimal(tmpdir):
    course = load("minimal")

    assert course.target_language == Language(name="French", code="fr")
    assert course.source_language == Language(name="English", code="en")
    assert course.special_characters == []
    assert course.license == License(
        name="CC BY 3.0", full_name="CC BY 3.0", link="https://www.example.com/license"
    )
    assert course.dictionary == []
    assert course.repository_url == "https://www.example.com/course"
    assert course.course_dir.endswith(str(Path("tools/tests/fixtures/minimal")))
    # assert course.settings == Settings(
    #    audio_settings=AudioSettings(enabled=False, text_to_speech_settings_list=[]),
    #    hunspell=HunspellSettings(source_language=None, target_language=None),
    # )

    assert course.modules == [
        Module(
            title="Basics",
            filename="basics",
            skills=[
                Skill(
                    name="Hello",
                    filename=str(Path("basics/skills/hello.yaml")),
                    id=1,
                    words=[],
                    phrases=[],
                    image_set=[],
                    dictionary=[],
                    introduction=None,
                )
            ],
        )
    ]

    settings = fakes.settings_not_dry_run()

    # We make sure there is no exception.
    # Maybe we should also compare the results to some expected files?
    export_course(str(tmpdir), course, settings)
