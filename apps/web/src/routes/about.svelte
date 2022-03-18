<script lang="typescript" context="module">
  import MarkDownPage from "../components/MarkDownPage.svelte"
  import parseMarkdown from "../utils/parseMarkdown"
  import { _ } from "svelte-i18n"

  export async function preload() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { default: rawMarkdown } = await import("../../../../README.md")

    return {
      readmeHTML: parseMarkdown(rawMarkdown).split("<h2>Tech stack</h2>")[0],
    }
  }
</script>

<script lang="typescript">
  export let readmeHTML
</script>

<MarkDownPage
  {readmeHTML}
  title="About LibreLingo"
  description={$_("about.meta.description")}
/>
