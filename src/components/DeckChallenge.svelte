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

$: {
	options = shuffle([currentChallenge, ...shuffle(alternativeChallenges).slice(0, 2)]);
}

$: submitSolution = () => {
	selectedOption = null;
	resolveChallenge();
}


onMount(() => {
	hotkeys('1,2,3,enter', (_, { key }) => {
		if (key === "enter") {
			submitSolution();
		} else {
			selectedOption = parseInt(key) - 1;
		}
	});
})

</script>

<h1>Select {currentChallenge.meaningInSourceLanguage}!</h1>

<form on:submit|preventDefault={submitSolution}>
	<OptionDeck options={options} bind:selectedOption={selectedOption} />

	  <button type="submit">Submit</button>
</form>

<style>
	h1 {
		text-align: center;
	}
</style>

