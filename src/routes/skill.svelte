<script>
import DeckChallenge from '../components/DeckChallenge.svelte'

const challenges = [
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

const currentChallenge = challenges[0];
const alternativeChallenges = challenges.filter(({ formInTargetLanguage }) => formInTargetLanguage !== currentChallenge.formInTargetLanguage);
</script>

<svelte:head>
	<title>Exercise</title>
</svelte:head>

<DeckChallenge currentChallenge={currentChallenge} alternativeChallenges={alternativeChallenges} />

