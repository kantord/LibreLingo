<script context="module">
  import MarkDownPage, { getMarkDownData } from "../components/MarkDownPage"

  export async function preload(page, session) {
    return {
      readmeHTML: (
        await getMarkDownData(await import("../../../../docs/website_tos.md"))
      ).contents.split("<h2>Tech stack</h2>")[0],
    }
  }
</script>

<script>
  export let readmeHTML
</script>

<MarkDownPage {readmeHTML} />
