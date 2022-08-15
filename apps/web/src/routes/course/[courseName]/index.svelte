<script lang="typescript" context="module">
  export async function preload(page) {
      const { get_course } = await import("../../../course-client")
      const { courseName } = page.params

      return await get_course({ courseName })
  }
</script>

<script lang="typescript">
  import SkillCard from "../../../components/SkillCard/index.svelte"
  import NavBar from "../../../components/NavBar.svelte"
  import Column from "lluis/Column.svelte"
  import Columns from "lluis/Columns.svelte"
  import Content from "lluis/Content.svelte"
  import Footer from "lluis/Footer.svelte"
  import type { ModulesType } from "../../../types/ModulesType"

  export let courseName = null
  export let modules: ModulesType = null
  export let languageName = null
  export let repositoryURL = null
</script>

<svelte:head>
  <title>LibreLingo - learn {languageName} for free</title>
</svelte:head>

<NavBar hasAuth repositoryURL="{repositoryURL}" />

<main class="main-content layout-container" role="main">
  <Columns>
    <Column size="8" centered>
      {#each modules as { title, skills }}
        <h2>{title}</h2>
        <div class="grid skill-cards">
          {#each skills as skill}
            <SkillCard
              {...{ ...skill }}
              practiceHref="{`/course/${courseName}/skill/${skill.practiceHref}`}"
            />
          {/each}
        </div>
      {/each}
    </Column>
  </Columns>
</main>

<Footer>
  <Content>
    <div class="layout-container">
      <Columns>
        <Column size="6">
          <strong>LibreLingo</strong>
          by
          <a href="https://github.com/kantord">Dániel Kántor</a>
          and
          <a href="https://github.com/LibreLingo/LibreLingo#contributors">
            various contributors
          </a>
          .
        </Column>
        <Column size="6">
          The source code is licensed
          <a href="https://opensource.org/licenses/AGPL-3.0">AGPL-3.0.</a>
          <br />
          <a href="https://github.com/LibreLingo/LibreLingo">
            Source code available on GitHub.
          </a>
        </Column>
      </Columns>
    </div>
  </Content>
</Footer>
