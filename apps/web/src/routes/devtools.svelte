<script lang="typescript" context="module">
  export async function preload() {
      try {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          const fs = require("fs")
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          const util = require("util")
          const readdir = util.promisify(fs.readdir)

          return {
              testSkills: (await readdir("./src/courses/test/challenges")).map(
                  (fname) => fname.split(".")[0]
              ),
          }
      } catch(error) {
          // do nothing
      }
  }
</script>

<script lang="typescript">
  import NavBar from "../components/NavBar.svelte"
  import Content from "lluis/Content.svelte"

  export let testSkills = []
</script>

<svelte:head>
  <title>LibreLingo - Development</title>
</svelte:head>

<NavBar dark />

<section class="section">
  <div class="container">
    <Content>
      <h1 class="is-size-1">Development tools</h1>
      <h2 class="is-size-2">Test pages</h2>
      <ul>
        <li><a href="/course/test">Test course</a></li>
        {#each testSkills as testSkill}
          <li>
            <a target="_blank" href="/course/test/skill/{testSkill}">
              Test skill:
              <b>{testSkill}</b>
            </a>
          </li>
        {/each}
      </ul>
    </Content>
  </div>
</section>
