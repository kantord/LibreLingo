<script lang="typescript" context="module">
  import MarkDownPage, { getMarkDownData } from "../components/MarkDownPage.svelte"
  import { _ } from "svelte-i18n"

  export async function preload() {
      return {
          readmeHTML: (
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              await getMarkDownData(await import("../../../../README.md"))
          ).contents.split("<h2>Tech stack</h2>")[0],
      }
  }
</script>

<script lang="typescript">
  export let readmeHTML
</script>

<MarkDownPage
  readmeHTML="{readmeHTML}"
  title="About LibreLingo"
  description="{$_('about.meta.description')}"
/>
