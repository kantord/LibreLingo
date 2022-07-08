<script lang="ts">
  import Summary from "./Summary.svelte"
  import Title from "lluis/Title.svelte"
  import Progress from "lluis/Progress.svelte"

  export let title
  export let completed
  export let started
  export let summary
  export let progress
  export let levels
  export let stale
</script>

<div class="media-content" class:completed class:stale>
  <Title size={4}>{title}</Title>
  {#if completed || !started}
    <Summary {summary} {stale} {completed} />
  {/if}
  {#if !completed && started}
    <Progress value={progress} max={levels} />
  {/if}
</div>

<style type="text/scss">
  @import "../../variables";

  .completed,
  .stale {
    * {
      color: $white;
    }
  }
</style>
