<script lang="typescript" context="module">
  export async function getMarkDownData(markdownModule) {
      const remark = await import("remark")
      const markdown = await import("remark-parse")
      const html = await import("rehype-stringify")
      const remark2rehype = await import("remark-rehype")
      const format = import("rehype-format")

      return (
          await remark.default()
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              //@ts-ignore
              .use(markdown.default, { gfm: true, commonmark: true })
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              //@ts-ignore
              .use(remark2rehype.default)
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              //@ts-ignore
              .use(format.default)
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              //@ts-ignore
              .use(html.default)
              .process(markdownModule.default)
      ).contents
  }
</script>

<script lang="typescript">
  import NavBar from "../components/NavBar.svelte"
  import Content from "lluis/Content.svelte"

  export let readmeHTML: string
  export let title: string | null
  export let description: string | null = null
</script>

<svelte:head>
  <title>{title}</title>
  {#if description}
    <meta name="description" content="{description}" />
  {/if}
</svelte:head>

<NavBar />

<section class="hero is-primary md-page">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">{title}</h1>
      <div class="section box">
        <slot />
        <Content>
          {@html readmeHTML}
        </Content>
      </div>
    </div>
  </div>
</section>
