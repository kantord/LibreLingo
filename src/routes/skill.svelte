<script>
import DeckChallenge from '../components/DeckChallenge.svelte'

const exercises = [
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

let selectedOption = null
const currentItem = exercises[0];
</script>

<style>
	h1 {
		text-align: center;
	}
</style>

<svelte:head>
	<title>Exercise</title>
</svelte:head>

<h1>Select {currentItem.meaningInSourceLanguage}!</h1>

<DeckChallenge exercises={exercises} currentItem={currentItem} />
