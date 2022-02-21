import collections
from pathlib import Path

import click  # type: ignore
from librelingo_yaml_loader import load_course

from librelingo_json_export.export import export_course

Settings = collections.namedtuple(
    "Settings",
    [
        "dry_run",
    ],
)

DEFAULT_SETTINGS = Settings(
    dry_run=False,
)


def ensure_output_directory(output_path: str, settings: Settings):
    if not settings.dry_run:
        Path(output_path).mkdir(parents=True, exist_ok=True)


@click.command()
@click.argument("input_path")
@click.argument("output_path")
@click.option("--dry-run/--no-dry-run", default=DEFAULT_SETTINGS.dry_run)
def main(input_path: str, output_path: str, dry_run):
    """
    Convert a YAML course into JSON files to be consumed by the web app.
    """
    settings = Settings(
        dry_run=dry_run,
    )
    course = load_course(input_path)
    ensure_output_directory(output_path, settings)
    export_course(output_path, course, settings)


if __name__ == "__main__":
    main()
