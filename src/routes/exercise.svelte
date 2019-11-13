<script>
import { onMount } from 'svelte';
import hotkeys from 'hotkeys-js';
import shuffle from 'lodash.shuffle';
import OptionCard from '../components/OptionCard.svelte'

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

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.options {
		user-select: none;
		display: flex;
		justify-content: center;
	}

	input {
		display: none;
	}

	label {
		padding: 1em;
	}
</style>

<svelte:head>
	<title>Exercise</title>
</svelte:head>

<h1>Select {currentItem.meaningInSourceLanguage}!</h1>

<ul class="options">
{#each options as { picture, meaningInSourceLanguage, formInTargetLanguage }, i}
	<label for={i}>
		<input type="radio" bind:group={selectedOption} value={i} name={i} id={i} >
		<OptionCard active={selectedOption===i} picture={picture} number={i + 1} formInTargetLanguage={formInTargetLanguage} />
	</label>
{/each}
</ul>
