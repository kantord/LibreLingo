<script lang="ts" context="module">
  import NavBar from "../components/NavBar.svelte"
  import Content from "lluis/Content.svelte"
  import Stack from "lluis/Stack.svelte"
  import Button from "../../../lluis/Button.svelte"
</script>

<svelte:head>
  <title>Fonts Visual Guide - LibreLingo</title>
</svelte:head>

<NavBar hasAuth />

<main class="main-content container-md">
  <Content>
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
    <Stack>
      <Button>Click me</Button>
    </Stack>
    <Stack>
      <Button size="small">Click me</Button>
    </Stack>
    <Stack>
      <Button size="large">Click me</Button>
    </Stack>
    <Stack>
      <Button size="small" style="primary">Click me</Button>
    </Stack>
    <Stack>
      <Button size="large" style="primary">Click me</Button>
    </Stack>
    <Stack>
      <Button loading style="primary">Click me</Button>
    </Stack>
    <Stack>
      <Button size="small" style="accent">Click me</Button>
    </Stack>
    <Stack>
      <Button size="large" style="accent">Click me</Button>
    </Stack>
    <Stack>
      <Button loading style="accent">Click me</Button>
    </Stack>
  </Content>
</main>
