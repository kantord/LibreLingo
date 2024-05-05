import collections

Settings = collections.namedtuple(
    "Settings",
    [
        "dry_run",
    ],
)

DEFAULT_SETTINGS = Settings(
    dry_run=False,
)
