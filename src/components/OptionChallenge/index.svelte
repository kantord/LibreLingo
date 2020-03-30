<script>
  import { onMount } from "svelte"
  import hotkeys from "hotkeys-js"
  import shuffle from "lodash.shuffle"
  import { slide } from "svelte/transition"
  import { fade } from "svelte/transition"
  import Options from "../Options"
  import ChallengePanel from "../ChallengePanel"
  import { prepareChallenge } from "../../logic"

  export let currentChallenge
  export let alternativeChallenges
  export let resolveChallenge
  export let registerResult
  let selectedOption = null
  let submitted = false

  $: options = prepareChallenge({
    currentChallenge,
    alternativeChallenges,
    typeToSelect: "options"
  })

  $: finishChallenge = () => {
    selectedOption = null
    submitted = false
    resolveChallenge()
  }

  $: submitChallenge = () => {
    registerResult(options[selectedOption].correct)
    submitted = true
  }

  onMount(() => {
    hotkeys.unbind("enter")
    hotkeys("enter", () => {
      if (submitted) {
        finishChallenge()
      } else {
        submitChallenge()
      }
    })
  })
</script>

<p class="is-size-1 is-size-2-tablet is-size-4-mobile has-text-centered">
  Which of these is
  <strong>{currentChallenge.meaningInSourceLanguage}</strong>
  ?
</p>

<form on:submit|preventDefault="{submitChallenge}">
  <Options {options} bind:selectedOption disabled="{submitted}" />

  {#if !submitted && selectedOption !== null}
    <ChallengePanel message="" buttonText="Submit" submit />
  {/if}

  {#if submitted}
    {#if options[selectedOption].correct}
      <ChallengePanel
        message="Correct solution!"
        buttonText="Continue"
        correct
        buttonAction="{finishChallenge}" />
    {/if}
    {#if !options[selectedOption].correct}
      <ChallengePanel
        message="Incorrect solution!"
        buttonText="Continue"
        incorrect
        buttonAction="{finishChallenge}" />
    {/if}
  {/if}
</form>
