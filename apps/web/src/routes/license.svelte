<script lang="typescript" context="module">
  import MarkDownPage, { getMarkDownData } from "../components/MarkDownPage"

  export async function preload() {
      return {
          readmeHTML: await getMarkDownData(
              await import("../../../../docs/LICENSE.md")
          ),
      }
  }
</script>

<script lang="typescript">
  export let readmeHTML
</script>

<MarkDownPage readmeHTML="{readmeHTML}" title="License" />
