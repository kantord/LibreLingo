<script lang="typescript">
  import Button from "../../../../lluis/Button.svelte"
  import Icon from "../../../../lluis/Icon.svelte"

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
      {disabled}
      on:click={handleVirtualKey(character)}
    >
      {character}
    </Button>
  {/each}

  <div class="shadow-left"><Icon icon="circle-arrow-left" /></div>
  <div class="shadow-right"><Icon icon="circle-arrow-right" /></div>
</div>

<style type="text/scss">
  .virtual-keyboard {
    display: flex;
    flex-wrap: wrap;
    margin-top: 2em;
  }

  .virtual-keyboard .shadow-right,
  .virtual-keyboard .shadow-left {
    display: none;
  }

  @media only screen and (pointer: coarse) {
    .virtual-keyboard {
      padding-left: 12px;
      position: fixed;
      bottom: 68px;
      left: 0;
      right: 0;
      background-color: white;
      z-index: 100;
      flex-wrap: nowrap;
      overflow-x: scroll;
    }

    .virtual-keyboard .shadow-right,
    .virtual-keyboard .shadow-left {
      display: block;
      position: fixed;
      width: 24px;
      height: 48px;
      line-height: 48px;
      bottom: 68px;
      background-color: #fafafa;
      border-bottom: 1px solid #e6e6e6;
      bottom: calc(100vh - 68px);
    }

    .virtual-keyboard .shadow-left {
      left: 0;
      background: linear-gradient(270deg, transparent, white, white);
    }

    .virtual-keyboard .shadow-right {
      right: 0;
      background: linear-gradient(90deg, transparent, white, white);
    }
  }
</style>
