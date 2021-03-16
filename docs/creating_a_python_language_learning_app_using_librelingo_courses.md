# Creating a Python language-learning app using LibreLingo course data

This tutorial teaches you how to use LibreLingo course data in Python apps.


```bash
cd apps/
mkdir librelingo_audios
cd librelingo_audios/
```

```bash
poetry init
```

```bash
poetry install
```


```bash
mkdir librelingo_audios
mkdir tests
touch librelingo_audios/__init__.py
```


```bash
poetry add --dev pytest
```

Let's see if `pytest` works:

```bash
poetry run pytest
```

The output is:

```
==================================== test session starts =====================================
platform linux -- Python 3.9.1, pytest-6.2.2, py-1.10.0, pluggy-0.13.1
rootdir: /home/kdani/repos/LibreLingo/apps/librelingo_audios
collected 0 items                                                                            

=================================== no tests ran in 0.00s ====================================
```

Looks like `pytest` works and we can start adding our tests!

Let's create `tests/test_list_missing_audios.py` with this simple test case:

```python
from librelingo_audios import list_missing_audios

def test_returns_hello_world():
    assert list_missing_audios() == "Hello World"
```

Let's try running this test:

```bash
poetry run pytest
```

We get this error:

```
==================================== test session starts =====================================
platform linux -- Python 3.9.1, pytest-6.2.2, py-1.10.0, pluggy-0.13.1
rootdir: /home/kdani/repos/LibreLingo
plugins: pyfakefs-4.4.0, mock-3.5.1, snapshottest-0.6.0
collected 178 items / 1 error / 177 selected                                                 

=========================================== ERRORS ===========================================
_________ ERROR collecting apps/librelingo_audios/tests/test_list_missing_audios.py __________
ImportError while importing test module '/home/kdani/repos/LibreLingo/apps/librelingo_audios/tests/test_list_missing_audios.py'.
Hint: make sure your test modules/packages have valid Python names.
Traceback:
/usr/lib/python3.9/importlib/__init__.py:127: in import_module
    return _bootstrap._gcd_import(name[level:], package, level)
apps/librelingo_audios/tests/test_list_missing_audios.py:1: in <module>
    from librelingo_audios import list_missing_audios
E   ModuleNotFoundError: No module named 'librelingo_audios'
================================== short test summary info ===================================
ERROR apps/librelingo_audios/tests/test_list_missing_audios.py
!!!!!!!!!!!!!!!!!!!!!!!!!!! Interrupted: 1 error during collection !!!!!!!!!!!!!!!!!!!!!!!!!!!
====================================== 1 error in 0.88s ======================================
```

Makes sense, because we haven't created our implementation!


Lets create `librelingo_audios/list_missing_audios.py`:

```python
def list_missing_audios():
    return "Hello World"
```

In order to be able to import that in our test, we also need to create
`librelingo_audios/__init__.py`:

```python
__version__ = '0.1.0'

from librelingo_audios.list_missing_audios import list_missing_audios
```

If you did everything correctly, this is how your directory structure should look like now:

```
├── librelingo_audios
│   ├── __init__.py
│   ├── list_missing_audios.py
├── poetry.lock
├── pyproject.toml
└── tests
    └── test_list_missing_audios.py
```

Let's try running our tests now:

```bash
poetry run pytest
```

Here's our output:

```

==================================== test session starts =====================================
platform linux -- Python 3.9.1, pytest-6.2.2, py-1.10.0, pluggy-0.13.1
rootdir: /home/kdani/repos/LibreLingo/apps/librelingo_audios
collected 1 item                                                                             

tests/test_list_missing_audios.py .                                                    [100%]

===================================== 1 passed in 0.01s ======================================
```
