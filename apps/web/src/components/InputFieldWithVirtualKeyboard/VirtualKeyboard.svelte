<script lang="typescript">
  import Button from "../../../../lluis/Button.svelte"

  export let characters: Array<string>
  export let disabled: boolean
  export let handleVirtualKey
</script>

<div class="virtual-keyboard">
  {#each characters as character}
    <Button
      style="key"
      tabIndex={-1}
      size="small"
      disabled="{disabled}"
      on:click="{handleVirtualKey(character)}"
    >
      {character}
    </Button>
  {/each}
</div>

<style type="text/scss">
  .virtual-keyboard {
    display: flex;
    flex-wrap: wrap;
    margin-top: 2em;
  }
</style>
