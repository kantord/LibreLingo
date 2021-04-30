<script lang="typescript">
  import ButtonLink from "lluis/ButtonLink.svelte"

  export let practiceHref
  export let completed
  export let started
  export let title
</script>

<div class="button-container">
  {#if completed}
    <ButtonLink primary href="{practiceHref}">Practice {title}</ButtonLink>
  {:else if started}
    <ButtonLink primary href="{practiceHref}">Continue {title}</ButtonLink>
  {:else}
    <ButtonLink primary href="{practiceHref}">Learn {title}</ButtonLink>
  {/if}
</div>
