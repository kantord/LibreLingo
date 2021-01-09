import os
import random
import pytest
from click.testing import CliRunner
from librelingo_tools.cli import cli
from . import fakes


@pytest.fixture
def inputs():
    return str(fakes.fake_value()), str(fakes.fake_value())


@pytest.fixture
def mocks(mocker):
    load_course = mocker.patch("librelingo_tools.cli.load_course")
    load_course.return_value = fakes.fake_value()
    return {
        "load_course": load_course,
        "export_course": mocker.patch("librelingo_tools.cli.export_course")
    }


@pytest.fixture
def invoke(fs):
    def f(args):
        runner = CliRunner()
        runner.invoke(cli, args)

    return f


def test_yaml_to_json_loads_correct_course(mocks, inputs, invoke):
    invoke(inputs)
    mocks["load_course"].assert_called_with(inputs[0])


def test_yaml_to_json_exports_correct_course(mocks, inputs, invoke):
    invoke(inputs)
    mocks["export_course"].assert_called_with(
        inputs[1], mocks["load_course"].return_value)


def test_yaml_to_json_has_help_text(mocks, inputs, invoke):
    assert cli.help


def test_creates_output_directory_if_it_doesnt_exist(mocks, inputs, invoke, fs):
    output_path = "foo/{}/bar".format(random.randint(0, 500))
    invoke([inputs[0], output_path])
    assert os.path.isdir(output_path)
