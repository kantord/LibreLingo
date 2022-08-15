<script lang="typescript" context="module">
  import NavBar from "../components/NavBar.svelte"
  import Title from "lluis/Title.svelte"
  import Column from "lluis/Column.svelte"
  import Columns from "lluis/Columns.svelte"
  import Button from "../../../lluis/Button.svelte"
</script>

<svelte:head>
  <title>Fonts Visual Guide - LibreLingo</title>
</svelte:head>

<NavBar />

<main class="main-content layout-container" role="main">
  <Columns>
    <Column size="10" centered>
      <h1>Fonts Visual Guide</h1>
      <hr>
      <h2>Sizes</h2>
      <div class="h1">Title 1</div>
      <div class="h2">Title 2</div>
      <div class="h3">Title 3</div>
      <div class="h4">Title 4</div>
      <div class="h5">Title 5</div>
      <div class="h6">Title 6</div>
      <hr>
      <h2>Buttons</h2>
      <div>
        <Button>Click me</Button>
      </div>
      <div>
        <Button size="small">Click me</Button>
      </div>
      <div>
        <Button size="large">Click me</Button>
      </div>
      <div>
        <Button size="small" style="primary">Click me</Button>
      </div>
      <div>
        <Button size="large" style="primary">Click me</Button>
      </div>
      <div>
        <Button loading style="primary">Click me</Button>
      </div>
    </Column>
  </Columns>
</main>
