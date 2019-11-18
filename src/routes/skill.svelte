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
</script>

<style>
	h1 {
		text-align: center;
	}
</style>

<svelte:head>
	<title>Exercise</title>
</svelte:head>

<h1>Select {currentChallenge.meaningInSourceLanguage}!</h1>

<DeckChallenge challenges={challenges} currentChallenge={currentChallenge} />

