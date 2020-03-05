<script context="module">
  export async function preload(page, session) {
    const { id, courseName } = page.params;
    const { languageName, languageCode, specialCharacters } = await import(
      `../../../../courses/${courseName}/courseData.json`
    );
    const rawChallenges = await import(
      `../../../../courses/${courseName}/challenges/${id}.json`
    );

    return {
      rawChallenges: Array.from(rawChallenges.default),
      languageName,
      languageCode,
      specialCharacters,
      id,
      courseURL: `/course/${courseName}`
    };
  }
</script>

<script>
  import ChallengeScreen from "../../../../components/ChallengeScreen";
  import NavBar from "../../../../components/NavBar";
  import { sortChallengeGroups } from "./_logic";
  export let rawChallenges;
  export let languageName;
  export let languageCode;
  export let specialCharacters;
  export let id;
  export let courseURL;
</script>

<svelte:head>
  <title>LibreLingo - learn {id} in {languageName} for free</title>
</svelte:head>

<NavBar dark is_hidden_mobile />

<ChallengeScreen
  {rawChallenges}
  {languageName}
  {languageCode}
  {specialCharacters}
  {sortChallengeGroups}
  {courseURL} />
