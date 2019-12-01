<script>
  import { onMount } from "svelte";
  import hotkeys from "hotkeys-js";
  import shuffle from "lodash.shuffle";
  import { slide } from "svelte/transition";
  import { fade } from "svelte/transition";
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
    <div class="panel is-primary">
      <div class="panel-block">
        <div class="control">
          <button class="button is-primary" type="submit">Submit</button>
        </div>
      </div>
    </div>
  {/if}

  {#if submitted}
    {#if options[selectedOption].correct}
      <div
        class="panel correct is-primary"
        transition:slide="{{ duration: 300 }}">
        <div class="panel-block">
          <div class="control">
            Correct solution!
            <button
              class="button is-primary"
              type="submit"
              on:click="{finishChallenge}">
              Continue
            </button>
          </div>
        </div>
      </div>
    {/if}

    {#if !options[selectedOption].correct}
      <div
        class="panel incorrect is-primary"
        transition:slide="{{ duration: 300 }}">
        <div class="panel-block">
          <div class="control">
            Incorect solution!
            <button
              class="button is-primary"
              type="submit"
              on:click="{finishChallenge}">
              Continue
            </button>
          </div>
        </div>
      </div>
    {/if}
  {/if}
</form>

<style type="text/scss">
  h1 {
    text-align: center;
  }

  .panel {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 0;
  }

  .correct {
    color: white;
    background: $success;
  }

  .incorrect {
    color: white;
    background: red;
  }

  .panel button {
    float: right;
  }
</style>
