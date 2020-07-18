<script context="module">
  import MarkDownPage from "../components/MarkDownPage"

  export async function getMarkDownData(markdownModule) {
    const remark = await require("remark")
    const markdown = await import("remark-parse")
    const html = await import("rehype-stringify")
    const remark2rehype = await import("remark-rehype")
    const format = await import("rehype-format")

    const readmeHTML = await remark()
      .use(markdown.default, { gfm: true, commonmark: true })
      .use(remark2rehype.default)
      .use(format.default)
      .use(html.default)
      .process(markdownModule.default)

    return readmeHTML
  }
</script>

<script>
  import NavBar from "../components/NavBar"
  import Button from "lluis/Button"

  export let readmeHTML
  export let title
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<NavBar dark />

<section class="hero is-primary">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">About LibreLingo</h1>
      <div class="section content box">
        {@html readmeHTML}
        <hr />
        <Button primary href="https://github.com/kantord/LibreLingo">
          Continue reading on GitHub
        </Button>
      </div>
    </div>
  </div>
</section>
