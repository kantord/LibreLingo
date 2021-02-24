import os
import json
import glob
from librelingo_yaml_loader import load_course
from librelingo_json_export.export import export_course


def read_json_file(path):
    with open(path) as fp:
        return json.load(fp)


def test_loaded_yaml_is_exported_to_correct_json(fs, snapshot):
    fixture_path = os.path.join(os.path.dirname(
        __file__), 'fixtures', "fake_course")
    fs.add_real_directory(fixture_path)
    fs.create_dir("output")
    course = load_course(fixture_path)
    export_course("./output", course)
    files = glob.glob("./output/**/*")
    data = {
        fname: read_json_file(fname) for fname in files
    }

    fs.pause()  # Write snapshots to the real fs, not the fake
    snapshot.assert_match(data)
