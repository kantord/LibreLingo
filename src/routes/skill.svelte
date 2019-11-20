<script>
import DeckChallenge from '../components/DeckChallenge.svelte'
import shuffle from 'lodash.shuffle';

const rawChallenges = [
{
	"picture": "🦁",
	"meaningInSourceLanguage": "lion",
	"formInTargetLanguage": "león",
},
{
	"picture": "🐈",
	"meaningInSourceLanguage": "cat",
	"formInTargetLanguage": "gato",
},
{
	"picture": "🐕",
	"meaningInSourceLanguage": "dog",
	"formInTargetLanguage": "perro",
},
{
	"picture": "🦆",
	"meaningInSourceLanguage": "duck",
	"formInTargetLanguage": "pato",
},
{
	"picture": "🐻",
	"meaningInSourceLanguage": "bear",
	"formInTargetLanguage": "oso",
}
]

let currentChallengeId = 0;
let challenges = shuffle(rawChallenges);
$: currentChallenge = challenges[currentChallengeId];
$: alternativeChallenges = challenges.filter((_, id) => id !== currentChallengeId)

$: resolveChallenge = () =>
{
	currentChallengeId ++
}

</script>

<svelte:head>
	<title>Exercise</title>
</svelte:head>

<DeckChallenge currentChallenge={currentChallenge} alternativeChallenges={alternativeChallenges} resolveChallenge={resolveChallenge} />

