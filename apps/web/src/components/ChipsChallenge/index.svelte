<script lang="typescript">
  import { onMount } from "svelte"
  import hotkeys from "hotkeys-js"
  import shuffle from "lodash.shuffle"
  import { writable } from "svelte/store"
  import ChallengePanel from "../ChallengePanel"
  import Phrase from "../Phrase"

  export let challenge
  export let registerResult
  export let resolveChallenge
  export let skipChallenge
  export let skipAllChallenges
  
  let submitted = false
  let correct = null
  const answer = writable([])
  const chips = writable(shuffle(challenge.chips))

  if (process.browser === true) {
      window.testSolution = () => {
          answer.update(() => ["Como", "estás", "hoy"])
      }

      window.testSolution2 = () => {
          answer.update(() => ["Tu", "como", "estás", "hoy"])
      }

      window.testIncorrectSolution = () => {
          answer.update(() => ["Como", "hoy"])
      }
  }

  $: submitChallenge = () => {
      if (!$answer) return
      if (submitted) return
      correct = false
      const answerForm = $answer.join(" ")
      challenge.solutions.map((solution) => {
          correct = correct || answerForm === solution.join(" ")
      })
      registerResult(correct)
      submitted = true
  }

  $: finishChallenge = () => {
      $answer = []
      submitted = false
      resolveChallenge()
  }

  $: handleOptionClick = (chip, index) => {
      if (submitted) return
      chips.update(oldItems => {
          const newItems = [...oldItems]
          newItems.splice(index, 1)
          return newItems
      })
      answer.update(oldItems => [...oldItems, chip])
  }

  $: handleAnswerClick = (chip, index) => {
      if (submitted) return
      answer.update(oldItems => {
          const newItems = [...oldItems]
          newItems.splice(index, 1)
          return newItems
      })
      chips.update(oldItems => [...oldItems, chip])
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

<form on:submit|preventDefault="{submitChallenge}">
  <div class="section">
    <p class="is-size-1 is-size-2-tablet is-size-4-mobile has-text-centered">
      Translate
      <Phrase phrase="{challenge.phrase}" />
    </p>
  </div>

  <div>
    <div class="solution">
      <div class="chips">
        {#each $answer as chip, index}
          <span class="chip" on:click="{() => handleAnswerClick(chip, index)}">
            <spain class="tag is-medium">{chip}</spain>
          </span>
        {/each}
      </div>

    </div>

    <p class="sub-instructions">Use these words:</p>
    <div class="chips">
      {#each $chips as chip, index}
        <span class="chip" on:click="{() => handleOptionClick(chip, index)}">
          <spain class="tag is-medium">{chip}</spain>
        </span>
      {/each}
    </div>
  </div>

  {#if $answer.length === 0 && !submitted}
    <ChallengePanel
      message="{null}"
      buttonText="{null}"
      skipAction="{skipChallenge}"
      skipAllAction="{skipAllChallenges}" />
  {/if}

  {#if $answer.length > 0 && !submitted}
    <ChallengePanel
      message=""
      buttonText="Submit"
      submit
      skipAction="{skipChallenge}"
      skipAllAction="{skipAllChallenges}" />
  {/if}

  {#if submitted}
    {#if !correct}
      <ChallengePanel
        message="Incorrect solution!"
        messageDetail="{`Correct answer: ${challenge.formattedSolution}`}"
        buttonText="Continue"
        incorrect
        buttonAction="{finishChallenge}" />
    {/if}
    {#if correct}
      <ChallengePanel
        message="Correct solution!"
        buttonText="Continue"
        correct
        buttonAction="{finishChallenge}" />
    {/if}
  {/if}
</form>

<style type="text/scss">
  @import "../../variables";

  .chip {
    user-select: none;
    margin: 0.5em 0.3em;
    cursor: pointer;
  }

  .solution {
    z-index: 10;
    margin-top: -4em;
    padding-top: 4em;
    border-bottom: 2px solid rgba($blue, 0.1);
    height: 6.2em;
  }

  .sub-instructions {
    margin-top: 3em;
  }

  :global(.chips .sortable-ghost .tag) {
    background: $blue !important;
    color: transparent !important;
    opacity: 0.1;
  }

  :global(.sortable-drag) {
    opacity: 1 !important;
  }
</style>
