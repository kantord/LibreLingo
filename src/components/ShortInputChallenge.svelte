<script>
  import { slide } from "svelte/transition";
  import { onMount } from "svelte";
  import hotkeys from "hotkeys-js";
  import levenshtein from "js-levenshtein";
  import ChallengePanel from "./ChallengePanel";

  export let challenge;
  export let registerResult;
  export let resolveChallenge;
  export let languageName;
  export let languageCode;
  let answer = null;
  let submitted = false;
  let correct = null;
  let spellingSuggestion = "";
  let inputFieldRef = null;

  $: submitChallenge = () => {
    if (!answer) return;
    if (submitted) return;
    correct = false;

    challenge.formInTargetLanguage.forEach(form => {
      if (
        levenshtein(
          answer
            .toLowerCase()
            .replace(/^\s+|\s+$/g, "")
            .replace(/\s+/g, " "),
          form.toLowerCase()
        ) <= 1
      ) {
        correct = true;
        spellingSuggestion =
          form
            .replace(/^\s+|\s+$/g, "")
            .replace(/\s+/g, " ")
            .toLowerCase() === answer.toLowerCase()
            ? ""
            : `You made a small error. Correct spelling: ${form}`;
      }
    });

    registerResult(correct);
    inputFieldRef.blur();
    submitted = true;
  };

  $: finishChallenge = () => {
    answer = null;
    submitted = false;
    resolveChallenge();
  };

  const focusMe = el => {
    setTimeout(() => {
      if (el.disabled) {
        el.blur();
      } else {
        el.focus();
      }
    }, 1);
  };

  onMount(() => {
    hotkeys.unbind("enter");
    hotkeys("enter", () => {
      if (submitted) {
        finishChallenge();
      } else {
        submitChallenge();
      }
    });
  });
</script>

<form on:submit|preventDefault="{submitChallenge}">
  <p>
    Type
    <b>{challenge.meaningInSourceLanguage}</b>
    in {languageName}!
  </p>
  <input
    tabindex="0"
    data-test="answer"
    type="text"
    class="input"
    autofocus
    placeholder="Type your answer…"
    disabled="{submitted}"
    spellcheck="false"
    lang="{languageCode}"
    use:focusMe
    bind:this="{inputFieldRef}"
    bind:value="{answer}" />

  {#if answer && !submitted}
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
        messageDetail="{spellingSuggestion}"
        buttonText="Continue"
        correct
        buttonAction="{finishChallenge}" />
    {/if}
  {/if}

</form>
