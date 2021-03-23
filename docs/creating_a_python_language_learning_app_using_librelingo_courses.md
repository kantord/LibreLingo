# Create your own language learning app using Python and LibreLingo (TDD)

In this tutorial you'll learn how to use LibreLingo course data to create
language-learning apps in Python.

We'll build a simple function that lists the audio files required by
a LibreLingo course. (Whether they exist or not yet)

LibreLingo comes with some tools that make it easier to build such
programs and also to test them. I structured the tutorial as a small
Test-Driven-Development session so that you'll see how to use these tools.

By the end of the tutorial you should have a good basis to build
your own apps, APIs or software using LibreLingo, or to contribute
to LibreLingo or existing LibreLingo-based software.


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

Now we also need to make sure that if someone create a software that will create these audio files, then they'll be 
able to save it under a filename that other LibreLingo-related software will also recognize.

In order to do achieve that, we can use the `audio_id` function from [librelingo-utils](https://pypi.org/project/librelingo-utils/).

Let's start simple. First let's make sure that the IDs are string:

```python
def test_audio_id_is_a_string():
    assert [type(result[0]) for result in list_missing_audios(fakes.course1)] == [str, str]
```

```
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


However we can still easily cheat by simply returning an empty string:


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

Now lets install librelingo-utils:

```
poetry add librelingo-utils
```

And make sure that our function calls `audio_id`:


```python
def test_calls_audio_id_to_get_the_id(mocker):
    audio_id = mocker.patch('librelingo_audios.list_missing_audios.audio_id')
    list_missing_audios(fakes.course1)
    assert audio_id.call_count == 2

```


```
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

Oops, we can mock this because Python thinks that we are mocking an attribute of the function, not a function in the file.

Let's rename `list_missing_audios.py` to `functions.py`. We'll put more functions here anyway.


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

Now if we run our tests, we see the failure that we expect:


```
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

Whoops, our test forgot to actually iterate over the result, lets fix that.

```python
def test_calls_audio_id_to_get_the_id(mocker):
    audio_id = mocker.patch('librelingo_audios.functions.audio_id')
    list(list_missing_audios(fakes.course1))
    assert audio_id.call_count == 2
```


Now our tests are passing:

```
==================================== test session starts =====================================
platform linux -- Python 3.9.1, pytest-6.2.2, py-1.10.0, pluggy-0.13.1
rootdir: /home/kdani/repos/LibreLingo/apps/librelingo_audios
plugins: pyfakefs-4.4.0, mock-3.5.1, snapshottest-0.6.0
collected 6 items                                                                            

tests/test_list_missing_audios.py ......                                               [100%]

===================================== 6 passed in 0.02s ======================================
```


You might have noticed that we are actually passing the source language instead of the target langauge. Also it is calling it with an empty string instead of the actual string.

```python
audio_id(course.source_language, "")
```

Let's write a test case to fix that:

```python
def test_calls_audio_id_with_the_correct_arguments(mocker):
    audio_id = mocker.patch('librelingo_audios.functions.audio_id')
    list(list_missing_audios(fakes.course1))
    expected_call = mocker.call(fakes.course1.target_language, fakes.course1.modules[0].skills[0].phrases[0].in_target_language[0])
    audio_id.assert_has_calls([expected_call])
```

```
==================================== test session starts =====================================
platform linux -- Python 3.9.1, pytest-6.2.2, py-1.10.0, pluggy-0.13.1
rootdir: /home/kdani/repos/LibreLingo/apps/librelingo_audios
plugins: pyfakefs-4.4.0, mock-3.5.1, snapshottest-0.6.0
collected 7 items                                                                            

tests/test_list_missing_audios.py ......F                                              [100%]

========================================== FAILURES ==========================================
_______________________ test_calls_audio_id_with_the_correct_arguments _______________________

__wrapped_mock_method__ = <function NonCallableMock.assert_has_calls at 0x7f41f5658280>
args = (<MagicMock name='audio_id' id='139921258244032'>, [call(Language(name='my language', code='de'), 'lorem ipsum')])
kwargs = {}, __tracebackhide__ = True
msg = "Calls not found.\nExpected: [call(Language(name='my language', code='de'), 'lorem ipsum')]\nActual: [call(Language(na...uage(name='my language', code='de'), 'lorem ipsum')]\n  Left contains one more item: ''\n  Use -v to get the full diff"
__mock_self = <MagicMock name='audio_id' id='139921258244032'>
actual_args = (Language(name='another language', code='tr'), ''), actual_kwargs = {}
introspection = "\nArgs:\nassert (Language(nam...ode='tr'), '') == ([call(Langua...rem ipsum')],)\n  At index 0 diff: Language(name='a...uage(name='my language', code='de'), 'lorem ipsum')]\n  Left contains one more item: ''\n  Use -v to get the full diff"
@py_assert2 = ([call(Language(name='my language', code='de'), 'lorem ipsum')],)
@py_assert1 = None
@py_format4 = "(Language(nam...ode='tr'), '') == ([call(Langua...rem ipsum')],)\n~At index 0 diff: Language(name='another language',...nguage(name='my language', code='de'), 'lorem ipsum')]\n~Left contains one more item: ''\n~Use -v to get the full diff"

    def assert_wrapper(
        __wrapped_mock_method__: Callable[..., Any], *args: Any, **kwargs: Any
    ) -> None:
        __tracebackhide__ = True
        try:
>           __wrapped_mock_method__(*args, **kwargs)

/home/kdani/.cache/pypoetry/virtualenvs/librelingo-audios-yD2wurwN-py3.9/lib/python3.9/site-packages/pytest_mock/plugin.py:392: 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

self = <MagicMock name='audio_id' id='139921258244032'>
calls = [call(Language(name='my language', code='de'), 'lorem ipsum')], any_order = False

    def assert_has_calls(self, calls, any_order=False):
        """assert the mock has been called with the specified calls.
        The `mock_calls` list is checked for the calls.
    
        If `any_order` is False (the default) then the calls must be
        sequential. There can be extra calls before or after the
        specified calls.
    
        If `any_order` is True then the calls can be in any order, but
        they must all appear in `mock_calls`."""
        expected = [self._call_matcher(c) for c in calls]
        cause = next((e for e in expected if isinstance(e, Exception)), None)
        all_calls = _CallList(self._call_matcher(c) for c in self.mock_calls)
        if not any_order:
            if expected not in all_calls:
                if cause is None:
                    problem = 'Calls not found.'
                else:
                    problem = ('Error processing expected calls.\n'
                               'Errors: {}').format(
                                   [e if isinstance(e, Exception) else None
                                    for e in expected])
>               raise AssertionError(
                    f'{problem}\n'
                    f'Expected: {_CallList(calls)}'
                    f'{self._calls_repr(prefix="Actual").rstrip(".")}'
                ) from cause
E               AssertionError: Calls not found.
E               Expected: [call(Language(name='my language', code='de'), 'lorem ipsum')]
E               Actual: [call(Language(name='another language', code='tr'), ''),
E                call(Language(name='another language', code='tr'), '')]

/usr/lib/python3.9/unittest/mock.py:944: AssertionError

During handling of the above exception, another exception occurred:

mocker = <pytest_mock.plugin.MockerFixture object at 0x7f41f4eae6a0>

    def test_calls_audio_id_with_the_correct_arguments(mocker):
        audio_id = mocker.patch('librelingo_audios.functions.audio_id')
        list(list_missing_audios(fakes.course1))
        expected_call = mocker.call(fakes.course1.target_language, fakes.course1.modules[0].skills[0].phrases[0].in_target_language[0])
>       assert audio_id.assert_has_calls([expected_call])
E       AssertionError: Calls not found.
E       Expected: [call(Language(name='my language', code='de'), 'lorem ipsum')]
E       Actual: [call(Language(name='another language', code='tr'), ''),
E        call(Language(name='another language', code='tr'), '')]
E       
E       pytest introspection follows:
E       
E       Args:
E       assert (Language(nam...ode='tr'), '') == ([call(Langua...rem ipsum')],)
E         At index 0 diff: Language(name='another language', code='tr') != [call(Language(name='my language', code='de'), 'lorem ipsum')]
E         Left contains one more item: ''
E         Use -v to get the full diff

tests/test_list_missing_audios.py:38: AssertionError
================================== short test summary info ===================================
FAILED tests/test_list_missing_audios.py::test_calls_audio_id_with_the_correct_arguments - ...
================================ 1 failed, 6 passed in 0.09s =================================

```


Lets make that test pass:

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

```
==================================== test session starts =====================================
platform linux -- Python 3.9.1, pytest-6.2.2, py-1.10.0, pluggy-0.13.1
rootdir: /home/kdani/repos/LibreLingo/apps/librelingo_audios
plugins: pyfakefs-4.4.0, mock-3.5.1, snapshottest-0.6.0
collected 7 items                                                                            

tests/test_list_missing_audios.py .......                                              [100%]

===================================== 7 passed in 0.03s ======================================
```


But you'll notice this is still cheating, because we're always using `"lorem ipsum"` as tthe text.
Let's extend our test case to fix that.

```python

def test_calls_audio_id_with_the_correct_arguments(mocker):
    audio_id = mocker.patch('librelingo_audios.functions.audio_id')
    list(list_missing_audios(fakes.course1))
    expected_call_1 = mocker.call(fakes.course1.target_language, fakes.course1.modules[0].skills[0].phrases[0].in_target_language[0])
    expected_call_2 = mocker.call(fakes.course1.target_language, fakes.course1.modules[0].skills[1].phrases[0].in_target_language[0])
    audio_id.assert_has_calls([expected_call_1, expected_call_2])


```


Yup, our tests are failing again:

```
==================================== test session starts =====================================
platform linux -- Python 3.9.1, pytest-6.2.2, py-1.10.0, pluggy-0.13.1
rootdir: /home/kdani/repos/LibreLingo/apps/librelingo_audios
plugins: pyfakefs-4.4.0, mock-3.5.1, snapshottest-0.6.0
collected 7 items                                                                            

tests/test_list_missing_audios.py ......F                                              [100%]

========================================== FAILURES ==========================================
_______________________ test_calls_audio_id_with_the_correct_arguments _______________________

__wrapped_mock_method__ = <function NonCallableMock.assert_has_calls at 0x7f826b69c280>
args = (<MagicMock name='audio_id' id='140198116202384'>, [call(Language(name='my language', code='de'), 'lorem ipsum'), call(Language(name='my language', code='de'), 'foous barus')])
kwargs = {}, __tracebackhide__ = True
msg = "Calls not found.\nExpected: [call(Language(name='my language', code='de'), 'lorem ipsum'),\n call(Language(name='my l...my language', code='de'), 'foous barus')]\n  Left contains one more item: 'lorem ipsum'\n  Use -v to get the full diff"
__mock_self = <MagicMock name='audio_id' id='140198116202384'>
actual_args = (Language(name='my language', code='de'), 'lorem ipsum'), actual_kwargs = {}
introspection = "\nArgs:\nassert (Language(nam...'lorem ipsum') == ([call(Langua...ous barus')],)\n  At index 0 diff: Language(name='m...my language', code='de'), 'foous barus')]\n  Left contains one more item: 'lorem ipsum'\n  Use -v to get the full diff"
@py_assert2 = ([call(Language(name='my language', code='de'), 'lorem ipsum'), call(Language(name='my language', code='de'), 'foous barus')],)
@py_assert1 = None
@py_format4 = "(Language(nam...'lorem ipsum') == ([call(Langua...ous barus')],)\n~At index 0 diff: Language(name='my language', code...='my language', code='de'), 'foous barus')]\n~Left contains one more item: 'lorem ipsum'\n~Use -v to get the full diff"

    def assert_wrapper(
        __wrapped_mock_method__: Callable[..., Any], *args: Any, **kwargs: Any
    ) -> None:
        __tracebackhide__ = True
        try:
>           __wrapped_mock_method__(*args, **kwargs)

/home/kdani/.cache/pypoetry/virtualenvs/librelingo-audios-yD2wurwN-py3.9/lib/python3.9/site-packages/pytest_mock/plugin.py:392: 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

self = <MagicMock name='audio_id' id='140198116202384'>
calls = [call(Language(name='my language', code='de'), 'lorem ipsum'), call(Language(name='my language', code='de'), 'foous barus')]
any_order = False

    def assert_has_calls(self, calls, any_order=False):
        """assert the mock has been called with the specified calls.
        The `mock_calls` list is checked for the calls.
    
        If `any_order` is False (the default) then the calls must be
        sequential. There can be extra calls before or after the
        specified calls.
    
        If `any_order` is True then the calls can be in any order, but
        they must all appear in `mock_calls`."""
        expected = [self._call_matcher(c) for c in calls]
        cause = next((e for e in expected if isinstance(e, Exception)), None)
        all_calls = _CallList(self._call_matcher(c) for c in self.mock_calls)
        if not any_order:
            if expected not in all_calls:
                if cause is None:
                    problem = 'Calls not found.'
                else:
                    problem = ('Error processing expected calls.\n'
                               'Errors: {}').format(
                                   [e if isinstance(e, Exception) else None
                                    for e in expected])
>               raise AssertionError(
                    f'{problem}\n'
                    f'Expected: {_CallList(calls)}'
                    f'{self._calls_repr(prefix="Actual").rstrip(".")}'
                ) from cause
E               AssertionError: Calls not found.
E               Expected: [call(Language(name='my language', code='de'), 'lorem ipsum'),
E                call(Language(name='my language', code='de'), 'foous barus')]
E               Actual: [call(Language(name='my language', code='de'), 'lorem ipsum'),
E                call(Language(name='my language', code='de'), 'lorem ipsum')]

/usr/lib/python3.9/unittest/mock.py:944: AssertionError

During handling of the above exception, another exception occurred:

mocker = <pytest_mock.plugin.MockerFixture object at 0x7f826aef1a90>

    def test_calls_audio_id_with_the_correct_arguments(mocker):
        audio_id = mocker.patch('librelingo_audios.functions.audio_id')
        list(list_missing_audios(fakes.course1))
        expected_call_1 = mocker.call(fakes.course1.target_language, fakes.course1.modules[0].skills[0].phrases[0].in_target_language[0])
        expected_call_2 = mocker.call(fakes.course1.target_language, fakes.course1.modules[0].skills[1].phrases[0].in_target_language[0])
>       audio_id.assert_has_calls([expected_call_1, expected_call_2])
E       AssertionError: Calls not found.
E       Expected: [call(Language(name='my language', code='de'), 'lorem ipsum'),
E        call(Language(name='my language', code='de'), 'foous barus')]
E       Actual: [call(Language(name='my language', code='de'), 'lorem ipsum'),
E        call(Language(name='my language', code='de'), 'lorem ipsum')]
E       
E       pytest introspection follows:
E       
E       Args:
E       assert (Language(nam...'lorem ipsum') == ([call(Langua...ous barus')],)
E         At index 0 diff: Language(name='my language', code='de') != [call(Language(name='my language', code='de'), 'lorem ipsum'), call(Language(name='my language', code='de'), 'foous barus')]
E         Left contains one more item: 'lorem ipsum'
E         Use -v to get the full diff

tests/test_list_missing_audios.py:39: AssertionError
================================== short test summary info ===================================
FAILED tests/test_list_missing_audios.py::test_calls_audio_id_with_the_correct_arguments - ...
================================ 1 failed, 6 passed in 0.08s =================================

```



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


This looks good, but we're still not returning the ID! You guessed it, that's a new test case for us!



```python
def test_returns_correct_audio_id(mocker):
    audio_id = mocker.patch('librelingo_audios.functions.audio_id')
    audio_id.return_value = "omg"
    assert list(list_missing_audios(fakes.course1))[0][0] == "omg"
```

```
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

Let's make another test case to make it impossible to cheat. This makes it impossible to cheat because
we are mocking the same function with a different return value, and it's impossible for the code
to decide which mock we're using:

```python
def test_returns_correct_audio_id_2(mocker):
    audio_id = mocker.patch('librelingo_audios.functions.audio_id')
    audio_id.return_value = "foobar"
    assert list(list_missing_audios(fakes.course1))[0][0] == "foobar"
```


```
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

Now let's do a little bit of refactoring. I don't really want to shove more functionality
into this function, so let's rename it to `list_required_audios` in all files.

Later we can create a `list_missing_audios` which will actually list only the audio files
that are missing.


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

Let's make sure our tests still pass:


```
==================================== test session starts =====================================
platform linux -- Python 3.9.1, pytest-6.2.2, py-1.10.0, pluggy-0.13.1
rootdir: /home/kdani/repos/LibreLingo/apps/librelingo_audios
plugins: pyfakefs-4.4.0, mock-3.5.1, snapshottest-0.6.0
collected 9 items                                                                            

tests/test_list_missing_audios.py .........                                            [100%]

===================================== 9 passed in 0.03s ======================================

```

Now let's extract the iteration part in order to simplify our function:


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

