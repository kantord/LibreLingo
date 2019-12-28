<script context="module">
  export async function preload(page, session) {
    const { id, courseName } = page.params;
    const { languageName } = await import(
      `../../../../courses/${courseName}/courseData.json`
    );
    const rawChallenges = await import(
      `../../../../courses/${courseName}/challenges/${id}.json`
    );

    return { rawChallenges: Array.from(rawChallenges.default), languageName };
  }
</script>

<script>
  import sound from "../../../../media/sound";
  import DeckChallenge from "../../../../components/DeckChallenge";
  import ShortInputChallenge from "../../../../components/ShortInputChallenge";
  import ProgressBar from "../../../../components/ProgressBar";
  import shuffle from "lodash.shuffle";
  import { fade } from "svelte/transition";

  export let rawChallenges;
  export let languageName;
  let challenges = shuffle(rawChallenges);
  let remainingChallenges = [...challenges];
  let currentChallenge = remainingChallenges.shift();
  let solvedChallenges = [];
  let progress = 0;
  $: alternativeChallenges = challenges.filter(
    ({ id }) => id !== currentChallenge.id
  );

  $: registerResult = isCorrect => {
    if (isCorrect) {
      sound.correct.play();
      solvedChallenges.push(currentChallenge);
    } else {
      sound.wrong.play();
      remainingChallenges.push(currentChallenge);
    }

    progress = solvedChallenges.length / challenges.length;
  };

  $: resolveChallenge = () => {
    currentChallenge = remainingChallenges.shift();
  };

  const preloadImage = imageName => {
    if (typeof Image === "undefined") return;
    new Image().src = `images/${imageName}`;
  };

  challenges
    .filter(({ type }) => type === "card")
    .map(({ pictures }) => pictures.map(preloadImage));
</script>

<svelte:head>
  <title>Exercise</title>
</svelte:head>

<ProgressBar value="{progress}" />

<div class="container">
  {#each challenges as challenge, i (challenge.id)}
    {#if challenge.id === currentChallenge.id}
      <div
        out:fade="{{ duration: 300 }}"
        in:fade="{{ duration: 300, delay: 300 }}">
        {#if challenge.type === 'cards'}
          <DeckChallenge
            {currentChallenge}
            {alternativeChallenges}
            {resolveChallenge}
            {registerResult} />
        {/if}
        {#if challenge.type === 'shortInput'}
          <ShortInputChallenge
            {languageName}
            {registerResult}
            {resolveChallenge}
            {challenge} />
        {/if}
      </div>
    {/if}
  {/each}

</div>
