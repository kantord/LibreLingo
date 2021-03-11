# Contributing to LibreLingo courses

This document describes how LibreLingo's course system works and how to contribute to course content.

Understanding this document is the first step if you want to:
- edit or improve an existing course
- contribute a new accepted answer
- create a new course from scratch

This is also a good resource if you just want to learn about the course system in general.

---

**NOTE**: If you are not clear about anything on this document feel free to post on [Discussions](https://github.com/kantord/LibreLingo/discussions) so that the community can help you further.

---

**Table of Contents:**
- [Getting started](#getting-started)
- [Basics](#basics)
  - [Terminology](#terminology)
  - [Exploring the courses](#exploring-courses)
  - [Things to do for new contributors](#things-new-contributors)
- [Courses currently open for contributions](#courses-open)
  - [For English speakers](#courses-from-english)
- [Caution](#caution)
  - [Languages that don't use the Latin alphabet](#non-latin-alphabet)

## Getting started

- Totally new to LibreLingo? Head to the [Basics](#basics) section! It will give you a general understanding about things.
- Want to edit or improve existing courses? Check out [this page about editing courses](editing-courses.md).
- Want to create a new course? Read out [this guide on how to create new courses](creating-courses.md). (Advanced)


## Basics

### Terminology

You'll need to have an idea on basic terminology used in LibreLingo:

- A **Course** is a set of Modules. There is typically one course for each language pair. e.g. Spanish for English speakers, Japanese for Italian speakers, etc.
- A **Module** is a set of Skills.
- A **Skill** is a small unit of course material. In the web app, the user will typically practice a Skill at a time.

These concepts represent a hierarchical structure to LibreLingo course material: `Courses > Modules > Skills`

- The **target language** is the language the course is meant to teach.
- The **source langauge** is a language that users of the course are assumed to know.

The course directory name is usually structured in `<destination language>-from-<target audience's language>`. e.g. `french-from-english` teaches French to English speakers.

<a id="exploring-courses"></a>
### Exploring the courses

To have a better understanding of how courses work, you can explore how the course files are organized on this repository.

On the `courses` directory of [this repository](https://github.com/kantord/LibreLingo/tree/main/courses) you will find courses. Under each course you'll find modules. And inside each module you'll find skills, which are saved as individual .yaml files.

Now let's look into how they look on the frontend, to the user.

If you go to the [homepage](https://librelingo.app/), courses are listed there. e.g. You can see a "START LEARNING SPANISH" button. (**NOTE:** Depending on the state and completeness of the courses, all of them might not be shown there on the website.) So basically, there are courses for each language. You can think of "courses" as "languages" on your mind if that's more comfortable to you.

When you enter a course page, for example the Spanish course [here](https://librelingo.app/course/spanish-from-english/), you'll see headings like Basics, Introduction, Activities. These are modules. And under each module heading there are a list of skills under it. Modules are merely there to serve the purpose of organizing skills and basically nothing else. Think of them as folders for your skills.

"Skills" are the actual lessons focused on a particular topic. Each skill is like a set of questions that follow a particular theme. For example, "Animal" skill has questions relating to animals, "Food" skill has questions relating to foods. Each skill is designed to test the skill on a certain topic.

Inside a skill YAML file there are some keys that you might want to learn of, which is exaplained in detail [here](course.md).

<a id="things-new-contributors"></a>
### Things you can do as a new contributor

If you are new in contributing to course data, these are the things you can do to get a proper understanding of the courses and have a good time with the project:

- Go to [LibreLingo's Spanish course](https://librelingo.app/course/spanish-from-english) and try out some of the skills. Just get an idea on how the questions are structured and the type of answers made available.
- Clone this repository or [download it](https://github.com/kantord/LibreLingo/archive/main.zip) and study the `courses` directory and how everything's laid out. Be sure to have a good text editor, such as [Notepad++](https://notepad-plus-plus.org/), [Geany](https://geany.org/) in hand to view or edit files.
- Try to learn how data is organized within .yaml files and directories. [Course](course.md), [Module](module.md) and [Skill](skill.md) documentation may help you on this.
- Try to learn how YAML works. (see [here](https://en.wikipedia.org/wiki/YAML#Syntax) or [here](https://blog.stackpath.com/yaml/) or [here](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started/))
- Determine some information about your language.
  - Your language name in English. e.g. French, Ancient Greek
  - Language slug (lowercase and no spaces). e.g. french, ancient-greek
  - IETF BCP 47 tag name for your language, which you can get from [here](http://www.iana.org/assignments/language-subtag-registry). Just look for the `Subtag` for your language. e.g. fr, grc
- If you have questions, feel free to ask on [Discussions](https://github.com/kantord/LibreLingo/discussions).


<a id="courses-open"></a>
## Courses currently open for contributions

<a id="courses-from-english"></a>
### For English speakers

- [Spanish for English speakers](https://github.com/kantord/LibreLingo/tree/master/courses/spanish-from-english) ([Preview](https://librelingo.app/course/spanish-from-english/))
- [German for English speakers](https://github.com/kantord/LibreLingo/tree/master/courses/german-from-english) ([Preview](https://librelingo.app/course/german-from-english/))
- [French for English speakers](https://github.com/kantord/LibreLingo/tree/master/courses/french-from-english)
- [Bangla for English speakers](https://github.com/kantord/LibreLingo/tree/master/courses/bangla-from-english)


## Caution

<a id="non-latin-alphabet"></a>
### Languages that don't use the Latin alphabet

Currently LibreLingo doesn't have enough features to support teaching new
alphabets. Solving this is a priority, but will take time. Technically in most
cases, language pairs that use the same alphabet (for example Ukranian for
Russian speakers) should work just fine, but it hasn't been tested yet.
