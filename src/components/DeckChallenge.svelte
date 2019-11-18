<script>
import { onMount } from 'svelte';
import hotkeys from 'hotkeys-js';
import shuffle from 'lodash.shuffle';
import OptionDeck from '../components/OptionDeck.svelte'

export let exercises;
export let currentItem;
let selectedOption = null

const alternativeItems = exercises.filter(({ formInTargetLanguage }) => formInTargetLanguage !== currentItem.formInTargetLanguage);
const options = shuffle([currentItem, ...shuffle(alternativeItems).slice(0, 2)]);

onMount(() => {
	hotkeys('1,2,3', (_, { key }) => {
		selectedOption = parseInt(key) - 1
	});
})

</script>

<OptionDeck options={options} selectedOption={selectedOption} />
