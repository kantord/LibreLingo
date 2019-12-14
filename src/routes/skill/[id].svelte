<script context="module">
  const allRawChallenges = {
    animals: [
      {
        id: 4,
        type: "cards",
        pictures: ["lion1.jpg", "lion2.jpg", "lion3.jpg"],
        meaningInSourceLanguage: "lion",
        formInTargetLanguage: "león"
      },
      {
        id: 3,
        type: "cards",
        pictures: ["cat1.jpg", "cat2.jpg", "cat3.jpg"],
        meaningInSourceLanguage: "cat",
        formInTargetLanguage: "gato"
      },
      {
        id: 42,
        type: "cards",
        pictures: ["dog1.jpg", "dog2.jpg", "dog3.jpg"],
        meaningInSourceLanguage: "dog",
        formInTargetLanguage: "perro"
      },
      {
        id: 888,
        type: "cards",
        pictures: ["duck1.jpg", "duck2.jpg", "duck3.jpg"],
        meaningInSourceLanguage: "duck",
        formInTargetLanguage: "pato"
      },
      {
        id: 202,
        type: "cards",
        pictures: ["bear1.jpg", "bear2.jpg", "bear3.jpg"],
        meaningInSourceLanguage: "bear",
        formInTargetLanguage: "oso"
      }
    ],
    _short_input_test0: [
      {
        id: 6663,
        type: "shortInput",
        meaningInSourceLanguage: "dog",
        formInTargetLanguage: ["perro", "el perro", "can"]
      }
    ],
    _short_input_test1: [
      {
        id: 663,
        type: "shortInput",
        meaningInSourceLanguage: "foo",
        formInTargetLanguage: ["leche", "la leche"]
      }
    ],
    _cards_test: [
      {
        id: 44543,
        type: "cards",
        pictures: ["pasta1.jpg", "pasta2.jpg", "pasta3.jpg"],
        meaningInSourceLanguage: "pasta",
        formInTargetLanguage: "pasta"
      },
      {
        id: 4543,
        type: "cards",
        pictures: ["milk1.jpg", "milk2.jpg", "milk3.jpg"],
        meaningInSourceLanguage: "milk",
        formInTargetLanguage: "leche"
      },
      {
        id: 4542,
        type: "cards",
        pictures: ["bread1.jpg", "bread2.jpg", "bread3.jpg"],
        meaningInSourceLanguage: "bread",
        formInTargetLanguage: "pan"
      }
    ],
    food: [
      {
        id: 44543,
        type: "cards",
        pictures: ["pasta1.jpg", "pasta2.jpg", "pasta3.jpg"],
        meaningInSourceLanguage: "pasta",
        formInTargetLanguage: "pasta"
      },
      {
        id: 4543,
        type: "cards",
        pictures: ["milk1.jpg", "milk2.jpg", "milk3.jpg"],
        meaningInSourceLanguage: "milk",
        formInTargetLanguage: "leche"
      },
      {
        id: 4542,
        type: "cards",
        pictures: ["bread1.jpg", "bread2.jpg", "bread3.jpg"],
        meaningInSourceLanguage: "bread",
        formInTargetLanguage: "pan"
      }
    ]
  };

  export async function preload(page, session) {
    const { id } = page.params;
    const rawChallenges = allRawChallenges[id];

    return { rawChallenges };
  }
</script>

<script>
  import sound from "../../media/sound";
  import DeckChallenge from "../../components/DeckChallenge";
  import ShortInputChallenge from "../../components/ShortInputChallenge";
  import ProgressBar from "../../components/ProgressBar";
  import shuffle from "lodash.shuffle";
  import { fade } from "svelte/transition";

  export let rawChallenges;
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
		  {registerResult}
		  {resolveChallenge}
            {challenge} />
        {/if}
      </div>
    {/if}
  {/each}

</div>
