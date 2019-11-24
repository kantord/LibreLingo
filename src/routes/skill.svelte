<script>
  import DeckChallenge from "../components/DeckChallenge.svelte";
  import shuffle from "lodash.shuffle";

  const rawChallenges = [
    {
      pictures: ["lion1.jpg", "lion2.jpg", "lion3.jpg"],
      meaningInSourceLanguage: "lion",
      formInTargetLanguage: "león"
    },
    {
      pictures: ["cat1.jpg", "cat2.jpg", "cat3.jpg"],
      meaningInSourceLanguage: "cat",
      formInTargetLanguage: "gato"
    },
    {
      pictures: ["dog1.jpg", "dog2.jpg", "dog3.jpg"],
      meaningInSourceLanguage: "dog",
      formInTargetLanguage: "perro"
    },
    {
      pictures: ["duck1.jpg", "duck2.jpg", "duck3.jpg"],
      meaningInSourceLanguage: "duck",
      formInTargetLanguage: "pato"
    },
    {
      pictures: ["bear1.jpg", "bear2.jpg", "bear3.jpg"],
      meaningInSourceLanguage: "bear",
      formInTargetLanguage: "oso"
    }
  ];

  let currentChallengeId = 0;
  let challenges = shuffle(rawChallenges);
  $: currentChallenge = challenges[currentChallengeId];
  $: alternativeChallenges = challenges.filter(
    (_, id) => id !== currentChallengeId
  );

  $: resolveChallenge = () => {
    currentChallengeId++;
  };

  const preloadImage = imageName => {
    new Image().src = `images/${imageName}`;
  };

  challenges.map(({ pictures }) => pictures.map(preloadImage));
</script>

<svelte:head>
  <title>Exercise</title>
</svelte:head>

<DeckChallenge {currentChallenge} {alternativeChallenges} {resolveChallenge} />
