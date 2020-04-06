<script>
  import { slide } from "svelte/transition"

  export let buttonText
  export let buttonAction = null
  export let correct = false
  export let incorrect = false
  export let message
  export let messageDetail = null
  export let submit = null
</script>

<div
  class:correct
  class:incorrect
  class="panel is-primary"
  transition:slide="{{ duration: 300 }}">
  <div class="panel-block">
    <div class="control">
      {#if message}
        <b>{message}</b>
      {/if}
      {#if messageDetail}
        <p>{messageDetail}</p>
      {/if}
      {#if buttonAction}
        <button
          class="button is-primary"
          type="submit"
          on:click="{buttonAction}">
          {buttonText}
        </button>
      {/if}
      {#if submit}
        <button class="button is-primary" type="submit">Submit</button>
      {/if}
    </div>
  </div>
</div>

<style type="text/scss">
  @import "../variables";

  .panel {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 0;
    background: $white;
  }

  .correct {
    color: $text-invert;
    background: $success;
  }

  .incorrect {
    color: $text-invert;
    background: $pink;
  }

  .panel button {
    float: right;
  }

  .panel-block {
    color: inherit;
  }
</style>
