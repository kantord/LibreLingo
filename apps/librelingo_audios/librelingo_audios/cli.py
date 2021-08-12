from pathlib import Path
import click  # type: ignore
import collections
from librelingo_yaml_loader import load_course
from librelingo_audios.generate_audios import generate_audios_for_course


Settings = collections.namedtuple(
    "Settings",
    [
        "dry_run",
        "overwrite",
    ],
)

DEFAULT_SETTINGS = Settings(
    dry_run=False,
    overwrite=False,
)


def ensure_output_directory(output_path, settings):
    if not settings.dry_run:
        Path(output_path).mkdir(parents=True, exist_ok=True)


@click.command()
@click.argument("input_path")
@click.argument("output_path")
@click.option("--dry-run/--no-dry-run", default=DEFAULT_SETTINGS.dry_run)
@click.option("--overwrite/--no-overwrite", default=DEFAULT_SETTINGS.overwrite)
def _command(input_path, output_path, dry_run, overwrite):
    """
    Generate audios for a YAML course.
    """
    settings = Settings(
        dry_run=dry_run,
        overwrite=overwrite,
    )
    course = load_course(input_path)
    ensure_output_directory(output_path, settings)
    generate_audios_for_course(output_path, course, settings)


if __name__ == "__main__":
    _command()
