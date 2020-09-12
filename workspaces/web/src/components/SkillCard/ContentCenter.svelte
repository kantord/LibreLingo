<script>
  import Summary from "./Summary"

  export let title
  export let completed
  export let started
  export let summary
  export let progress
  export let levels
  export let stale
</script>

<div class="media-content" class:completed class:stale>
  <p class="title is-4">{title}</p>
  {#if completed || !started}
    <Summary summary="{summary}" stale="{stale}" completed="{completed}" />
  {/if}
  {#if !completed && started}
    <progress class="progress" value="{progress}" max="{levels}"></progress>
  {/if}
</div>

<style>
  @import "../../variables";

  .completed,
  .stale {
    * {
      color: $white;
    }
  }
</style>
