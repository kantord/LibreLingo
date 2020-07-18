<script context="module">
  import MarkDownPage, { getMarkDownData } from "../components/MarkDownPage"

  export async function preload(page, session) {
    return {
      readmeHTML: await getMarkDownData(
        await import("../../../../docs/LICENSE.md")
      ),
    }
  }
</script>

<script>
  export let readmeHTML
</script>

<MarkDownPage {readmeHTML} title="License" />
