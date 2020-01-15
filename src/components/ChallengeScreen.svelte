<script>
  import sound from "../media/sound";
  import DeckChallenge from "./DeckChallenge";
  import ShortInputChallenge from "./ShortInputChallenge";
  import FanfareScreen from "./FanfareScreen";
  import ProgressBar from "./ProgressBar";
  import shuffle from "lodash.shuffle";
  import { fade } from "svelte/transition";

  export let rawChallenges;
  export let languageName;
  export let languageCode;
  export let sortChallengeGroups;
  export let courseURL;
  let challenges = sortChallengeGroups(shuffle(rawChallenges));
  let remainingChallenges = [...challenges];
  let currentChallenge = remainingChallenges.shift();
  let solvedChallenges = [];
  let progress = 0;

  const preloadImage = imageName => {
    if (typeof Image === "undefined") return;
    new Image().src = `images/${imageName}`;
  };

  challenges
    .filter(({ type }) => type === "card")
    .map(({ pictures }) => pictures.map(preloadImage));

  $: alternativeChallenges =
    currentChallenge &&
    challenges.filter(({ id }) => id !== currentChallenge.id);

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
    if (remainingChallenges) {
      currentChallenge = remainingChallenges.shift();
    }
  };
</script>

{#if currentChallenge}

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
              {languageCode}
              {registerResult}
              {resolveChallenge}
              {challenge} />
          {/if}
        </div>
      {/if}
    {/each}
  </div>
{/if}

{#if !currentChallenge}
  <div class="container">
    <FanfareScreen {courseURL} {rawChallenges} />
  </div>
{/if}
