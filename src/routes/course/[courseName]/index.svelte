<script context="module">
  export async function preload(page, session) {
    const { courseName } = page.params
    const { modules, languageName } = await import(
      `../../../courses/${courseName}/courseData.json`
    )

    return { courseName, modules, languageName }
  }
</script>

<script>
  import SkillCard from "../../../components/SkillCard.svelte"
  import NavBar from "../../../components/NavBar.svelte"

  export let courseName = null
  export let modules = null
  export let languageName = null
</script>

<svelte:head>
  <title>LibreLingo - learn {languageName} for free</title>
</svelte:head>

<NavBar dark />

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

<footer class="footer">
  <div class="content">

    <div class="columns">
      <div class="column">
        <strong>LibreLingo</strong>
        by
        <a href="https://github.com/kantord">Dániel Kántor</a>
        and
        <a href="https://github.com/kantord/LibreLingo#contributors-">
          various contributors
        </a>
        .
      </div>
      <div class="column">
        The source code is licensed
        <a href="https://opensource.org/licenses/AGPL-3.0">AGPL-3.0.</a>
        <br />
        <a href="https://github.com/kantord/LibreLingo">
          Source code available on GitHub.
        </a>
      </div>
      <div class="column">
        <a
          class="github-button"
          href="https://github.com/kantord/LibreLingo"
          data-size="large"
          data-show-count="true"
          aria-label="Star kantord/LibreLingo on GitHub">
          Star
        </a>
        <a
          class="github-button"
          href="https://github.com/kantord/LibreLingo/issues"
          data-size="large"
          data-show-count="true"
          aria-label="Issue kantord/LibreLingo on GitHub">
          Issue
        </a>
      </div>
    </div>
    <p></p>
  </div>
</footer>

<style>
  @import "../../../variables";
  .container {
    padding-right: 20px;
    padding-left: 20px;
  }
</style>
