<script>
    import { slide } from "svelte/transition"
    import ChallengePanel from "./ChallengePanel"

    export let challenge
    export let registerResult
    export let resolveChallenge
    let answer = null
    let submitted = false
    let correct = null

    $: submitChallenge = () => {
        correct = answer === "perro"
        registerResult(correct)
        submitted = true
    }

    $: finishChallenge = () => {
        selectedOption = null
        submitted = false
        resolveChallenge()
    }
</script>

<form on:submit|preventDefault="{submitChallenge}">
    <p>
        Type
        <b>{challenge.meaningInSourceLanguage}</b>
        in Spanish!
    </p>
    <input
        type="text"
        class="input"
        placeholder="Type your answer…"
        bind:value="{answer}" />

    {#if answer !== null && !submitted}
        <ChallengePanel message="" buttonText="Submit" submit />
    {/if}

    {#if submitted}
        {#if !correct}
            <ChallengePanel
                message="Incorrect solution!"
                messageDetail="{`Correct answer: ${challenge.formInTargetLanguage[0]}`}"
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
