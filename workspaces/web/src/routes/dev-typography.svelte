<script lang="typescript" context="module">
  import NavBar from "../components/NavBar.svelte"
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
            <h1 class="is-size-2 has-text-centered title">Fonts Visual Guide</h1>
            <article class="tile is-child notification is-primary p-4">
              <h1 class="is-size-3 has-text-weight-semibold">Types of headings</h1>    
              <h1 class="title">Title</h1>
              <h2 class="subtitle">Subtitle</h2>
            </article>
            <article class="tile is-child notification is-primary p-4">
              <h1 class="is-size-3 has-text-weight-semibold">Sizes</h1>
              <h1 class="title is-1">Title 1</h1>
              <h2 class="title is-2">Title 2</h2>
              <h3 class="title is-3">Title 3</h3>
              <h4 class="title is-4">Title 4</h4>
              <h5 class="title is-5">Title 5</h5>
              <h6 class="title is-6">Title 6</h6>
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
