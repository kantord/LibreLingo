<script lang="typescript" context="module">
  export async function getMarkDownData(markdownModule) {
      const remark = await require("remark")
      const markdown = await import("remark-parse")
      const html = await import("rehype-stringify")
      const remark2rehype = await import("remark-rehype")
      const format = await import("rehype-format")

      return await remark()
          .use(markdown.default, { gfm: true, commonmark: true })
          .use(remark2rehype.default)
          .use(format.default)
          .use(html.default)
          .process(markdownModule.default)
  }
</script>

<script lang="typescript">
  import NavBar from "../components/NavBar"
  import Content from "lluis/Content"

  export let readmeHTML
  export let title
  export let description
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content="{description}" />
</svelte:head>

<NavBar dark />

<section class="hero is-primary">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">{title}</h1>
      <div class="section box">
        <Content>
          {@html readmeHTML}
        </Content>
      </div>
    </div>
  </div>
</section>
