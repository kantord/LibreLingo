<a name="librelingo_json_export.challenges"></a>
# librelingo\_json\_export.challenges

<a name="librelingo_json_export.challenges.make_challenges_using"></a>
#### make\_challenges\_using

```python
make_challenges_using(callback, data_source, course)
```

Calls a callback function with an item (Word or Phrase)
to create challenges. Each item in the data source will
be used.

<a name="librelingo_json_export.challenges.challenge_mapper"></a>
#### challenge\_mapper

```python
challenge_mapper(challenge_types)
```

Returns a function that applies challenge types
to a certain item (Word or Phrase), using the settings
of the given course.

<a name="librelingo_json_export.challenges.get_challenges_data"></a>
#### get\_challenges\_data

```python
get_challenges_data(skill, course)
```

Generates challenges for a certain Skill

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

