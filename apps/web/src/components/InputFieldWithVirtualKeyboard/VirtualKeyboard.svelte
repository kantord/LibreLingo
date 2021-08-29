<script lang="typescript">
  import { createEventDispatcher } from "svelte"
  import Button from "../../../../lluis/Button.svelte"

  const dispatch = createEventDispatcher()
  export let characters: Array<string>
  export let disabled: boolean
</script>

<div class="virtual-keyboard">
  {#each characters as character}
    <Button
      tabIndex="{-1}"
      size="small"
      disabled="{disabled}"
      on:click="{() => dispatch('click', character)}"
    >
      {character}
    </Button>
  {/each}
</div>

<style type="text/scss">
  .virtual-keyboard {
    display: flex;
    margin-top: 2em;

    > :global(*) {
      margin-right: 12px;
    } 
  }
</style>
