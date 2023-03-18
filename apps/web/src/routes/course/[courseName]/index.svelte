<script lang="ts" context="module">
  export async function preload(page) {
    const { get_course } = await import("../../../course-client")
    const { courseName } = page.params

    return await get_course({ courseName })
  }
</script>

<script lang="ts">
  import SkillCard from "../../../components/SkillCard/index.svelte"
  import NavBar from "../../../components/NavBar.svelte"
  import Column from "lluis/Column.svelte"
  import Columns from "lluis/Columns.svelte"
  import Footer from "lluis/Footer.svelte"
  import Page from "lluis/Page.svelte"
  import type { ModulesType } from "../../../types/ModulesType"
  import Heading from "../../../../../lluis/Heading.svelte"

  export let courseName = null
  export let modules: ModulesType = null
  export let languageName = null
  export let repositoryURL = null
</script>

<svelte:head>
  <title>LibreLingo - learn {languageName} for free</title>
</svelte:head>

<Page>
  <NavBar hasAuth {repositoryURL} />
  {#each modules as { title, skills }}
    <section class="section">
      <div class="container">
        <Heading level={2}>{title}</Heading>
        <Columns multiline>
          {#each skills as skill}
            <Column sizeDesktop="1/3" sizeTablet="1/2">
              <SkillCard
                {...{ ...skill }}
                practiceHref={`/course/${courseName}/skill/${skill.practiceHref}`}
              />
            </Column>
          {/each}
        </Columns>
      </div>
    </section>
  {/each}
  <Footer />
</Page>
