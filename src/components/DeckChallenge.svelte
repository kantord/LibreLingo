<script>
import { onMount } from 'svelte';
import hotkeys from 'hotkeys-js';
import shuffle from 'lodash.shuffle';
import { Howl } from 'howler';
import OptionDeck from '../components/OptionDeck.svelte'

export let currentChallenge;
export let alternativeChallenges;
export let resolveChallenge;
let selectedOption = null;
let options = null;
let submitted = false;
const sounds = {
	"correct": new Howl({
		src: ['sound/correct.mp3']
	}),
	"wrong": new Howl({
		src: ['sound/wrong.mp3']
	}),
}

$: correctOption = {
	...currentChallenge,
	correct: true
}

$: incorrectOptions = alternativeChallenges.map(challenge => ({
	...challenge,
	correct: false
}))

$: {
	options = shuffle([correctOption, ...shuffle(incorrectOptions).slice(0, 2)]);
}

$: finishChallenge = () => {
	selectedOption = null;
	submitted = false;
	resolveChallenge();
}

$: submitChallenge = () => {
	if (options[selectedOption].correct) {
		sounds.correct.play();
	} else {
		sounds.wrong.play();
	}
	submitted = true;
}


onMount(() => {
	hotkeys('enter', () => {
		if (submitted) {
			finishChallenge()
		} else {
			submitChallenge();
		}
	});
})

</script>

<h1>Select {currentChallenge.meaningInSourceLanguage}!</h1>

<form on:submit|preventDefault={submitChallenge}>
	<OptionDeck options={options} bind:selectedOption={selectedOption} disabled={submitted} />

	{#if !submitted }
	  <button type="submit">Submit</button>
	{/if}

	{#if submitted }
		{#if options[selectedOption].correct }
			<div class="result correct">
				Correct solution!
				<button type="submit" on:click={finishChallenge}>Continue</button>
			</div>
		{/if}

		{#if !options[selectedOption].correct }
			<div class="result incorrect">
				Incorect solution!
				<button type="submit" on:click={finishChallenge}>Continue</button>
			</div>
		{/if}
	{/if}
</form>

<style>
	h1 {
		text-align: center;
	}

	.correct {
		color: white;
		background: green;
	}

	.incorrect {
		color: white;
		background: red;
	}

	.result {
		position: fixed;
		left: 0;
		bottom: 0;
		right: 0;
		height: 5vh;
		padding: 1em;
		font-size: 3vh;
	}

	.result button {
		float: right;
		font-size: 3vh;
	}
</style>

