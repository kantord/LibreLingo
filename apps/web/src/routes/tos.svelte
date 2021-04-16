<script lang="typescript" context="module">
  import MarkDownPage, { getMarkDownData } from "../components/MarkDownPage.svelte"

  export async function preload() {
      return {
          readmeHTML: await getMarkDownData(
              // ignored because TypeScript doesn't seem to recognize Markdown files
              // as modules
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              await import("../../../../docs/website_tos.md")
          ),
      }
  }
</script>

<script lang="typescript">
  export let readmeHTML: string
</script>

<MarkDownPage readmeHTML="{readmeHTML}" title="Terms of Service" />
