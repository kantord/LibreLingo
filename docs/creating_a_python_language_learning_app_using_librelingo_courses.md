# Creating a Python language-learning app using LibreLingo course data

This tutorial teaches you how to use LibreLingo course data in Python apps.


## Setting up your project


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

## Loading LibreLingo courses

```bash
poetry add librelingo_yaml_loader
```


```bash
poetry run ipython
```

```ipython
In [1]: import librelingo_yaml_loader

In [2]: course = librelingo_yaml_loader.load_course('../../courses/spanish-from-english/')
```

Now you should be able to access course data.

For example, you can see what the target language of the course is:

```ipython
In [3]: course.target_language.name
Out[3]: 'Spanish'
```

You can see what the title of the first Module is:

```ipython
In [4]: course.modules[0].title
Out[4]: 'Basics'
```

You can list the Phrase objects included in the second Skill of the first Module like so:

```ipython
In [6]: course.modules[0].skills[1].phrases
Out[6]: 
[Phrase(in_target_language=['Buen provecho'], in_source_language=['Enjoy your meal']),
 Phrase(in_target_language=['Por favor'], in_source_language=['Please']),
 Phrase(in_target_language=['Pan, por favor'], in_source_language=['Bread, please']),
 Phrase(in_target_language=['Agua, por favor'], in_source_language=['Water, please']),
 Phrase(in_target_language=['Cecilia bebe agua'], in_source_language=['Cecilia drinks water']),
 Phrase(in_target_language=['La pareja bebe cerveza'], in_source_language=['The couple drinks beer']),
 Phrase(in_target_language=['José come pan'], in_source_language=['José eats bread']),
 Phrase(in_target_language=['Yo como pasta'], in_source_language=['I eat pasta'])]
```

## Adding some tests

```bash
poetry add --dev librelingo-fakes
```

Let's *remove* our existing test:

```python

def test_returns_hello_world():
    assert list_missing_audios() == "Hello World"
```

And replace it with a real test that makes sure that an empty course doens't need any audios.

```python
from librelingo_fakes import fakes

from librelingo_audios.list_missing_audios import list_missing_audios


def test_an_empty_course_does_not_have_any_audios():
    assert list(list_missing_audios(fakes.courseEmpty)) == []
```


We'll see the following failure:

```

==================================== test session starts =====================================
platform linux -- Python 3.9.1, pytest-6.2.2, py-1.10.0, pluggy-0.13.1
rootdir: /home/kdani/repos/LibreLingo/apps/librelingo_audios
plugins: pyfakefs-4.4.0, snapshottest-0.6.0
collected 1 item                                                                             

tests/test_list_missing_audios.py F                                                    [100%]

========================================== FAILURES ==========================================
_______________________ test_an_empty_course_does_not_have_any_audios ________________________

    def test_an_empty_course_does_not_have_any_audios():
>       assert list(list_missing_audios(fakes.courseEmpty)) == []
E       TypeError: list_missing_audios() takes 0 positional arguments but 1 was given

tests/test_list_missing_audios.py:7: TypeError
================================== short test summary info ===================================
FAILED tests/test_list_missing_audios.py::test_an_empty_course_does_not_have_any_audios - T...
===================================== 1 failed in 0.03s ======================================

```

In order the make the test pass, let's change our implementation like so:

```python
def list_missing_audios(course):
    return []
```

Let's look at the first fake course. By running this code, we can figure out that this course has `2` phrases in total,
which means it's going to need 2 audios.


```ipython
In [41]: count = 0

In [42]: for module in fakes.course1.modules:
    ...:     for skill in module.skills:
    ...:         count += len(skill.phrases)
    ...: 

In [43]: count
Out[43]: 2
```

Therefore we expect our function to return exactly 2 items:

```python
def test_a_course_with_2_phrases_needs_2_audios():
    assert len(list(list_missing_audios(fakes.course1))) == 2
```


We can cheat a little bit to make our test pass

```python
def list_missing_audios(course):
    if not course.modules:
        return []

    return ["foo", 42]
```


