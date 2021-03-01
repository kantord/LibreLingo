# librelingo-yaml-loader

librelingo-yaml-loader can be used to load YAML-based LibreLingo courses in Python programs.

The course is loaded into the types from `[libreling-types](https://pypi.org/project/librelingo-types/).

## Usage

```python
from librelingo_yaml_loader import yaml_loader

course = yaml_loader.load_course("./path/to/my/course")
```

`load_course` returns a [Course()](https://github.com/kantord/LibreLingo/blob/main/apps/librelingo_yaml_loader/librelingo_yaml_loader/data_types.py) object

