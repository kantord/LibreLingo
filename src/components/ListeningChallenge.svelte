<script>
  import { onMount } from "svelte"
  import hotkeys from "hotkeys-js"
  import levenshtein from "js-levenshtein"
  import ChallengePanel from "./ChallengePanel"
  import Icon from "./Icon"
  import InputFieldWithVirtualKeyboard from "./InputFieldWithVirtualKeyboard"
  import playVoice from "../media/voice"

  export let challenge
  export let registerResult
  export let resolveChallenge
  export let languageCode
  export let specialCharacters
  let answer = null
  let submitted = false
  let correct = null
  let spellingSuggestion = ""

  $: submitChallenge = () => {
    if (!answer) return
    if (submitted) return
    const form = challenge.answer
    correct = false

    if (
      levenshtein(
        answer
          .toLowerCase()
          .replace(/^\s+|\s+$/g, "")
          .replace(/\s+/g, " "),
        form.toLowerCase()
      ) <= 1
    ) {
      correct = true
      spellingSuggestion =
        form
          .replace(/^\s+|\s+$/g, "")
          .replace(/\s+/g, " ")
          .toLowerCase() === answer.toLowerCase()
          ? ""
          : `You made a small error. Correct spelling: ${form}`
    }

    registerResult(correct)
    submitted = true
  }

  $: finishChallenge = () => {
    answer = null
    submitted = false
    resolveChallenge()
  }

  const playChallengeVoice = () => playVoice(challenge.audio)

  onMount(() => {
    playChallengeVoice()
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

<form on:submit|preventDefault="{submitChallenge}">
  <div class="section">
    <p class="is-size-1 is-size-2-tablet is-size-4-mobile has-text-centered">
      Type what you hear
    </p>
  </div>

  <div class="columns">

    <div class="column is-1">

      <button
        class="button is-large is-primary"
        on:click="{playChallengeVoice}"
        type="button">
        <Icon icon="volume-up" />
      </button>
    </div>

    <div class="column">
      <InputFieldWithVirtualKeyboard
        {specialCharacters}
        {languageCode}
        disabled="{submitted}"
        bind:value="{answer}" />

    </div>
  </div>

  {#if answer && !submitted}
    <ChallengePanel message="" buttonText="Submit" submit />
  {/if}

  {#if submitted}
    {#if !correct}
      <ChallengePanel
        message="Incorrect solution!"
        messageDetail="{`Correct answer: ${challenge.answer}`}"
        buttonText="Continue"
        incorrect
        buttonAction="{finishChallenge}" />
    {/if}
    {#if correct}
      <ChallengePanel
        message="Correct solution!"
        messageDetail="{spellingSuggestion || `Meaning: "${challenge.meaning}"`}"
        buttonText="Continue"
        correct
        buttonAction="{finishChallenge}" />
    {/if}
  {/if}

</form>
