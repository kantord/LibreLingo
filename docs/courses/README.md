# LibreLingo Course Documentation

This document describes how LibreLingo's course system works and how to contribute to course content.

Understanding this document is the first step if you want to:
- edit or improve an existing course
- contribute a new accepted answer
- create a new course from scratch

This is also a good resource if you just want to learn about the course system in general.

---

**Confused?**
[Ask people](https://github.com/kantord/LibreLingo/discussions) on GitHub Discussions.

---

**Table of Contents:**
- [Getting started](#getting-started)
- [Basics](#basics)
  - [Terminology](#terminology)
  - [Exploring the courses](#exploring-courses)
  - [Things to do for new contributors](#things-new-contributors)
- [Courses currently open for contributions](#courses-open)
- [Caution](#caution)
  - [Languages that don't use the Latin alphabet](#non-latin-alphabet)

## Getting started

- Totally new to LibreLingo? Head to the [Basics](#basics) section! It will give you a general understanding of the course system.
- Want to edit or improve existing courses? Check out [this page about editing courses](editing-courses.md).
- If you want to create new courses (typically suited for course designers or advanced users), go to [this page](creating-courses.md).


## Basics

### Terminology

You'll need to have an idea on basic terminology used in LibreLingo:

- A **Course** is a set of Modules. There is typically one course for each language pair. e.g. Spanish for English speakers, Japanese for Italian speakers, etc.
- A **Module** is a set of Skills.
- A **Skill** is a small unit of course material. In the web app, the user will typically practice a Skill at a time.

These concepts represent a hierarchical structure to LibreLingo course material: `Courses > Modules > Skills`

- The **target language** is the language the course is meant to teach.
- The **source language** is a language that users of the course are assumed to know.


<a id="exploring-courses"></a>
### Exploring the courses

To have a better understanding of how courses work, you can explore how the course files are organized on this repository.

The source of the courses are in separate git repositories. You will find a [list of courses](#courses-open) at the bottom of this page. The course repository name is usually structured in `<destination language>-from-<target audience's language>`. e.g. `french-from-english` teaches French to English speakers. In each course you'll find modules. And in each module you'll find skills, which are saved as individual .yaml files.

Now let's look into how they look on the frontend, to the user.

Go to [LibreLingo web app](https://librelingo.app/). Courses are listed there. e.g. You see a "START LEARNING SPANISH" button. (**NOTE:** Depending on the state and completeness of the courses, all of them might not be shown there on the website.)

When you enter a course page, for example the [Spanish course](https://librelingo.app/course/spanish-from-english/), you'll see headings like Basics, Introduction, Activities. These are modules. Each module contains a set of skills. Modules organize skills into groups, which is their only purpose. Think of them as groups of units or chapters.

"Skills" are units of course content focused on a particular topic. Each skill is a set of new knowledge, such as new words or phrases.  Skills can focus on vocabulary and follow a theme: the "Animal" skill has words and phrases related to animals, the "Food" skill is all about food. Skills can also focus on teaching grammar.

Inside a skill YAML file there are some keys that you might want to learn of, which is explained in detail [here](skill.md).

<a id="things-new-contributors"></a>
### Things you can do as a new contributor

If you are new in contributing to course data, these are the things you can do to get a proper understanding of the courses and have a good time with the project:

- Go to [LibreLingo's Spanish course](https://librelingo.app/course/spanish-from-english) and try out some of the skills. Just get an idea on how the questions are structured and the type of answers made available.
- [Browse this repository](https://github.com/kantord/LibreLingo/) or [download it](https://github.com/kantord/LibreLingo/archive/main.zip) and study the `courses` directory and how everything's laid out. Be sure to have a good text editor, such as [Notepad++](https://notepad-plus-plus.org/), [Geany](https://geany.org/) in hand to view or edit files.
- Try to learn how data is organized within .yaml files and directories. [Course](course.md), [Module](module.md) and [Skill](skill.md) documentation may help you on this.
- Try to learn how YAML works. (see [here](https://en.wikipedia.org/wiki/YAML#Syntax) or [here](https://blog.stackpath.com/yaml/) or [here](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started/))
- Determine some information about the language you're working with.
  - Your language name in English. e.g. French, Ancient Greek
  - Language slug (lowercase and no spaces). e.g. french, ancient-greek
  - IETF BCP 47 tag name for your language, which you can get from [here](http://www.iana.org/assignments/language-subtag-registry). Just look for the `Subtag` for your language. e.g. fr, grc
- If you have questions, feel free to ask on [Discussions](https://github.com/kantord/LibreLingo/discussions).


<a id="courses-open"></a>
## Courses currently open for contributions

[Check out our devtool page for the up to date list](https://librelingo.app/dev/).

## Caution

<a id="non-latin-alphabet"></a>
### Languages that don't use the Latin alphabet

Currently LibreLingo doesn't have enough features to support teaching new
alphabets. Solving this is a priority, but will take time. Technically in most
cases, language pairs that use the same alphabet (for example Ukrainian for
Russian speakers) should work just fine, but it hasn't been tested yet.
