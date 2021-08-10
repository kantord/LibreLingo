<script lang="typescript">
  import { createEventDispatcher } from "svelte"

  const dispatch = createEventDispatcher()
  export let href: string | null = null
</script>

{#if href !== null}
	<a href={href} {...$$restProps}>
    <slot />
	</a>
{/if}

{#if href === null}
	<button on:click={() => dispatch("click")} {...$$restProps}>
    <slot />
	</button>
{/if}

<style type="text/scss">
  button {
    display: block;
    background: transparent;
    border: 0;
    font-size: inherit;
    cursor: pointer;
  }
</style>
