<script lang="typescript" context="module">
  import { _ } from "svelte-i18n"

  export async function preload(page) {
      const { courseName, skillName } = page.params

      return get_skill_introduction({ courseName, skillName })
  }
</script>

<script lang="typescript">
  import Button from "lluis/Button.svelte"
  import { get_skill_introduction } from "../../../../../course-client"
  import MarkDownPage from "../../../../../components/MarkDownPage.svelte"

  export let readmeHTML: string
  export let title: string
  export let practiceHref: string
  export let courseName: string


</script>

<MarkDownPage
  readmeHTML="{readmeHTML}"
  title="{title}"
  description="{$_('about.meta.description')}"
>
  <div>
    <Button
      style="primary"
      href="{`course/${courseName}/skill/${practiceHref}`}"
      >Practice {title}</Button
    >
  </div>
</MarkDownPage>

<style>
  div {
    margin-bottom: var(--spacing-large);
  }
</style>
