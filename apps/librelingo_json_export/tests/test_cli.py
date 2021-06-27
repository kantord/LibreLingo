import os
import random
import pytest
from click.testing import CliRunner  # type: ignore
from librelingo_json_export.cli import _command, DEFAULT_SETTINGS
from librelingo_fakes import fakes


@pytest.fixture
def inputs():
    return str(fakes.fake_value()), str(fakes.fake_value())


@pytest.fixture
def mocks(mocker):
    load_course = mocker.patch("librelingo_json_export.cli.load_course")
    load_course.return_value = fakes.fake_value()
    return {
        "load_course": load_course,
        "export_course": mocker.patch("librelingo_json_export.cli.export_course"),
    }


@pytest.fixture
def invoke(mocks, fs):
    def f(args):
        runner = CliRunner()
        return runner.invoke(_command, args)

    return f


def test_yaml_to_json_loads_correct_course(mocks, inputs, invoke):
    invoke(inputs)
    mocks["load_course"].assert_called_with(inputs[0])


def test_yaml_to_json_exports_correct_course(mocks, inputs, invoke):
    invoke(inputs)
    mocks["export_course"].assert_called_with(
        inputs[1], mocks["load_course"].return_value, DEFAULT_SETTINGS
    )


def test_yaml_to_json_has_help_text(mocks, inputs, invoke):
    assert _command.help


def test_creates_output_directory_if_it_doesnt_exist(mocks, inputs, invoke, fs):
    output_path = "foo/{}/bar".format(random.randint(0, 500))
    invoke([inputs[0], output_path])
    assert os.path.isdir(output_path)


def test_has_a_dry_run_option(mocks, inputs, invoke):
    result = invoke([*inputs, "--dry-run"])
    assert result.exit_code == 0


def test_dry_run_doesnt_create_output_files(mocks, inputs, invoke):
    mocks["export_course"].side_effect = lambda p, _: open(p, "w").write("x")
    invoke([*inputs, "--dry-run"])
    assert os.listdir(".") == ["tmp"]


def test_dry_run_calls_real_export_course(mocks, inputs, invoke):
    invoke([*inputs, "--dry-run"])
    assert mocks["export_course"].call_count == 1
