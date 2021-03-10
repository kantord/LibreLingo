# LibreLingo Course Documentation

This document describes how the course system is laid out on LibreLingo and information on how to contribute to the course data.

This document is the first step whether you want to edit an existing course, contribute a translation to an existing course or create a new one from scratch. This is also a good resource to read if you just want to learn about the course system in general.

---

**NOTE**: If you are not clear about anything on this document feel free to post on [Discussions](https://github.com/kantord/LibreLingo/discussions) so that the community can help you further.

---

**Table of Contents:**
- [Navigation](#navigation)
- [Basics](#basics)
  - [Terminology](#terminology)
  - [Exploring the courses](#exploring-courses)
  - [Things to do for new contributors](#things-new-contributors)
- [Courses currently open for contributions](#courses-open)
  - [For English speakers](#courses-from-english)
- [Caution](#caution)
  - [Languages that don't use the Latin alphabet](#non-latin-alphabet)

## Navigation

- If you are totally new to the project, read the [Basics](#basics) section below first. It will give you a general understanding about things.
- If you want to edit existing courses or translate them, go to [this page](editing-courses.md).
- If you want to create new courses (typically suited for course designers or advanced users), go to [this page](creating-courses.md).


## Basics

### Terminology

If you want to work on courses you need to have an idea on some basic terminology. We have _Courses_, _Modules_ and _Skills_. In a nutshell:

- A **Course** is a set of modules. There is typically one course for each language. e.g. `spanish-from-english`, `french-from-english`.
- A **Module** is a set of lessons. They act like groups to keep lessons more organized.
- A **Skill** is a lesson with a set of questions.

So the hierarchy would be: `Courses > Modules > Skills`

There are also languages to and from which users will learn.

- **Destination language** is the language which you want to test for or teach.
- **Target audience's language** is the language of the users for which the course is made.

The course directory name is usually structured in `<destination language>-from-<target audience's language>`. e.g. `french-from-english` teaches French to English speakers.

<a id="exploring-courses"></a>
### Exploring the courses

To have a better understanding on how courses work, you can explore how the course files are organized on this repository.

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
