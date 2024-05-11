<script lang="ts">
  export let phrase
</script>

<b class="phrase">
  {#each phrase as { word, definition }}
    {#if definition}
      <span class="has-tooltip-bottom" data-tooltip="{definition}">{word}</span>
    {:else}<span>{word}</span>{/if}
  {/each}
</b>

<style type="text/scss">
  @import "../variables";

  .phrase span {
    margin: 0 0.15em;

    &.has-tooltip-bottom {
      text-decoration: dotted underline rgba($blue, 0.5);
    }

    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-left: 0;
    }
  }
</style>
