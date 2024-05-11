<script lang="ts" context="module">
  import MarkDownPage from "../components/MarkDownPage.svelte"
  import parseMarkdown from "../utils/parseMarkdown"

  export async function preload() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { default: rawMarkdown } = await import("../../../../docs/LICENSE.md")

    return {
      readmeHTML: parseMarkdown(rawMarkdown),
    }
  }
</script>

<script lang="ts">
  export let readmeHTML: string
</script>

<MarkDownPage {readmeHTML} title="License" />
