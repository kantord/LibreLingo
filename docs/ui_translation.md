# User interface translation

## Contribute to UI Translation (Non-Technical)

POEditor is an online platform for collaborative translation and localization management. It allows contributors, both technical and non-technical, to help translate the user interface of LibreLingo into various languages.

To help translate the user interface of LibreLingo and make it more accessible,
[start by joining the project on POEditor here](https://poeditor.com/join/project?hash=jKiKfen2Ye).

## Technical Overview of UI Translation in LibreLingo

This section provides a brief technical overview of UI translation in LibreLingo using the svelte-i18n library for developers.

### Using the Translate Component

Import the Translate component from Translate.svelte and use it as an HTML tag with the key attribute set to the translation key. The text inside the tag serves as a fallback when a translation is not available.

```javascript
import Translate from "../../Translate.svelte";

// ...
<Translate key="course_page.button_practice">Practice</Translate>
<Translate key="course_page.button_continue">Continue learning</Translate>
<Translate key="course_page.button_learn">Learn</Translate>
```

### Translation Keys

Translation keys are unique identifiers used to reference text in the user interface. Contributors will translate these keys to other languages in POEditor.

#### Adding new translation keys

To add new translation keys, please open a [new issue](https://github.com/LibreLingo/LibreLingo/issues/new) on GitHub as this requires a maintainer to import
new keys in POEditor.

### Deliberate Lack of Support for Variables in Translated Text

LibreLingo avoids using variables in translated text to ensure quality and natural flow of translations across different languages, as using variables can lead to difficult problems for translators. Instead, provide separate translation keys for different variations of a sentence, allowing translators to provide natural-sounding translations for each specific case.

### Translating New Pages

By default, pages will be translated to English or the language of the user's browser. However, for pages inside a course, the pages should be translated to the source language of the course to have consistency. To achieve this, you can copy the logic from an existing page and adapt it to the new page.

Here's a simplified code example to help you understand the process:

```javascript
<script lang="ts" context="module">
  export async function preload(page) {
    const { get_course } = await import("../../../course-client")
    const { courseName } = page.params

    return await get_course({ courseName })
  }
</script>

<script lang="ts">
  import { locale } from "svelte-i18n"

  export let uiLanguage = null

  locale.set(uiLanguage)
</script>
```

In the example above, the [preload function](https://sapper.svelte.dev/docs#Pages) imports and retrieves the course data. Then, the `uiLanguage` variable is set to the desired source language of the course, and the `locale.set(uiLanguage)` function is used to set the translation language for the page.

### Updating Translations

Translations are updated periodically in LibreLingo, but this is currently a manual process and is not automated yet. If you want translations to be uploaded and integrated into the project, you can create a [new issue](https://github.com/LibreLingo/LibreLingo/issues/new) on GitHub asking for the translations to be updated.

To request an update, visit the LibreLingo GitHub repository, create a [new issue](https://github.com/LibreLingo/LibreLingo/issues/new), and provide the necessary details about the translations you've contributed. A maintainer will then manually update the translations as needed.