```

=================================== test session starts =====================================
platform linux -- Python 3.9.1, pytest-6.2.2, py-1.10.0, pluggy-0.13.1
rootdir: /home/kdani/repos/LibreLingo/apps/librelingo_audios
plugins: pyfakefs-4.4.0, snapshottest-0.6.0
collected 2 items                                                                            

tests/test_list_missing_audios.py ..                                                   [100%]

===================================== 2 passed in 0.07s ======================================

```


We figure out that the second fake course doesnt have any phrases either.


```ipython
In [41]: count = 0

In [42]: for module in fakes.course2.modules:
    ...:     for skill in module.skills:
    ...:         count += len(skill.phrases)
    ...: 

In [43]: count
Out[43]: 2
```

Lets change the test for the empty course to instead use course2:

```python
def test_a_course_with_0_phrases_needs_zero_audios():
    assert len(list(list_missing_audios(fakes.course2))) == 0
```

Our tests are failing again:


```
==================================== test session starts =====================================
platform linux -- Python 3.9.1, pytest-6.2.2, py-1.10.0, pluggy-0.13.1
rootdir: /home/kdani/repos/LibreLingo/apps/librelingo_audios
plugins: pyfakefs-4.4.0, snapshottest-0.6.0
collected 2 items                                                                            

tests/test_list_missing_audios.py F.                                                   [100%]

========================================== FAILURES ==========================================
_______________________ test_a_course_with_0_phrases_needs_zero_audios _______________________

    def test_a_course_with_0_phrases_needs_zero_audios():
>       assert len(list(list_missing_audios(fakes.course2))) == 0
E       AssertionError: assert 2 == 0
E        +  where 2 = len(['foo', 42])
E        +    where ['foo', 42] = list(['foo', 42])
E        +      where ['foo', 42] = list_missing_audios(Course(target_language=Language(name='another language', code='tr'), source_language=Language(name='my language', code...fruit', is_in_target_language=True), DictionaryItem(word='ipsum', definition='red fruit', is_in_target_language=True)]))
E        +        where Course(target_language=Language(name='another language', code='tr'), source_language=Language(name='my language', code...fruit', is_in_target_language=True), DictionaryItem(word='ipsum', definition='red fruit', is_in_target_language=True)]) = fakes.course2

tests/test_list_missing_audios.py:7: AssertionError
================================== short test summary info ===================================
FAILED tests/test_list_missing_audios.py::test_a_course_with_0_phrases_needs_zero_audios - ...
================================ 1 failed, 1 passed in 0.03s =================================
```

This time we can't cheat as much with the implementation:


```python
def list_missing_audios(course):
    for module in course.modules:
        for skill in module.skills:
            for phrase in skill.phrases:
                yield None
```


Passing:

```python
def list_missing_audios(course):
    for module in course.modules:
        for skill in module.skills:
            for phrase in skill.phrases:
                yield None
```

The next thing is to format the ouput. We need to make sure that the text of each phrase in the target language is included.

```python
def test_result_includes_the_phrase_in_the_target_language():
    result = list(list_missing_audios(fakes.course1))
    # We are using in_target_language[0] because only the first version is used for audios
    assert result[0][1] == fakes.course1.modules[0].skills[0].phrases[0].in_target_language[0]

```

```
==================================== test session starts =====================================
platform linux -- Python 3.9.1, pytest-6.2.2, py-1.10.0, pluggy-0.13.1
rootdir: /home/kdani/repos/LibreLingo/apps/librelingo_audios
plugins: pyfakefs-4.4.0, snapshottest-0.6.0
collected 3 items                                                                            

tests/test_list_missing_audios.py ..F                                                  [100%]

========================================== FAILURES ==========================================
___________________ test_result_includes_the_phrase_in_the_target_language ___________________

    def test_result_includes_the_phrase_in_the_target_language():
        result = list(list_missing_audios(fakes.course1))
>       assert result[0][1] == fakes.course1.modules[0].skills[0].phrases[0].in_target_language
E       TypeError: 'NoneType' object is not subscriptable

tests/test_list_missing_audios.py:16: TypeError
================================== short test summary info ===================================
FAILED tests/test_list_missing_audios.py::test_result_includes_the_phrase_in_the_target_language
================================ 1 failed, 2 passed in 0.03s =================================
```

