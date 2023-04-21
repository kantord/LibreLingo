import glob
import json
import os
from pathlib import Path

import jsonschema

from librelingo_json_export.export import export_course
from librelingo_yaml_loader import load_course


def read_json_file(path):
    with open(path) as f_p:
        return json.load(f_p)


def test_loaded_yaml_is_exported_to_correct_json(f_s, snapshot):
    fixture_path = os.path.join(os.path.dirname(__file__), "fixtures", "fake_course")
    f_s.add_real_directory(fixture_path)
    f_s.add_real_directory(os.path.dirname(jsonschema.__file__))
    f_s.create_dir("output")
    course = load_course(fixture_path)
    export_course("./output", course)
    files = glob.glob("./output/**/*")
    data = {
        str(Path(fname)): read_json_file(fname)
        if fname.endswith(".json")
        else open(fname).read()
        for fname in files
    }

    f_s.pause()  # Write snapshots to the real f_s, not the fake
    snapshot.assert_match(data)
