<a name="librelingo_json_export.export"></a>
# librelingo\_json\_export.export

<a name="librelingo_json_export.export.export_course"></a>
#### export\_course

```python
export_course(export_path, course, settings=None)
```

Writes the course to JSON files in the specified path.

### Usage example:

```python
from librelingo_yaml_loader import load_course
from librelingo_json_export.export import export_course

course = load_course("./courses/french-from-english")
export_course("./apps/web/src/courses/french-from-english", course)
```

<a name="librelingo_json_export.cli"></a>
# librelingo\_json\_export.cli

<a name="librelingo_json_export.cli.main"></a>
#### main

```python
@click.command()
@click.argument("input_path")
@click.argument("output_path")
@click.option("--dry-run/--no-dry-run", default=DEFAULT_SETTINGS.dry_run)
main(input_path, output_path, dry_run)
```

Convert a YAML course into JSON files to be consumed by the web app.

