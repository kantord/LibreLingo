# Creating and editing LibreLingo courses

LibreLingo courses consist of files that contain course content. These files
are organized in a specific directory structure.

A simplified example of the directory structure of a LibreLingo course:

```
courses/french-from-english/
courses/french-from-english/basics
courses/french-from-english/basics/module.yaml
courses/french-from-english/basics/skills
courses/french-from-english/basics/skills/hello.yaml
courses/french-from-english/course.yaml
```

LibreLingo courses can be published in different formats. One such format is
the LibreLingo web app.

When you are working with LibreLingo courses, you'll be mostly editing the
`.yaml` files as seen above. The standard way of editing LibreLingo courses is
using GitHub.

If you don't know how to use GitHub, it might be useful to check out these
guides:

- [Creating new files on GitHub](https://docs.github.com/en/github/managing-files-in-a-repository/creating-new-files)
- [Editing files on GitHub](https://docs.github.com/en/github/managing-files-in-a-repository/editing-files-in-another-users-repository)


## Editing skills

If you are contributing to existing courses, the thing you are most likely
to do is edit existing skills.

Skills are written as YAML files with a specific structure. From our example
above, the YAML file corresponding to the "hello" skill would be
`courses/french-from-english/basics/skills/hello.yaml`.
