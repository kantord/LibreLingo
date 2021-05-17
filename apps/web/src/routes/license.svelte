<script lang="typescript" context="module">
  import MarkDownPage, {
      getMarkDownData,
  } from "../components/MarkDownPage.svelte"

  export async function preload() {
      return {
          readmeHTML: await getMarkDownData(
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              await import("../../../../docs/LICENSE.md")
          ),
      }
  }
</script>

<script lang="typescript">
  export let readmeHTML: string
</script>

<MarkDownPage readmeHTML="{readmeHTML}" title="License" />
