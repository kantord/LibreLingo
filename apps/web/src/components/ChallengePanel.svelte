<script lang="typescript">
  import { slide } from "svelte/transition"
  import Button from "lluis/Button.svelte"

  export let buttonText
  export let buttonAction = null
  export let correct = false
  export let incorrect = false
  export let typo = false
  export let message
  export let messageDetail = null
  export let submit = null
  export let skipAction = null
  export let skipAllAction = null
  export let skipAllVoice = null
</script>

<div
  class:correct
  class:incorrect
  class:typo
  class="panel is-primary"
  out:slide|local="{{ duration: 100 }}"
  in:slide|local="{{ duration: 300, delay: 50 }}"
>
  <div class="panel-block">
    <div class="control">
      <div class="left">
        {#if skipAction}
          <Button on:click="{skipAction}">Skip</Button>
        {/if}
        {#if skipAllAction}
          <Button on:click="{skipAllAction}">Finish early</Button>
        {/if}
        {#if skipAllVoice}
          <Button on:click="{skipAllVoice}">Can't listen now</Button>
        {/if}
        {#if message}<b>{message}</b>{/if}
        {#if messageDetail}
          <p>{messageDetail}</p>
        {/if}
      </div>
      <div class="right">
        {#if buttonAction}
          <Button primary type="submit" on:click="{buttonAction}">
            {buttonText}
          </Button>
        {/if}
        {#if submit}
          <Button primary type="submit">Submit</Button>
        {/if}
      </div>
    </div>
  </div>
</div>

<style type="text/scss">
  @import "../variables";

  .panel {
    position: fixed;
    min-height: 12vh;
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

  .typo {
    color: $text-invert;
    background: $yellow;
  }
  .left {
    float: left;
  }
  .right {
    float: right;
  }

  .panel-block {
    color: inherit;
    padding-top: 1em;
    @include mobile {
      margin: 0;
    }
    @include tablet-only {
      margin: 0 24px;
    }
    @include desktop {
      max-width: 920px;
      margin: auto;
    }
  }
</style>
