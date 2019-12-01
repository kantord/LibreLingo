<script>
  import sound from "../media/sound";
  import DeckChallenge from "../components/DeckChallenge";
  import shuffle from "lodash.shuffle";

  const rawChallenges = [
    {
      id: 4,
      pictures: ["lion1.jpg", "lion2.jpg", "lion3.jpg"],
      meaningInSourceLanguage: "lion",
      formInTargetLanguage: "león"
    },
    {
      id: 3,
      pictures: ["cat1.jpg", "cat2.jpg", "cat3.jpg"],
      meaningInSourceLanguage: "cat",
      formInTargetLanguage: "gato"
    },
    {
      id: 42,
      pictures: ["dog1.jpg", "dog2.jpg", "dog3.jpg"],
      meaningInSourceLanguage: "dog",
      formInTargetLanguage: "perro"
    },
    {
      id: 888,
      pictures: ["duck1.jpg", "duck2.jpg", "duck3.jpg"],
      meaningInSourceLanguage: "duck",
      formInTargetLanguage: "pato"
    },
    {
      id: 202,
      pictures: ["bear1.jpg", "bear2.jpg", "bear3.jpg"],
      meaningInSourceLanguage: "bear",
      formInTargetLanguage: "oso"
    }
  ];

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

  challenges.map(({ pictures }) => pictures.map(preloadImage));
</script>

<svelte:head>
  <title>Exercise</title>
</svelte:head>

<progress class="progress" value={progress} max="1">{progress * 100}%</progress>

<DeckChallenge
  {currentChallenge}
  {alternativeChallenges}
  {resolveChallenge}
  {registerResult} />
