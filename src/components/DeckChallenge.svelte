<script>
import { onMount } from 'svelte';
import hotkeys from 'hotkeys-js';
import shuffle from 'lodash.shuffle';
import OptionDeck from '../components/OptionDeck.svelte'

export let challenges;
export let currentChallenge;
let selectedOption = null

const alternativeChallenges = challenges.filter(({ formInTargetLanguage }) => formInTargetLanguage !== currentChallenge.formInTargetLanguage);
const options = shuffle([currentChallenge, ...shuffle(alternativeChallenges).slice(0, 2)]);

onMount(() => {
	hotkeys('1,2,3', (_, { key }) => {
		selectedOption = parseInt(key) - 1
	});
})

</script>

<h1>Select {currentChallenge.meaningInSourceLanguage}!</h1>

<OptionDeck options={options} selectedOption={selectedOption} />

<style>
	h1 {
		text-align: center;
	}
</style>

