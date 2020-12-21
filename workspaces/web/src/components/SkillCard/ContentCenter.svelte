<script lang="typescript">
  import Summary from "./Summary"
  import Title from "lluis/Title"

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
    <Summary summary="{summary}" stale="{stale}" completed="{completed}" />
  {/if}
  {#if !completed && started}
    <progress class="progress" value="{progress}" max="{levels}"></progress>
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
