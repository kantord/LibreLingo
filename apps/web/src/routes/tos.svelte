<script lang="typescript" context="module">
  import MarkDownPage from "../components/MarkDownPage.svelte"
  import parseMarkdown from "../utils/parseMarkdown"

  export async function preload() {
    // ignored because TypeScript doesn't seem to recognize Markdown files
    // as modules
    const { default: rawMarkdown } = await import(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      "../../../../docs/website_tos.md"
    )

    return {
      readmeHTML: parseMarkdown(rawMarkdown),
    }
  }
</script>

<script lang="typescript">
  export let readmeHTML: string
</script>

<MarkDownPage {readmeHTML} title="Terms of Service" />
