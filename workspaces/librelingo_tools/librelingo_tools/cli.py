from pathlib import Path
import click
from librelingo_tools.yaml_loader import load_course
from librelingo_tools.export import export_course


@click.command()
@click.argument('input_path')
@click.argument('output_path')
def cli(input_path, output_path):
    """
        Convert a YAML course into a JSON course.
    """
    course = load_course(input_path)
    Path(output_path).mkdir(parents=True)
    export_course(output_path, course)


if __name__ == '__main__':
    cli()
