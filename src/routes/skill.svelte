<script>
import { onMount } from 'svelte';
import hotkeys from 'hotkeys-js';
import shuffle from 'lodash.shuffle';
import OptionDeck from '../components/OptionDeck.svelte'

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
const currentItem = exercises[0]
const alternativeItems = exercises.filter(({ formInTargetLanguage }) => formInTargetLanguage !== currentItem.formInTargetLanguage);
const options = shuffle([currentItem, ...shuffle(alternativeItems).slice(0, 2)]);

onMount(() => {
	hotkeys('1,2,3', (_, { key }) => {
		selectedOption = parseInt(key) - 1
	});
})

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

<OptionDeck options={options} selectedOption={selectedOption} />
