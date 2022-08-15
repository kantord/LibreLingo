<script lang="typescript">
  import NavBar from "../components/NavBar.svelte"
  import Content from "lluis/Content.svelte"
  import Columns from "lluis/Columns.svelte"
  import Column from "lluis/Column.svelte"

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

<main class="main-content layout-container" role="main">
  <Columns>
    <Column size="10" centered>
      <h1 class="title">{title}</h1>
      <slot />
      <Content>
        {@html readmeHTML}
      </Content>
    </Column>
  </Columns>
</main>