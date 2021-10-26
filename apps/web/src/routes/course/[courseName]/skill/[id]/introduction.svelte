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
                      courseName,
                      title: skill.title,
                      practiceHref: skill.practiceHref,
                      readmeHTML: await getMarkDownData(await import(`../../../../../courses/${courseName}/introduction/${skill.introduction}`))
                  }
              }
          }
      }
  }
</script>

<script lang="typescript">
  import Button from "lluis/Button.svelte"

  export let readmeHTML: string
  export let title: string
  export let practiceHref: string
  export let courseName: string
</script>

<MarkDownPage
  readmeHTML="{readmeHTML}"
  title={title}
  description="{$_('about.meta.description')}"
>
  <div>
    <Button style="primary" href="{`course/${courseName}/skill/${practiceHref}`}">Practice {title}</Button>
  </div>
</MarkDownPage>

<style>
  div {
    margin-bottom: var(--spacing-large);
  }
</style>
