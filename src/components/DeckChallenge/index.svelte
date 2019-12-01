<script>
  import { onMount } from "svelte";
  import hotkeys from "hotkeys-js";
  import shuffle from "lodash.shuffle";
  import { slide } from "svelte/transition";
  import OptionDeck from "../../components/OptionDeck.svelte";
  import { prepareChallenge } from "./logic";

  export let currentChallenge;
  export let alternativeChallenges;
  export let resolveChallenge;
  export let registerResult;
  let selectedOption = null;
  let submitted = false;

  $: options = prepareChallenge({
    currentChallenge,
    alternativeChallenges
  });

  $: finishChallenge = () => {
    selectedOption = null;
    submitted = false;
    resolveChallenge();
  };

  $: submitChallenge = () => {
    registerResult(options[selectedOption].correct);
    submitted = true;
  };

  onMount(() => {
    hotkeys("enter", () => {
      if (submitted) {
        finishChallenge();
      } else {
        submitChallenge();
      }
    });
  });
</script>

<h1>Select {currentChallenge.meaningInSourceLanguage}!</h1>

<form on:submit|preventDefault="{submitChallenge}">
  <OptionDeck {options} bind:selectedOption disabled="{submitted}" />

  {#if !submitted}
    <div class="panel">
      <button class="button is-primary" type="submit">Submit</button>
    </div>
  {/if}

  {#if submitted}
    {#if options[selectedOption].correct}
      <div class="panel correct" transition:slide="{{ duration: 300 }}">
        Correct solution!
        <button class="button is-primary" type="submit" on:click="{finishChallenge}">Continue</button>
      </div>
    {/if}

    {#if !options[selectedOption].correct}
      <div class="panel incorrect" transition:slide="{{ duration: 300 }}">
        Incorect solution!
        <button class="button is-primary" type="submit" on:click="{finishChallenge}">Continue</button>
      </div>
    {/if}
  {/if}
</form>

<style>
  h1 {
    text-align: center;
  }

  .panel {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    height: 5vh;
    padding: 1em;
    font-size: 3vh;
  }

  .correct {
    color: white;
    background: green;
  }

  .incorrect {
    color: white;
    background: red;
  }

  .panel button {
    float: right;
  }
</style>
