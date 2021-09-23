<script lang="typescript">
  import { createEventDispatcher } from "svelte"

  const dispatch = createEventDispatcher()
  export let href: string | null = null
  export let type: "button" | "submit" = "button"
  export let target: string | undefined = undefined
  export let tabIndex: number | undefined = undefined
  export let disabled = false
</script>

{#if href !== null}
	<a href={href} target={target} tabindex="{tabIndex}" {...$$restProps}>
    <slot />
	</a>
{/if}

{#if href === null}
	<button type={type} tabindex="{tabIndex}" disabled={disabled} on:click={() => dispatch("click")} {...$$restProps}>
    <slot />
	</button>
{/if}

<style type="text/scss">
  button {
    display: inline-block;
    background: transparent;
    border: 0;
    font-size: inherit;
    cursor: pointer;
  }
</style>
