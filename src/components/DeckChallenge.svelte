<script>
import { onMount } from 'svelte';
import hotkeys from 'hotkeys-js';
import shuffle from 'lodash.shuffle';
import OptionDeck from '../components/OptionDeck.svelte'

export let currentChallenge;
export let alternativeChallenges;
export let resolveChallenge;
let selectedOption = null;
let options = null;
let submitted = false;

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

$: nextChallenge = () => {
	selectedOption = null;
	submitted = false;
	resolveChallenge();
}

$: submitChallenge = () => {
	submitted = true;
}


onMount(() => {
	hotkeys('1,2,3,enter', (_, { key }) => {
		if (key === "enter") {
			if (submitted) {
				nextChallenge()
			} else {
				submitChallenge();
			}
		} else {
			if (submitted) return;

			selectedOption = parseInt(key) - 1;
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
				<button type="submit" on:click={nextChallenge}>Continue</button>
			</div>
		{/if}

		{#if !options[selectedOption].correct }
			<div class="result incorrect">
				Incorect solution!
				<button type="submit" on:click={nextChallenge}>Continue</button>
			</div>
		{/if}
	{/if}
</form>

<style>
	h1 {
		text-align: center;
	}

	.correct {
		color: green;
	}

	.incorrect {
		color: red;
	}

	.result {
		position: fixed;
		left: 0;
		bottom: 0;
		right: 0;
		height: 20vh;
	}
</style>

