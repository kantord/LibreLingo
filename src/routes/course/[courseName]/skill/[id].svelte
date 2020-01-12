<script context="module">
  export async function preload(page, session) {
    const { id, courseName } = page.params;
    const { languageName } = await import(
      `../../../../courses/${courseName}/courseData.json`
    );
    const rawChallenges = await import(
      `../../../../courses/${courseName}/challenges/${id}.json`
    );

    return {
      rawChallenges: Array.from(rawChallenges.default),
      languageName,
      id
    };
  }
</script>

<script>
  import ChallengeScreen from "../../../../components/ChallengeScreen";
  import { sortChallengeGroups } from "./_logic";
  export let rawChallenges;
  export let languageName;
  export let id;
</script>

<svelte:head>
  <title>LibreLingo - learn {id} in {languageName} for free</title>
</svelte:head>

<ChallengeScreen {rawChallenges} {languageName} {sortChallengeGroups} />
