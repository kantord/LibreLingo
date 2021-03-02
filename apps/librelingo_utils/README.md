<a name="librelingo_utils"></a>
# librelingo\_utils

librelingo-utils contains utility functions that are meant to make it easier
to create Python software that works with LibreLingo courses.

<a name="librelingo_utils.utils"></a>
# librelingo\_utils.utils

<a name="librelingo_utils.utils.calculate_number_of_levels"></a>
#### calculate\_number\_of\_levels

```python
calculate_number_of_levels(nwords, nphrases)
```

Calculates how many levels a skill should have

<a name="librelingo_utils.utils.clean_word"></a>
#### clean\_word

```python
clean_word(word)
```

Remove punctuation and other special characters from a word.

<a name="librelingo_utils.utils.get_dumb_opaque_id"></a>
#### get\_dumb\_opaque\_id

```python
get_dumb_opaque_id(name, id_, salt="")
```

Generate a unique, opaque ID based on a name, and id_ and a salt
id

<a name="librelingo_utils.utils.get_opaque_id"></a>
#### get\_opaque\_id

```python
get_opaque_id(obj, salt="")
```

Generate a unique, opaque ID based on a type and a type specific
id

<a name="librelingo_utils.utils.audio_id"></a>
#### audio\_id

```python
audio_id(language_id, text)
```

Generate the ID that will identify the audio file of a sentence.

