<script context="module">
  export async function preload(page, session) {
    const { courseName } = page.params;
    const { modules, languageName } = await import(
      `../../../courses/${courseName}/courseData.json`
    );

    return { courseName, modules, languageName };
  }
</script>

<script>
  import db from "../../../db";
  import SkillCard from "../../../components/SkillCard.svelte";

  let foodSkillAvailable = false;
  export let courseName = null;
  export let modules = null;
  export let languageName = null;

  db &&
    db.get("foo_bar").then(function(doc) {
      foodSkillAvailable = true;
    });
</script>

<svelte:head>
  <title>LibreLingo - learn {languageName} for free</title>
</svelte:head>

{#each modules as { title, skills }}
  <section class="section">
    <div class="container">
      <h2 class="is-size-2">{title}</h2>
      <div class="columns is-multiline">
        {#each skills as skill}
          <div class="column is-one-third-desktop is-half-tablet">
            <SkillCard
              {...{ ...skill }}
              practiceHref="{`/course/${courseName}/skill/${skill.practiceHref}`}" />
          </div>
        {/each}
      </div>
    </div>
  </section>
{/each}

<style>
  @import "../../../variables";
  .container {
    padding-right: 20px;
    padding-left: 20px;
  }
</style>
