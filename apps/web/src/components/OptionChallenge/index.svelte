<script lang="ts">
  import { onMount } from "svelte"
  import hotkeys from "hotkeys-js"
  import Options from "../Options.svelte"
  import ChallengePanel from "../ChallengePanel.svelte"
  import { prepareChallenge } from "../../logic"
  import { t } from 'svelte-i18n';

  export let currentChallenge
  export let alternativeChallenges
  export let resolveChallenge
  export let registerResult
  export let skipChallenge
  export let skipAllChallenges

  let selectedOption = null
  let submitted = false

  $: options = prepareChallenge({
      currentChallenge,
      alternativeChallenges,
      typeToSelect: "options",
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
  {$t('index.which_of_these_is')}
  <strong data-test="meaning-in-source-language">
    {currentChallenge.meaningInSourceLanguage}
  </strong>
  ?
</p>

<form on:submit|preventDefault="{submitChallenge}">
  <Options {options} bind:selectedOption disabled="{submitted}" />

  {#if !submitted && selectedOption !== null}
    <ChallengePanel
      message=""
      buttonText={$t('index.submit')}
      submit
      skipAction="{skipChallenge}"
      skipAllAction="{skipAllChallenges}" />
  {/if}

  {#if !submitted && selectedOption === null}
    <ChallengePanel message="" buttonText="" skipAction="{skipChallenge}" skipAllAction="{skipAllChallenges}" />
  {/if}

  {#if submitted}
    {#if options[selectedOption].correct}
      <ChallengePanel
        message={$t('index.correct_solution')}
        buttonText={$t('index.continue')}
        correct
        buttonAction="{finishChallenge}" />
    {/if}
    {#if !options[selectedOption].correct}
      <ChallengePanel
        message={$t('index.incorrect_solution')}
        messageDetail="{`${$t('index.correct_answer')} ${currentChallenge.formInTargetLanguage}`}"
        buttonText={$t('index.continue')}
        incorrect
        buttonAction="{finishChallenge}" />
    {/if}
  {/if}
</form>
