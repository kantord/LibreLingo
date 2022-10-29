import pytest
from librelingo_json_export.export import _is_dry_run
from librelingo_json_export.settings import Settings
from librelingo_json_export.settings import DEFAULT_SETTINGS


def test_returns_true_when_dry_run():
    assert _is_dry_run(Settings(True))


@pytest.mark.parametrize("settings", [None, Settings(False), DEFAULT_SETTINGS])
def test_returns_false_when_no_dry_run(settings):
    assert not _is_dry_run(settings)
