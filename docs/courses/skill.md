# LibreLingo Documentation on Skill

A **Skill** resides below a Module within the course structure. It's the lowest element in the course hierarchy. It contains data regarding what questions LibreLingo will ask the users.

A skill is usually centered around a specific theme. This could be introducing a new grammar concept or just vocabulary to talk about a certain topic.

To get a better understanding, you can read the [course basics](README.md#basics).

---

**Confused?**
[Ask people](https://github.com/kantord/LibreLingo/discussions) on GitHub Discussions.

---

**Table of Contents:**
- [Tree structure](#tree-structure)
- [`(skill_name).yaml`](#yaml)
- [Data breakdown](#data-breakdown)
- [Creating new skills](#creating-new)
- [Examples of editing a skill](#example-edit)
- [Tips for creating good skills](#tips)
- [`(skill_name).md`](#markdown)

## Tree structure

A typical tree structure for skills under a module is as follows:

```
courses/spanish-from-english/basics/skills/
├── animals.yaml
├── clothes.yaml
├── food.yaml
├── nature.yaml
├── plurals.yaml
├── professions.yaml
├── verb_plurals.yaml
└── verbs.yaml
```

Here, `animals.yaml`, `clothes.yaml` and `food.yaml` etc. are skills. These skill files are kept inside a `skills` folder. The YAML files contain information about the skill (see below).

Skill yaml filenames should not have spaces and should be written in `slug-form`. The human friendly `Name` in the yaml however, can contain uppercase and spaces.

<a id="yaml"></a>
## `(skill_name).yaml`

As an example, let's look into `courses/french-from-english/basics/skills/hello.yaml` file which looks like this:

```yaml
Skill:
  Id: 33bfee7d-de74-4362-bf15-ce165add2dc8
  Name: Hello
  Thumbnails:
    - people1
    - woman1
    - man1

New words:
  - Word: l'homme
    Translation: the man
    Images:
      - man1
      - man2
      - man3

  - Word: la femme
    Synonyms:
      - la dame
    Translation: the woman
    Also accepted:
      - the female

Phrases:
  - Phrase: La femme dit bonjour
    Alternative versions:
      - la femme dit salut
    Translation: The woman says hello
    Alternative translations:
      - The woman says hi

  - Phrase: L'homme dit bonjour
    Alternative versions:
      - L'homme dit salut
    Translation: The man says hello
    Alternative translations:
      - The man says hi

Mini-dictionary:
  French:
    - dit: says
    - bonjour:
        - hello
        - hi
    - L'homme: the man

  English:
    - says: dit
    - hello:
        - bonjour
        - salut
```

### Data breakdown

**`Skill`** has information about the skill.
- `Skill > Name`: The human friendly name of the skill.
- `Skill > Id`: The ID of the course. **NOTE:** This should be unchanged if you're translating or editing existing course. Only if you're creating a new course, this should have a unique [UUID v4](https://www.uuidgenerator.net/version4) string. Details for which you can find [here](creating-courses.md).
- `Skill > Thumbnails`: A list of filenames of the thumbnails to be used on the course page to give an idea of the skill. A list of available files can be found on [`apps/web/static/images/`](https://github.com/kantord/LibreLingo/tree/main/apps/web/static/images). The names should be used without extension and without `_tiny` or `_tinier` parts. e.g. `banana2_tinier.jpg` should be written as `banana2`.

**`New words`** has a list of new words that the lesson asks about.
- `Word`: The word in destination language.
- `Synonyms`: A list of synonyms of the above word. (optional)
- `Translation`: Translation of the word in target audience's language.
- `Also accepted`: A list of synonyms of the `Translation` word above. (optional)
- `Images`: A list of images for the word that is defined under `Word` or `Translation` above. The image names has to be without extension and without `_tiny` or `_tinier` part.

**`Phrases`** has a list of sentences or phrases that the lession asks about.
- `Phrase`: The phrase in destination language. e.g. In this case, it's written in Spanish.
- `Alternative versions`: An alternative version of the above phrase. (optional)
- `Translation`: Translation of the phrase in target audience's language. e.g. In this case, it's written in English.

**`Mini-dictionary`** has a list of words and meanings. [TODO: Explain where and how it is used]
- `<destination language>`: A list of words in destination language as key and meaning in target audience's language.
- `<target audience's language>`: A list of words in target audience's language as key and meaning in destination language.

<a id="creating-new"></a>
## Creating new skills

Creating new skills is a matter of creating their corresponding YAML file.
That being said, there are a couple things to keep in mind:

- Skill yaml file should be inside a [module](module.md)'s `skills` directory.
- Skills should have an unique `Id`. Such identifiers can be generated using
  [this website](https://www.uuidgenerator.net/version4).
- Before skills will actually show up in the web app, they need to be added to
  a [`module.yaml`](module.md#yaml).

<a id="example-edit"></a>
## Examples of editing a skill

This is how you'd add a new alternative version to the
phrase "La femme dit bonjour":

```diff
Phrases:
  - Phrase: La femme dit bonjour
    Alternative versions:
      - La femme dit salut
+     - La madame dit salut
    Translation: The woman says hello
    Alternative translations:
      - The woman says hi
```

Keep in mind that when you add a new phrase, or a new version or translation
to a phrase, it's not automatically updating to the mini-dictionary. So you need to
add any new words there:

```diff
Mini-dictionary:
  French:
    - dit: says
+   - madame: lady
    - bonjour:
      - hello
      - hi
    - L'homme: the man
```

Also note, that the new words from each phrase listed under `Phrases` key need to be added for both the source and the target language in the `Mini-dictionary`. For example:

```yaml
Mini-dictionary:
  French:
    - dit: says
    - bonjour:
      - hello
      - hi
...
  English:
    - says: dit
    - hello:
      - bonjour
      - salut
```

Don't worry about listing the same word more than once in a course. It will not cause any issues if you do so.

<a id="tips"></a>
## Tips for creating good skills

- When it comes to teaching grammar, your main tool is to teach by example.
- Use words to teach nouns that can be demonstrated easily with pictures, such as "dog", "car", "tree", "city".
- Do not try to teach verbs, adjectives, etc. using words. Instead, use them in phrases.

<a id="markdown"></a>
## `(skill_name).md`

In order to create an introduction page for your skill, you need to create a [Markdown](https://en.wikipedia.org/wiki/Markdown)
file with the same name as your .yaml file, but with the .md extension.

Place this .md file next to the .yaml file in your skills folder like so

```
courses/spanish-from-english/basics/skills
├── animals.md
├── animals.yaml
├── clothes.yaml
├── food.yaml
├── nature.yaml
├── plurals.yaml
├── professions.yaml
├── verb_plurals.yaml
└── verbs.yaml
```

You can use this Markdown file to create a short article about the skill the user is about to learn or practice.
This can be useful to explain grammatical concepts, gotchas and learning tips about the specific skill.

