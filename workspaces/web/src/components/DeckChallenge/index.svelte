<script>
  import { onMount } from "svelte"
  import hotkeys from "hotkeys-js"
  import shuffle from "lodash.shuffle"
  import { slide } from "svelte/transition"
  import { fade } from "svelte/transition"
  import OptionDeck from "../OptionDeck"
  import ChallengePanel from "../ChallengePanel"
  import { prepareChallenge } from "../../logic"

  export let currentChallenge
  export let alternativeChallenges
  export let resolveChallenge
  export let registerResult
  export let skipChallenge
  let selectedOption = null
  let submitted = false

  $: options = prepareChallenge({
    currentChallenge,
    alternativeChallenges,
    typeToSelect: "cards",
    hasFakeOption: true,
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
  <OptionDeck {options} bind:selectedOption disabled="{submitted}" />

  {#if selectedOption === null && !submitted}
    <ChallengePanel
      message="{null}"
      buttonText="{null}"
      skipAction="{skipChallenge}" />
  {/if}

  {#if !submitted && selectedOption !== null}
    <ChallengePanel
      message=""
      buttonText="Submit"
      submit
      skipAction="{skipChallenge}" />
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
