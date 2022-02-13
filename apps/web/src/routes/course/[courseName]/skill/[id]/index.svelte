<script lang="typescript" context="module">
  export async function preload(page) {
      const { id, courseName } = page.params
      const {
          languageName,
          languageCode,
          specialCharacters,
          repositoryURL,
      } = await import(`../../../../../courses/${courseName}/courseData.json`)
      const skillData = await import(
          `../../../../../courses/${courseName}/challenges/${id}.json`
      )
      const rawChallenges = skillData.challenges
      const challengesPerLevel = skillData.challenges.length / skillData.levels

      const skillId = skillData.id

      return {
          rawChallenges: Array.from(rawChallenges),
          languageName,
          languageCode,
          specialCharacters,
          repositoryURL,
          id,
          skillId,
          challengesPerLevel,
          courseURL: `/course/${courseName}`,
      }
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
  export let id: string
  export let courseURL: string
  export let skillId: string
  export let challengesPerLevel: number

  let expectedNumberOfChallenges = Math.max(
      4,
      Math.round(challengesPerLevel * 1.2)
  )
</script>

<svelte:head>
  <title>LibreLingo - learn {id} in {languageName} for free</title>
</svelte:head>

<NavBar {repositoryURL} />

<ChallengeScreen
  {expectedNumberOfChallenges}
  {skillId}
  {rawChallenges}
  {languageName}
  {languageCode}
  {specialCharacters}
  {sortChallengeGroups}
  {courseURL} />
