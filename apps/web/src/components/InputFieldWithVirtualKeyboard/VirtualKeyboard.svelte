<script lang="typescript">
  // Manual test: http://localhost:3000/course/test/skill/short-input-test-3?testChallenge=86665e4f61fa
  import Button from "../../../../lluis/Button.svelte"
  import HorizontalScroller from "../../../../lluis/HorizontalScroller.svelte"

  export let characters: Array<string>
  export let handleVirtualKey
</script>

<div class="virtual-keyboard">
  <HorizontalScroller>
    <slot>
      <div class="keys">
        {#each characters as character}
          <Button
            style="key"
            tabIndex={-1}
            size="small"
            on:click={handleVirtualKey(character)}
          >
            {character}
          </Button>
        {/each}
      </div>
    </slot>
  </HorizontalScroller>
</div>

<style type="text/scss">
  .virtual-keyboard {
    display: flex;
    flex-wrap: wrap;
    margin-top: 2em;
    height: 100%;
  }

  .virtual-keyboard .keys {
    display: flex;
    flex-wrap: wrap;
  }

  @media only screen and (pointer: coarse) {
    .virtual-keyboard .keys {
      display: flex;
      flex-wrap: nowrap;
      padding-left: 12px;
      padding-right: 12px;
    }

    .virtual-keyboard {
      height: 48px;
      position: fixed;
      bottom: 68px;
      left: 0;
      right: 0;
      background-color: white;
      z-index: 100;
    }
  }
</style>
