<script lang="ts">
  import sound from "../media/sound"
  import DeckChallenge from "./DeckChallenge/index.svelte"
  import OptionChallenge from "./OptionChallenge/index.svelte"
  import ShortInputChallenge from "./ShortInputChallenge.svelte"
  import ListeningChallenge from "./ListeningChallenge.svelte"
  import ChipsChallenge from "./ChipsChallenge/index.svelte"
  import FanfareScreen from "./FanfareScreen.svelte"
  import ProgressBar from "./ProgressBar.svelte"
  import shuffle from "lodash.shuffle"
  import { fade, scale } from "svelte/transition"
  // TODO: deal with this ignore comment
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  import db from "../db/db"
  import isBrowser from "../utils/isBrowser"

  export let rawChallenges
  export let languageName
  export let languageCode
  export let specialCharacters
  export let sortChallengeGroups
  export let courseURL
  export let skillId
  export let expectedNumberOfChallenges

  const testChallenge =
    isBrowser() &&
    new URLSearchParams(window.location.search).get("testChallenge")

  type CardChallengeType = {
    id: string
    type: "cards"
    pictures: Array<string>
  }

  type ListeningChallengeType = {
    id: string
    type: "listeningExercise"
  }

  type OptionsChallengeType = {
    id: string
    type: "options"
  }

  type ShortInputChallengeType = {
    id: string
    type: "shortInput"
  }

  type ChipsChallengeType = {
    id: string
    type: "chips"
  }

  type ChallengeType =
    | CardChallengeType
    | ListeningChallengeType
    | OptionsChallengeType
    | ShortInputChallengeType
    | ChipsChallengeType

  let challenges: Array<ChallengeType> = sortChallengeGroups(
    shuffle(rawChallenges),
    expectedNumberOfChallenges
  )
  let remainingChallenges = testChallenge
    ? [
        ...[...challenges].filter(
          (challenge) => challenge.id === testChallenge
        ),
        ...[...challenges].filter(
          (challenge) => challenge.id !== testChallenge
        ),
      ]
    : [...challenges]

  let currentChallenge = remainingChallenges.shift()
  let solvedChallenges = []

  let progress = 0
  let stats = {
    correct: 0,
    incorrect: 0,
    skipped: 0,
  }

  const preloadImage = (imageName: string) => {
    if (typeof Image === "undefined") return
    new Image().src = `images/${imageName}`
  }

  challenges
    .filter(({ type }) => type === "cards")
    .map(({ pictures }: CardChallengeType) => pictures.map(preloadImage))

  $: alternativeChallenges =
    currentChallenge &&
    rawChallenges.filter(({ id }) => id !== currentChallenge.id)

  $: registerResult = (isCorrect: boolean) => {
    if (isCorrect) {
      stats.correct++
      sound.correct.play()
      solvedChallenges.push(currentChallenge)
    } else {
      stats.incorrect++
      sound.wrong.play()
      remainingChallenges.push(currentChallenge)
    }
  }

  $: progress = (solvedChallenges.length + stats.skipped) / challenges.length

  $: resolveChallenge = () => {
    if (remainingChallenges) {
      currentChallenge = remainingChallenges.shift()
    }
  }

  $: skipChallenge = () => {
    stats.skipped++
    resolveChallenge()
  }

  $: skipAllChallenges = async () => {
    if (solvedChallenges.length == 0) {
      // TODO: fix bug #2799
      window.location.replace("/course/test-1")
      return
    }
    stats.skipped++
    remainingChallenges.forEach(() => stats.skipped++)
    remainingChallenges = []
    currentChallenge = undefined
  }

  $: skipAllVoice = () => {
    let filteredRemainingChallenges = remainingChallenges.filter(
      (challenge) => {
        if (challenge.type === "listeningExercise") {
          stats.skipped++
          return false
        } else {
          return true
        }
      }
    )

    remainingChallenges.splice(
      0,
      remainingChallenges.length,
      ...filteredRemainingChallenges
    )
    stats.skipped++
    resolveChallenge()
  }
</script>

{#if currentChallenge}
  <div class="container" in:scale>
    <section class="section">
      <ProgressBar value={progress} />
      {#each challenges as challenge, i (challenge.id)}
        {#if challenge.id === currentChallenge.id}
          <div
            class="challenge"
            in:fade|local={{ duration: 300, delay: 350 }}
            out:fade|local={{ duration: 300 }}
          >
            {#if challenge.type === "cards"}
              <DeckChallenge
                {skipChallenge}
                {currentChallenge}
                {alternativeChallenges}
                {resolveChallenge}
                {registerResult}
                {skipAllChallenges}
              />
            {/if}
            {#if challenge.type === "options"}
              <OptionChallenge
                {skipChallenge}
                {currentChallenge}
                {alternativeChallenges}
                {resolveChallenge}
                {registerResult}
                {skipAllChallenges}
              />
            {/if}
            {#if challenge.type === "shortInput"}
              <ShortInputChallenge
                {skipChallenge}
                {languageName}
                {languageCode}
                {specialCharacters}
                {registerResult}
                {resolveChallenge}
                {challenge}
                {skipAllChallenges}
              />
            {/if}
            {#if challenge.type === "listeningExercise"}
              <ListeningChallenge
                {skipChallenge}
                {languageCode}
                {specialCharacters}
                {registerResult}
                {resolveChallenge}
                {challenge}
                {skipAllChallenges}
                {skipAllVoice}
              />
            {/if}
            {#if challenge.type === "chips"}
              <ChipsChallenge
                {registerResult}
                {resolveChallenge}
                {challenge}
                {skipChallenge}
                {skipAllChallenges}
              />
            {/if}
          </div>
        {/if}
      {/each}
    </section>
  </div>
{/if}

{#if !currentChallenge}
  <div class="container">
    <FanfareScreen {courseURL} {skillId} {stats} />
  </div>
{/if}

<style type="text/scss">
  .section {
    padding: 1.5em;
  }
  .challenge {
    padding: 2em 0;
  }
</style>
