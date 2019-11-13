<script>
import hotkeys from 'hotkeys-js';
import shuffle from 'lodash.shuffle';

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

hotkeys('1,2,3', (_, { key }) => {
	selectedOption = parseInt(key) - 1
});

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

	.picture {
		text-align: center;
		font-size: 10vw;
	}

	.card {
		border: 1px solid silver;
		border-radius: 1em;
		margin: 0.5em;
	}

	.active .card {
		border-color: gray;
	}

	.options {
		user-select: none;
		display: flex;
		justify-content: center;
	}

	.options li {
		display: flex;
		flex-direction: column;
		width: 25vw;
		max-width: 20em;
		margin: 0;
	}

	.options li label {
		padding: 1em;
	}

	.options li input {
		display: none;
	}


	.number {
		font-size: 2em;
		text-align: center;
	}

	.text {
		text-align: center;
	}
</style>

<svelte:head>
	<title>Exercise</title>
</svelte:head>

<h1>Select {currentItem.meaningInSourceLanguage}!</h1>

<ul class="options">
{#each options as { picture, meaningInSourceLanguage, formInTargetLanguage }, i}
	<li class:active={selectedOption===i}>
		<label for={i}>
			<input type="radio" bind:group={selectedOption} value={i} name={i} id={i} >
			<div class="card">
				<div class="picture">{picture}</div>
				<div class="number">{i + 1}</div>
				<div class="text">{formInTargetLanguage}</div>
			</div>
		</label>
	</li>
{/each}
</ul>