We can fix that issue by changing the implementation this way:

```python
def list_missing_audios(course):
    for module in course.modules:
        for skill in module.skills:
            for phrase in skill.phrases:
                yield [None, ""]
```

Now we have another error to deal with though:

```
==================================== test session starts =====================================
platform linux -- Python 3.9.1, pytest-6.2.2, py-1.10.0, pluggy-0.13.1
rootdir: /home/kdani/repos/LibreLingo/apps/librelingo_audios
plugins: pyfakefs-4.4.0, snapshottest-0.6.0
collected 3 items                                                                            

tests/test_list_missing_audios.py ..F                                                  [100%]

========================================== FAILURES ==========================================
___________________ test_result_includes_the_phrase_in_the_target_language ___________________

    def test_result_includes_the_phrase_in_the_target_language():
        result = list(list_missing_audios(fakes.course1))
>       assert result[0][1] == fakes.course1.modules[0].skills[0].phrases[0].in_target_language
E       AssertionError: assert '' == ['lorem ipsum']
E        +  where ['lorem ipsum'] = Phrase(in_target_language=['lorem ipsum'], in_source_language=['john smith']).in_target_language

tests/test_list_missing_audios.py:16: AssertionError
================================== short test summary info ===================================
FAILED tests/test_list_missing_audios.py::test_result_includes_the_phrase_in_the_target_language
================================ 1 failed, 2 passed in 0.03s =================================
```



We can cheat again though. 

```python
def list_missing_audios(course):
    for module in course.modules:
        for skill in module.skills:
            for phrase in skill.phrases:
                yield [None, "lorem ipsum"]
```

```
==================================== test session starts =====================================
platform linux -- Python 3.9.1, pytest-6.2.2, py-1.10.0, pluggy-0.13.1
rootdir: /home/kdani/repos/LibreLingo/apps/librelingo_audios
plugins: pyfakefs-4.4.0, snapshottest-0.6.0
collected 3 items                                                                            

tests/test_list_missing_audios.py ...                                                  [100%]

===================================== 3 passed in 0.02s ======================================
```

This clearly shows our test wasn't stringent enough. Let's add another one.


```python

def test_result_includes_the_phrase_in_the_target_language_2():
    result = list(list_missing_audios(fakes.course1))
    assert result[1][1] == fakes.course1.modules[0].skills[1].phrases[0].in_target_language[0]

```

```
==================================== test session starts =====================================
platform linux -- Python 3.9.1, pytest-6.2.2, py-1.10.0, pluggy-0.13.1
rootdir: /home/kdani/repos/LibreLingo/apps/librelingo_audios
plugins: pyfakefs-4.4.0, snapshottest-0.6.0
collected 4 items                                                                            

tests/test_list_missing_audios.py ...F                                                 [100%]

========================================== FAILURES ==========================================
__________________ test_result_includes_the_phrase_in_the_target_language_2 __________________

    def test_result_includes_the_phrase_in_the_target_language_2():
        result = list(list_missing_audios(fakes.course1))
>       assert result[1][1] == fakes.course1.modules[0].skills[1].phrases[0].in_target_language[0]
E       AssertionError: assert 'lorem ipsum' == 'foous barus'
E         - foous barus
E         + lorem ipsum

tests/test_list_missing_audios.py:21: AssertionError
================================== short test summary info ===================================
FAILED tests/test_list_missing_audios.py::test_result_includes_the_phrase_in_the_target_language_2
================================ 1 failed, 3 passed in 0.03s =================================
```


This time it's easier to properly implement it than cheating, so let's do that:


```python
def list_missing_audios(course):
    for module in course.modules:
        for skill in module.skills:
            for phrase in skill.phrases:
                # Returning only the first version because
                # the other versions never need audio.
                yield [None, phrase.in_target_language[0]]
```


Lets do a little bit of refactoring and extract the text to a new variable:

```python
def list_missing_audios(course):
    for module in course.modules:
        for skill in module.skills:
            for phrase in skill.phrases:
                # Returning only the first version because
                # the other versions never need audio.
                text = phrase.in_target_language[0]
                yield [None, text]
```
