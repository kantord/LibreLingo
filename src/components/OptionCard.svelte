<script>
	export let active;
	export let number;
	export let picture;
	export let formInTargetLanguage;
</script>


<li class:active={active}>
	<div class="card">
		<div class="picture">{picture}</div>
		<div class="number">{number}</div>
		<div class="text">{formInTargetLanguage}</div>
	</div>
</li>

<style>
	li {
		display: flex;
		flex-direction: column;
		width: 25vw;
		max-width: 20em;
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
		background-color: silver;
	}
	.number {
		font-size: 2em;
		text-align: center;
	}

	.text {
		text-align: center;
	}
</style>


