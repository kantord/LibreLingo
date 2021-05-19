<script lang="typescript" context="module">
  import MarkDownPage, {
      getMarkDownData,
} from "../../../../../components/MarkDownPage.svelte"
  import { _ } from "svelte-i18n"

  export async function preload(page) {
      const { courseName, id } = page.params
      const { modules } = await import(`../../../../../courses/${courseName}/courseData.json`)
      for (const module of modules) {
          for (const skill of module.skills) {
              if (skill.practiceHref === id) {
                  return {
                      title: skill.title,
                      readmeHTML: await getMarkDownData(await import(`../../../../../courses/${courseName}/introduction/${skill.introduction}`))
                  }
              }
          }
      }
  }
</script>

<script lang="typescript">
  export let readmeHTML
  export let title
</script>

<MarkDownPage
  readmeHTML="{readmeHTML}"
  title={title}
  description="{$_('about.meta.description')}"
/>
