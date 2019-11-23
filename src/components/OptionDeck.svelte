<script>
	import { onMount } from 'svelte';
	import hotkeys from 'hotkeys-js';
	import shuffle from 'lodash.shuffle';
	import OptionCard from '../components/OptionCard.svelte'
	export let options;
	export let selectedOption;
	export let disabled;

	onMount(() => {
		hotkeys('1,2,3', (_, { key }) => {
			if (disabled) return;
			selectedOption = parseInt(key) - 1;
		});
	});
</script>

<ul class="options">
{#each options as { pictures, meaningInSourceLanguage, formInTargetLanguage }, i}
	<label for={i}>
		<input type="radio" bind:group={selectedOption} value={i} name={i} id={i} disabled={disabled} >
		<OptionCard active={selectedOption===i} picture={shuffle(pictures)[0]} number={i + 1} formInTargetLanguage={formInTargetLanguage} />
	</label>
{/each}
</ul>

<style>
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
