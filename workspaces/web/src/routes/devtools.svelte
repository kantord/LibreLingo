<script lang="typescript" context="module">
  export async function preload(page, session) {
    if (!process.browser) {
      const fs = require("fs")
      const util = require("util")
      const readdir = util.promisify(fs.readdir)

      return {
        testSkills: (await readdir("./src/courses/test/challenges")).map(
          (fname) => fname.split(".")[0]
        ),
      }
    }
  }
</script>

<script lang="typescript">
  import NavBar from "../components/NavBar"
  import Mascot from "../components/Mascot"
  import TwitterButton from "../components/TwitterButton"
  import GitHubButton from "../components/GitHubButton"
  import Column from "lluis/Column"
  import Columns from "lluis/Columns"

  export let testSkills = []
</script>

<svelte:head>
  <title>LibreLingo - Development</title>
</svelte:head>

<NavBar dark />

<section class="section">
  <div class="container">
    <div class="content">
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
    </div>
  </div>
</section>
