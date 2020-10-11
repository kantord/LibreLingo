"""Command-line interface."""
import click


@click.command()
@click.version_option()
def main() -> None:
    """LibreLingo to JSON."""


if __name__ == "__main__":
    main(prog_name="liblili2json")  # pragma: no cover
