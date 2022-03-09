<script lang="typescript" context="module">
  import { get_skill_data } from "../../../../../course-client"

  export async function preload(page) {
      const { skillName, courseName } = page.params
      return get_skill_data({ skillName, courseName })
  }
</script>

<script lang="typescript">
  import ChallengeScreen from "../../../../../components/ChallengeScreen.svelte"
  import NavBar from "../../../../../components/NavBar.svelte"
  import { sortChallengeGroups } from "./_logic"

  export let rawChallenges
  export let languageName: string
  export let languageCode: string
  export let specialCharacters: Array<string>
  export let repositoryURL: string
  export let skillName: string
  export let courseURL: string
  export let skillId: string
  export let challengesPerLevel: number

  let expectedNumberOfChallenges = Math.max(
      4,
      Math.round(challengesPerLevel * 1.2)
  )
</script>

<svelte:head>
  <title>LibreLingo - learn {skillName} in {languageName} for free</title>
</svelte:head>

<NavBar repositoryURL="{repositoryURL}" />

<ChallengeScreen
  expectedNumberOfChallenges="{expectedNumberOfChallenges}"
  skillId="{skillId}"
  rawChallenges="{rawChallenges}"
  languageName="{languageName}"
  languageCode="{languageCode}"
  specialCharacters="{specialCharacters}"
  sortChallengeGroups="{sortChallengeGroups}"
  courseURL="{courseURL}"
/>
