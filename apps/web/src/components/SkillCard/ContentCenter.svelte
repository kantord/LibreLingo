<script lang="typescript">
  import Summary from "./Summary.svelte"
  import Title from "lluis/Title.svelte"

  export let title
  export let completed
  export let started
  export let summary
  export let progress
  export let levels
  export let stale
</script>

<div class="skill-card__content" class:is-completed={completed} class:is-stale={stale}>
  <h3 class="skill-card__heading">{title}</h3>
  {#if completed || !started}
    <Summary summary="{summary}" stale="{stale}" completed="{completed}" />
  {/if}
  {#if !completed && started}
    <progress class="progress skill-card__progress" value="{progress}" max="{levels}"></progress>
  {/if}
</div>
