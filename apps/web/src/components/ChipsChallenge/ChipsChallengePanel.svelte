<script lang="typescript">
  import ChallengePanel from "../ChallengePanel"

  export let hasAnswer: boolean
  export let submitted: boolean
  export let skipChallenge: () => void
  export let skipAllChallenges: () => void
  export let finishChallenge: () => void
  export let challenge
  export let correct: boolean
</script>

{#if !hasAnswer && !submitted}
  <ChallengePanel
    message="{null}"
    buttonText="{null}"
    skipAction="{skipChallenge}"
    skipAllAction="{skipAllChallenges}" />
{/if}

{#if hasAnswer > 0 && !submitted}
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
