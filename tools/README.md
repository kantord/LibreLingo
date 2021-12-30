# Command line helper tools for LibreLingo course authors

[LibreLingo](https://librelingo.app/)


## Features

* Report duplicate skill-ids.
* Report duplicate skill-names.
* List skill IDs (to make it easier to pick one that is not in use yet).
* List images that are not used in the current course in any of the words.
* List image names that appear in the course but don't exist in the directory.
* Verify that we can export the course to JSON.
* Generate a static web site that lists all the words in the target language from our course.
    * For each word it shows how many times it appears in the course.
    * Each word is a link to a page listing all the information about that word:
    * All the examples and the names of the files with the examples.

## TODO

* Show images if there are Word entries
* Generate HTML pages from warnings, errors, list of images that are not used, show the images that are used


* List all the words that are not used in phrases
* List the words that are defined in multiple places
* List all the Thumbnails that are not used in the current course.
* List all the image names that appear in the Thumbnails, but do not exist.
* Collect all the English words and phrases in all the courses. For the Ladino from English course create a page that list all of them that are not yet available in this course. Same when English is a traget language.
* Taking two courses with the same source language list the words/phrases that are used in one of the courses but not in the other. The same when the target languages are the same.
* Easily locate where a word is defined either in the source or the target language.
* List all the occurances of a word. (Basically a smart grep)

