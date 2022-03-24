<script lang="typescript" context="module">
  import { get_skill_data } from "../../../../../course-client"

  export async function preload(page) {
    const { skillName, courseName } = page.params

    if (courseName === "preview") {
      const gistId = page.query.gistId
      const skillNameFromQuery = page.query.skillName

      return {
        loading: true,
        preview: {
          type: skillName,
          gistId,
          skillName: skillNameFromQuery,
        },
      }
    }

    return {
      ...(await get_skill_data({ skillName, courseName })),
      loading: false,
      preview: null,
    }
  }
</script>

<script lang="typescript">
  import ChallengeScreen from "../../../../../components/ChallengeScreen.svelte"
  import NavBar from "../../../../../components/NavBar.svelte"
  import { sortChallengeGroups } from "./_logic"

  export let preview = null
  export let loading = true
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

  // Fetching preview data
  if (preview !== null) {
    get_skill_data({
      gistId: preview.gistId,
      skillName: preview.skillName,
      courseName: "preview",
    }).then((skillData) => {
      rawChallenges = skillData.rawChallenges
      languageName = skillData.languageName
      languageCode = skillData.languageCode
      specialCharacters = skillData.specialCharacters
      repositoryURL = skillData.repositoryURL
      skillName = skillData.skillName
      skillId = skillData.skillId
      challengesPerLevel = skillData.challengesPerLevel
      courseURL = skillData.courseURL
      expectedNumberOfChallenges = Math.max(
        4,
        Math.round(challengesPerLevel * 1.2)
      )
      loading = false
    })
  }
</script>

<svelte:head>
  <title>LibreLingo - learn {skillName} in {languageName} for free</title>
</svelte:head>

<NavBar {repositoryURL} />

{#if !loading}
  <ChallengeScreen
    {expectedNumberOfChallenges}
    {skillId}
    {rawChallenges}
    {languageName}
    {languageCode}
    {specialCharacters}
    {sortChallengeGroups}
    {courseURL}
  />
{/if}
