<script>
  import db from "../db";

  let foodSkillAvailable = false;

  db &&
    db.get("foo_bar").then(function(doc) {
      foodSkillAvailable = true;
    });
</script>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<a href="skill/animals">Animals</a>
{#if foodSkillAvailable}
  <a href="skill/food">Food</a>
{/if}
