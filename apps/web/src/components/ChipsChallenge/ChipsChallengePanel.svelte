<script>
  import ChallengePanel from "../ChallengePanel"

  export let hasAnswer
  export let submitted
  export let skipChallenge
  export let skipAllChallenges
  export let finishChallenge
  export let challenge
  export let correct
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
