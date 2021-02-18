<script lang="typescript" context="module">
  import NavBar from "../components/NavBar.svelte"
  import Title from "lluis/Title.svelte"
</script>

<svelte:head>
  <title>Fonts Visual Guide - LibreLingo</title>
</svelte:head>

<NavBar dark />
<section class="section">
  <div class="container">
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-8">
        <div class="tile is-parent is-vertical">
          <Title size="{2}" align="centered">Fonts Visual Guide</Title>
          <article class="tile is-child notification is-primary p-4">
            <Title size="{3}" textWeight="semibold">Types of headings</Title>
            <Title>Title</Title>
            <Title isSubtitle="{true}">Subtitle</Title>
          </article>
          <article class="tile is-child notification is-primary p-4">
            <Title size="{3}" textWeight="semibold">Sizes</Title>
            <Title size="{1}">Title 1</Title>
            <Title size="{2}">Title 2</Title>
            <Title size="{3}">Title 3</Title>
            <Title size="{4}">Title 4</Title>
            <Title size="{5}">Title 5</Title>
            <Title size="{6}">Title 6</Title>
          </article>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
  body {
    font-family: "Open Sans", sans-serif;
  }
</style>
