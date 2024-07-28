# Create your own language learning app using Python and LibreLingo (TDD)

In this tutorial, you'll learn how to use LibreLingo course data to create
language-learning apps in Python.

We'll build a simple function that lists the audio files required by
a LibreLingo course. (Whether they exist or not yet)

LibreLingo comes with some tools that make building and testing such
programs easier. I structured the tutorial as a small
Test-Driven-Development session so that you'll see how to use these tools.

By the end of the tutorial, you should have a good basis to build
your own apps, APIs, or software using LibreLingo, or to contribute
to LibreLingo or existing LibreLingo-based software.

## Requirements

To enjoy this tutorial, you'll need to have some experience with
Python, and you also need to have Python 3.9 installed on your system,
as well as the [poetry dependency management tool](https://python-poetry.org/).

## Setting up your project

To set up our project, we're first going to create an empty folder.

If you are creating your app inside the LibreLingo monorepo,
that's how you'd do it:

```bash
cd apps/
mkdir librelingo_audios
cd librelingo_audios/
```

Let's initialize our project using `poetry`:

```bash
poetry init
```

If you want to learn more about `poetry`, you can check out their
documentation on [initializing your project](https://python-poetry.org/docs/basic-usage/#project-setup).

Let's create the basic folder structure of our project:

```bash
mkdir librelingo_audios
mkdir tests
touch librelingo_audios/__init__.py
```

We want to test our app, so we need to install `pytest` as a development
dependency of our project:

```bash
poetry add --dev pytest
```

Let's see if `pytest` works:

```bash
poetry run pytest
```

The output is:

```console
==================================== test session starts =====================================
platform linux -- Python 3.9.1, pytest-6.2.2, py-1.10.0, pluggy-0.13.1
rootdir: /home/kdani/repos/LibreLingo/apps/librelingo_audios
collected 0 items

=================================== no tests ran in 0.00s ====================================
```

Looks like `pytest` works and we can start writing our tests!

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

```console
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

Makes sense, because we haven't created our implementation yet!

Let's create `librelingo_audios/list_missing_audios.py` with the following content:

```python
def list_missing_audios():
    return "Hello World"
```

We need to be able to import that in our test, so let's create `librelingo_audios/__init__.py`:

```python
__version__ = '0.1.0'

from librelingo_audios.list_missing_audios import list_missing_audios
```

If you did that, this is how your directory structure should look like now:

```console
├── librelingo_audios
│   ├── __init__.py
│   ├── list_missing_audios.py
├── poetry.lock
├── pyproject.toml
└── tests
    └── test_list_missing_audios.py
```

Let's try running our tests again:

```bash
poetry run pytest
```

You'll get the following output:

```console
==================================== test session starts =====================================
platform linux -- Python 3.9.1, pytest-6.2.2, py-1.10.0, pluggy-0.13.1
rootdir: /home/kdani/repos/LibreLingo/apps/librelingo_audios
collected 1 item

tests/test_list_missing_audios.py .                                                    [100%]

===================================== 1 passed in 0.01s ======================================
```

## Loading LibreLingo courses

LibreLingo comes with a Python package that facilitates loading courses in
Python programs. Let's install it:

```bash
poetry add librelingo_yaml_loader
```

Let's play around with this library in `ipython` to see how it works:

```bash
poetry run ipython
```

```python
In [1]: import librelingo_yaml_loader
In [2]: course = librelingo_yaml_loader.load_course('../../courses/spanish-from-english/')
```

We've loaded our course into the variable `course`.
Now you should be able to access course data.

For example, we can see what the target language of the course is:

```python
In [3]: course.target_language.name
Out[3]: 'Spanish'
```

We can see what the title of the first Module is:

```python
In [4]: course.modules[0].title
Out[4]: 'Basics'
```

We can list the Phrase objects included in
the second Skill of the first Module like so:

```python
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

We'll need some data to write our tests. We could use real data here, but that
would have some disadvantages:

-   Real courses evolve over time, so they might break our tests in the future
-   A real course can be difficult to navigate due to its size
-   A real course can take up a lot of memory
-   Loading real courses could slow our tests down

Thankfully, LibreLingo comes with a library with fake data to simplify
writing tests! Let's install it:

```bash
poetry add --dev librelingo-fakes
```

Let's _remove_ our existing test:

```python

def test_returns_hello_world():
    assert list_missing_audios() == "Hello World"
```

And replace it with a real test that verifies that an empty course doesn't
need any audio files:

```python
from librelingo_fakes import fakes

from librelingo_audios.list_missing_audios import list_missing_audios


def test_an_empty_course_does_not_have_any_audios():
    assert list(list_missing_audios(fakes.courseEmpty)) == []
```

If we run our tests again, we see the following failure:

```console
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

Let's cheat a little bit to make that test pass:

```python
def list_missing_audios(course):
    return []
```

This shows us that our "implementation" already works for empty courses, but
that's a rather unrealistic edge-case. So we need to come up with some
more precise test cases to force ourselves to write the correct implementation.

Let's look at the first fake course. By running this code,
we figure out that this course has `2` phrases in total:

```python
In [41]: count = 0

In [42]: for module in fakes.course1.modules:
    ...:     for skill in module.skills:
    ...:         count += len(skill.phrases)
    ...:

In [43]: count
Out[43]: 2
```

Every phrase has one corresponding audio, so this means our fake course
is going to need 2 audios.

We expect our function to return 2 items:

```python
def test_a_course_with_2_phrases_needs_2_audios():
    assert len(list(list_missing_audios(fakes.course1))) == 2
```

Let's cheat again to make that test pass:

```python
def list_missing_audios(course):
    if not course.modules:
        return []

    return ["foo", 42]
```

By further exploration, we learn that the second fake course doesn't have
any phrases:

```python
In [41]: count = 0

In [42]: for module in fakes.course2.modules:
    ...:     for skill in module.skills:
    ...:         count += len(skill.phrases)
    ...:

In [43]: count
Out[43]: 0
```

Let's change the test for the empty course to use course2 instead:

```python
def test_a_course_with_0_phrases_needs_zero_audios():
    assert len(list(list_missing_audios(fakes.course2))) == 0
```

Our tests are failing again:

```console
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

Since `course2` has modules (all with no phrases) this time, it's not as easy to
cheat with the implementation.

The simplest way to make the test pass is probably actually
implementing the iteration:

```python
def list_missing_audios(course):
    for module in course.modules:
        for skill in module.skills:
            for phrase in skill.phrases:
                yield None
```

Our tests are now passing!

One problem is that although now every phrase is there,
the output format is still useless.

We need to include the text of each phrase in the course's target language.
Let's make sure it's always the second item in the output:

```python
def test_result_includes_the_phrase_in_the_target_language():
    result = list(list_missing_audios(fakes.course1))
    # We are using in_target_language[0] because only the first version is used for audios
    assert result[0][1] == fakes.course1.modules[0].skills[0].phrases[0].in_target_language[0]

```

Let's run our tests again:

```console
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

Let's try cheating with the implementation:

```python
def list_missing_audios(course):
    for module in course.modules:
        for skill in module.skills:
            for phrase in skill.phrases:
                yield [None, ""]
```

Now we get this error:

```console
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

We can continue cheating, though:

```python
def list_missing_audios(course):
    for module in course.modules:
        for skill in module.skills:
            for phrase in skill.phrases:
                yield [None, "lorem ipsum"]
```

Our tests are now passing again 🎉!

This shows that our test wasn't specific enough. Let's add another example:

```python
def test_result_includes_the_phrase_in_the_target_language_2():
    result = list(list_missing_audios(fakes.course1))
    assert result[1][1] == fakes.course1.modules[0].skills[1].phrases[0].in_target_language[0]

```

We get the following failure:

```console
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

This time around, writing the actual implementation is easier than
trying to trick the tests:

```python
def list_missing_audios(course):
    for module in course.modules:
        for skill in module.skills:
            for phrase in skill.phrases:
                # Returning only the first version because
                # the other versions never need audio.
                yield [None, phrase.in_target_language[0]]
```

Let's refactor a bit: we extract the text to a new variable!

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

The reason anyone would call the function `list_missing_audios` is probably because
they want to download/create those audios somehow.

If they want to create those files, then for practical reasons, the filenames
should follow a standardized system that other LibreLingo-related software
can also recognize.

To achieve that, we can use the `audio_id` function from [librelingo-utils](https://pypi.org/project/librelingo-utils/).

Let's start simple. First, let's make sure that the IDs are string:

```python
def test_audio_id_is_a_string():
    assert [type(result[0]) for result in list_missing_audios(fakes.course1)] == [str, str]
```

```console
==================================== test session starts =====================================
platform linux -- Python 3.9.1, pytest-6.2.2, py-1.10.0, pluggy-0.13.1
rootdir: /home/kdani/repos/LibreLingo/apps/librelingo_audios
plugins: pyfakefs-4.4.0, snapshottest-0.6.0
collected 5 items

tests/test_list_missing_audios.py ....F                                                [100%]

========================================== FAILURES ==========================================
_________________________________ test_audio_id_is_a_string __________________________________

    def test_audio_id_is_a_string():
>       assert [type(result[0]) for result in list_missing_audios(fakes.course1)] == [str, str]
E       AssertionError: assert [<class 'None...s 'NoneType'>] == [<class 'str'>, <class 'str'>]
E         At index 0 diff: <class 'NoneType'> != <class 'str'>
E         Use -v to get the full diff

tests/test_list_missing_audios.py:24: AssertionError
================================== short test summary info ===================================
FAILED tests/test_list_missing_audios.py::test_audio_id_is_a_string - AssertionError: asser...
================================ 1 failed, 4 passed in 0.04s =================================
```

We can still cheat by returning an empty string:

```python
def list_missing_audios(course):
    for module in course.modules:
        for skill in module.skills:
            for phrase in skill.phrases:
                # Returning only the first version because
                # the other versions never need audio.
                text = phrase.in_target_language[0]
                yield ["", text]
```

And out tests are passing again... We better make sure somehow that
`audio_id` is actually used to perform the filename logic.

First, let's install `librelingo-utils`:

```bash
poetry add librelingo-utils
```

And write a test that only passes if our function calls `audio_id`.

To do that, we'll need to install `pytest-mock`:

```bash
poetry add --dev pytest-mock
```

We can now write our test:

```python
def test_calls_audio_id_to_get_the_id(mocker):
    audio_id = mocker.patch('librelingo_audios.list_missing_audios.audio_id')
    list_missing_audios(fakes.course1)
    assert audio_id.call_count == 2

```

This will mock the `audio_id` function and see how many times it has been called.
We assert that it has to run twice since there are 2 phrases that need audio files.

```console
==================================== test session starts =====================================
platform linux -- Python 3.9.1, pytest-6.2.2, py-1.10.0, pluggy-0.13.1
rootdir: /home/kdani/repos/LibreLingo/apps/librelingo_audios
plugins: pyfakefs-4.4.0, mock-3.5.1, snapshottest-0.6.0
collected 6 items

tests/test_list_missing_audios.py .....F                                               [100%]

========================================== FAILURES ==========================================
_____________________________ test_calls_audio_id_to_get_the_id ______________________________

mocker = <pytest_mock.plugin.MockerFixture object at 0x7ff94ee398e0>

    def test_calls_audio_id_to_get_the_id(mocker):
>       audio_id = mocker.patch('librelingo_audios.list_missing_audios.audio_id')

tests/test_list_missing_audios.py:29:
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
/home/kdani/.cache/pypoetry/virtualenvs/librelingo-audios-yD2wurwN-py3.9/lib/python3.9/site-packages/pytest_mock/plugin.py:352: in __call__
    return self._start_patch(
/home/kdani/.cache/pypoetry/virtualenvs/librelingo-audios-yD2wurwN-py3.9/lib/python3.9/site-packages/pytest_mock/plugin.py:161: in _start_patch
    mocked = p.start()  # type: unittest.mock.MagicMock
/usr/lib/python3.9/unittest/mock.py:1541: in start
    result = self.__enter__()
/usr/lib/python3.9/unittest/mock.py:1405: in __enter__
    original, local = self.get_original()
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

self = <unittest.mock._patch object at 0x7ff94ee39a00>

    def get_original(self):
        target = self.getter()
        name = self.attribute

        original = DEFAULT
        local = False

        try:
            original = target.__dict__[name]
        except (AttributeError, KeyError):
            original = getattr(target, name, DEFAULT)
        else:
            local = True

        if name in _builtins and isinstance(target, ModuleType):
            self.create = True

        if not self.create and original is DEFAULT:
>           raise AttributeError(
                "%s does not have the attribute %r" % (target, name)
            )
E           AttributeError: <function list_missing_audios at 0x7ff94ee4c5e0> does not have the attribute 'audio_id'

/usr/lib/python3.9/unittest/mock.py:1378: AttributeError
================================== short test summary info ===================================
FAILED tests/test_list_missing_audios.py::test_calls_audio_id_to_get_the_id - AttributeErro...
================================ 1 failed, 5 passed in 0.13s =================================
```

That's not exactly what I expected. Looks like mocking is problematic in Python when your
file name is the same as a function name, because it will try to mock an attribute of the
function instead of the file.

After some Googling, I couldn't find an easy and clean solution for this, so
let's just rename `list_missing_audios.py` to `functions.py` to avoid trouble.

I'm planning to put more functions here anyway.

In our test file, let's change the import:

```python
from librelingo_audios.functions import list_missing_audios
```

Let's change the mock:

```python
def test_calls_audio_id_to_get_the_id(mocker):
    audio_id = mocker.patch('librelingo_audios.functions.audio_id')
    list_missing_audios(fakes.course1)
    assert audio_id.call_count == 2
```

Let's also change the import in `__init__.py`:

```python
__version__ = '0.1.0'

from librelingo_audios.functions import list_missing_audios
```

Now, if we run our tests, we see the failure that I originally expected, or at least something similar:

```console
==================================== test session starts =====================================
platform linux -- Python 3.9.1, pytest-6.2.2, py-1.10.0, pluggy-0.13.1
rootdir: /home/kdani/repos/LibreLingo/apps/librelingo_audios
plugins: pyfakefs-4.4.0, mock-3.5.1, snapshottest-0.6.0
collected 6 items

tests/test_list_missing_audios.py .....F                                               [100%]

========================================== FAILURES ==========================================
_____________________________ test_calls_audio_id_to_get_the_id ______________________________

mocker = <pytest_mock.plugin.MockerFixture object at 0x7f458c9cc8e0>

    def test_calls_audio_id_to_get_the_id(mocker):
        audio_id = mocker.patch('librelingo_audios.functions.audio_id')
        list_missing_audios(fakes.course1)
>       assert audio_id.call_count == 2
E       AssertionError: assert 0 == 2
E        +  where 0 = <MagicMock name='audio_id' id='139936688556448'>.call_count

tests/test_list_missing_audios.py:31: AssertionError
================================== short test summary info ===================================
FAILED tests/test_list_missing_audios.py::test_calls_audio_id_to_get_the_id - AssertionErro...
================================ 1 failed, 5 passed in 0.04s =================================
```

Whoops, our test forgot to actually iterate over the result; let's wrap the function call in
`list()` to fix that.

```python
def test_calls_audio_id_to_get_the_id(mocker):
    audio_id = mocker.patch('librelingo_audios.functions.audio_id')
    list(list_missing_audios(fakes.course1))
    assert audio_id.call_count == 2
```

Now let's change the implementation so that it actually calls `audio_id`:

```python
def list_missing_audios(course):
    for module in course.modules:
        for skill in module.skills:
            for phrase in skill.phrases:
                # Returning only the first version because
                # the other versions never need audio.
                text = phrase.in_target_language[0]
                audio_id(course.source_language, "lorem ipsum")
                yield ["", text]
```

Our tests are now passing:

```console
==================================== test session starts =====================================
platform linux -- Python 3.9.1, pytest-6.2.2, py-1.10.0, pluggy-0.13.1
rootdir: /home/kdani/repos/LibreLingo/apps/librelingo_audios
plugins: pyfakefs-4.4.0, mock-3.5.1, snapshottest-0.6.0
collected 6 items

tests/test_list_missing_audios.py ......                                               [100%]

===================================== 6 passed in 0.02s ======================================
```

Notice, though, that we are actually passing the source language instead of
the target language! Also, we're calling it with an empty string instead of
the actual string:

```python
audio_id(course.source_language, "")
```

We need to be a lot stricter in our tests, so let's fix that:

```python
def test_calls_audio_id_with_the_correct_arguments(mocker):
    audio_id = mocker.patch('librelingo_audios.functions.audio_id')
    list(list_missing_audios(fakes.course1))
    expected_call = mocker.call(fakes.course1.target_language, fakes.course1.modules[0].skills[0].phrases[0].in_target_language[0])
    audio_id.assert_has_calls([expected_call])
```

That causes our tests to fail so let's update the implementation:

```python
def list_missing_audios(course):
    for module in course.modules:
        for skill in module.skills:
            for phrase in skill.phrases:
                # Returning only the first version because
                # the other versions never need audio.
                text = phrase.in_target_language[0]
                audio_id(course.target_language, "lorem ipsum")
                yield ["", text]
```

```console
==================================== test session starts =====================================
platform linux -- Python 3.9.1, pytest-6.2.2, py-1.10.0, pluggy-0.13.1
rootdir: /home/kdani/repos/LibreLingo/apps/librelingo_audios
plugins: pyfakefs-4.4.0, mock-3.5.1, snapshottest-0.6.0
collected 7 items

tests/test_list_missing_audios.py .......                                              [100%]

===================================== 7 passed in 0.03s ======================================
```

But you'll notice this is still cheating because we're always using
`"lorem ipsum"` as the text. Let's extend our test case to fix that.

```python
def test_calls_audio_id_with_the_correct_arguments(mocker):
    audio_id = mocker.patch('librelingo_audios.functions.audio_id')
    list(list_missing_audios(fakes.course1))
    expected_call_1 = mocker.call(fakes.course1.target_language, fakes.course1.modules[0].skills[0].phrases[0].in_target_language[0])
    expected_call_2 = mocker.call(fakes.course1.target_language, fakes.course1.modules[0].skills[1].phrases[0].in_target_language[0])
    audio_id.assert_has_calls([expected_call_1, expected_call_2])
```

Yup, our tests are failing again!

Let's make them pass:

```python
def list_missing_audios(course):
    for module in course.modules:
        for skill in module.skills:
            for phrase in skill.phrases:
                # Returning only the first version because
                # the other versions never need audio.
                text = phrase.in_target_language[0]
                audio_id(course.target_language, phrase.in_target_language[0])
                yield ["", text]
```

This looks good, but we're still not returning the ID!
You guessed it, that's a new test case for us!

We will make our mock function return a fake value and assert
that the value shows up in the result.

```python
def test_returns_correct_audio_id(mocker):
    audio_id = mocker.patch('librelingo_audios.functions.audio_id')
    audio_id.return_value = "omg"
    assert list(list_missing_audios(fakes.course1))[0][0] == "omg"
```

If we run the tests, we get the error that we expected:

```console
==================================== test session starts =====================================
platform linux -- Python 3.9.1, pytest-6.2.2, py-1.10.0, pluggy-0.13.1
rootdir: /home/kdani/repos/LibreLingo/apps/librelingo_audios
plugins: pyfakefs-4.4.0, mock-3.5.1, snapshottest-0.6.0
collected 8 items

tests/test_list_missing_audios.py .......F                                             [100%]

========================================== FAILURES ==========================================
_______________________________ test_returns_correct_audio_id ________________________________

mocker = <pytest_mock.plugin.MockerFixture object at 0x7fe9191977f0>

    def test_returns_correct_audio_id(mocker):
        audio_id = mocker.patch('librelingo_audios.functions.audio_id')
        audio_id.return_value = "omg"
>       assert list(list_missing_audios(fakes.course1))[0][0] == "omg"
E       AssertionError: assert '' == 'omg'
E         - omg

tests/test_list_missing_audios.py:45: AssertionError
================================== short test summary info ===================================
FAILED tests/test_list_missing_audios.py::test_returns_correct_audio_id - AssertionError: a...
================================ 1 failed, 7 passed in 0.04s =================================
```

Let's cheat again to make the test pass:

```python
def list_missing_audios(course):
    for module in course.modules:
        for skill in module.skills:
            for phrase in skill.phrases:
                # Returning only the first version because
                # the other versions never need audio.
                text = phrase.in_target_language[0]
                audio_id(course.target_language, phrase.in_target_language[0])
                yield ["omg", text]
```

Our tests now pass, but we are still returning the wrong output.

Let's make another test case to make it impossible to cheat.

Since the return value of the mock function is entirely determined by the fake
value that we supply in our test case, this is a value the implementation can
only reproduce by actually calling the function and taking the return value.

The only way our implementation can cheat is if the return value is
one simple static example, which is exactly what we have right now.

The most straightforward way to avoid that is by adding an identical test case
with a different mock value:

```python
def test_returns_correct_audio_id_2(mocker):
    audio_id = mocker.patch('librelingo_audios.functions.audio_id')
    audio_id.return_value = "foobar"
    assert list(list_missing_audios(fakes.course1))[0][0] == "foobar"
```

```console
==================================== test session starts =====================================
platform linux -- Python 3.9.1, pytest-6.2.2, py-1.10.0, pluggy-0.13.1
rootdir: /home/kdani/repos/LibreLingo/apps/librelingo_audios
plugins: pyfakefs-4.4.0, mock-3.5.1, snapshottest-0.6.0
collected 9 items

tests/test_list_missing_audios.py ........F                                            [100%]

========================================== FAILURES ==========================================
______________________________ test_returns_correct_audio_id_2 _______________________________

mocker = <pytest_mock.plugin.MockerFixture object at 0x7f83d4646a00>

    def test_returns_correct_audio_id_2(mocker):
        audio_id = mocker.patch('librelingo_audios.functions.audio_id')
        audio_id.return_value = "foobar"
>       assert list(list_missing_audios(fakes.course1))[0][0] == "foobar"
E       AssertionError: assert 'omg' == 'foobar'
E         - foobar
E         + omg

tests/test_list_missing_audios.py:51: AssertionError
================================== short test summary info ===================================
FAILED tests/test_list_missing_audios.py::test_returns_correct_audio_id_2 - AssertionError:...
================================ 1 failed, 8 passed in 0.05s =================================
```

Let's fix our implementation:

```python
from librelingo_utils import audio_id

def list_missing_audios(course):
    for module in course.modules:
        for skill in module.skills:
            for phrase in skill.phrases:
                # Returning only the first version because
                # the other versions never need audio.
                text = phrase.in_target_language[0]
                id_ = audio_id(course.target_language, phrase.in_target_language[0])
                yield [id_, text]
```

Now let's do a little bit of refactoring. I don't want to shove more functionality
into this function, so let's rename it to `list_required_audios` across all files.

Later I can create a `list_missing_audios` which will actually filter out all
the audio files that already exist.

```python
from librelingo_utils import audio_id

def list_required_audios(course):
    for module in course.modules:
        for skill in module.skills:
            for phrase in skill.phrases:
                # Returning only the first version because
                # the other versions never need audio.
                text = phrase.in_target_language[0]
                id_ = audio_id(course.target_language, phrase.in_target_language[0])
                yield [id_, text]
```

Just checking that the tests still pass...

```
==================================== test session starts =====================================
platform linux -- Python 3.9.1, pytest-6.2.2, py-1.10.0, pluggy-0.13.1
rootdir: /home/kdani/repos/LibreLingo/apps/librelingo_audios
plugins: pyfakefs-4.4.0, mock-3.5.1, snapshottest-0.6.0
collected 9 items

tests/test_list_missing_audios.py .........                                            [100%]

===================================== 9 passed in 0.03s ======================================

```

Now let's extract the iteration part to simplify our function:

```python
from librelingo_utils import audio_id

def _iterate_phrases(course):
    '"Flatten" a course into a sequence of phrases'
    for module in course.modules:
        for skill in module.skills:
            for phrase in skill.phrases:
                yield phrase


def list_required_audios(course):
    for phrase in _iterate_phrases(course):
        # Returning only the first version because
        # the other versions never need audio.
        text = phrase.in_target_language[0]
        id_ = audio_id(course.target_language, phrase.in_target_language[0])
        yield [id_, text]
```

That concludes this tutorial! If you are interested in learning more about
how [LibreLingo](https://librelingo.app/) works,
check out our [source code on GitHub](https://github.com/kantord/LibreLingo),
our [development documentation](https://librelingo.app/docs/) or
[join our chat](https://riot.im/app/#/group/+librelingo:matrix.org).
