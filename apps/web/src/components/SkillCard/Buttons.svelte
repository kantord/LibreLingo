<script lang="typescript">
  import Button from "lluis/Button.svelte"

  export let practiceHref
  export let completed
  export let started
  export let title
</script>

<div class="button-container">
  {#if completed}
    <Button primary href="{practiceHref}">Practice {title}</Button>
  {:else if started}
    <Button primary href="{practiceHref}">Continue {title}</Button>
  {:else}
    <Button primary href="{practiceHref}">Learn {title}</Button>
  {/if}
</div>
