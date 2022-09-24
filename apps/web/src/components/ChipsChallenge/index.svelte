<script lang="ts">
  import { onMount } from "svelte"
  import hotkeys from "hotkeys-js"
  import shuffle from "lodash.shuffle"
  import { writable } from "svelte/store"
  import ChallengePanel from "../ChallengePanel.svelte"
  import Phrase from "../Phrase.svelte"
  import { createSortable } from "./sortable"
  import { getNodeType, getChipIndex } from "./chips"

  export let challenge
  export let registerResult
  export let resolveChallenge
  export let skipChallenge
  export let skipAllChallenges
  
  let submitted = false
  let correct = null
  let chipsElement: HTMLElement
  let answerElement: HTMLElement
  const answer = writable([])
  let answerToRender = []
  let chipsToRender = shuffle(challenge.chips)
  const chips = writable(chipsToRender)

  $: submitChallenge = () => {
      if (!$answer) return
      if (submitted) return
      correct = false
      const answerForm = $answer.join(" ").toLowerCase()
      challenge.solutions.map((solution: string[]) => {
          correct = correct || answerForm === solution.join(" ").toLowerCase()
      })
      registerResult(correct)
      submitted = true
  }

  $: finishChallenge = () => {
      $answer = []
      submitted = false
      resolveChallenge()
  }

  

  $: handleChipClick = (event) => {
      if (submitted) return
      const node = event.target
      const chipType = getNodeType(node)
      const chipText = node.innerText
      const chipIndex = getChipIndex(node)

      if (chipType === "chips") {
          chips.update(oldItems => {
              const newItems = [...oldItems]
              newItems.splice(chipIndex, 1)
              return newItems
          })
          answer.update(oldItems => [...oldItems, chipText])
      }

      if (chipType === "answer") {
          answer.update(oldItems => {
              const newItems = [...oldItems]
              newItems.splice(chipIndex, 1)
              return newItems
          })
          chips.update(oldItems => [...oldItems, chipText])
      }

      rerenderSortables()

  }

  const rerenderSortables = () => {
      chipsSortable.destroy()
      answerSortable.destroy()
      answerToRender = $answer
      chipsToRender = $chips

      /*
        Need to wait for the re-rendering of the chips
        otherwise the svelte store and the sortable
        store will be out of sync
      */
      setTimeout(initializeDragAndDrop, 0)
  }

  let chipsSortable
  let answerSortable

  const initializeSortable1 = () =>  {
      chipsSortable = createSortable(chipsElement, chips)
  }

  const initializeSortable2 = () => {
      answerSortable = createSortable(answerElement, answer)
  }

  const initializeDragAndDrop = () => {
      initializeSortable1()
      initializeSortable2()
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

      initializeDragAndDrop()
  })
</script>

<form on:submit|preventDefault="{submitChallenge}">
  <h1 class="challenge-prompt">
    Translate
    <Phrase phrase="{challenge.phrase}" />
  </h1>

  <div>
    <div class="challenge-chips__solution">
      <div id="answer" class="chips chips--active" bind:this={answerElement}>
        {#each answerToRender as chip, index}
          <span class="chip" data-id={chip} on:click="{handleChipClick}">
            <span>{chip}</span>
          </span>
        {/each}
      </div>
    </div>

    <p class="challenge-chips__instruction">Use these words:</p>
    <div id="chips" class="chips chips--inactive" bind:this={chipsElement}>
      {#each chipsToRender as chip, index}
        <span class="chip" data-id={chip} on:click="{handleChipClick}">
          <span>{chip}</span>
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
        message="Incorrect!"
        messageDetail="{`Correct answer: ${challenge.formattedSolution}`}"
        buttonText="Continue"
        incorrect
        buttonAction="{finishChallenge}" />
    {/if}
    {#if correct}
      <ChallengePanel
        message="Correct!"
        buttonText="Continue"
        correct
        buttonAction="{finishChallenge}" />
    {/if}
  {/if}
</form>
