<script lang="ts">
  import { createEventDispatcher } from "svelte"

  const dispatch = createEventDispatcher()
  export let href: string | null = null
  export let type: "button" | "submit" = "button"
  export let target: string | undefined = undefined
  export let tabIndex: number | undefined = undefined
  export let disabled = false
</script>

{#if href !== null}
  <a {href} {target} tabindex={tabIndex} {...$$restProps}>
    <slot />
  </a>
{/if}

{#if href === null}
  <button
    {type}
    tabindex={tabIndex}
    {disabled}
    on:click={() => dispatch("click")}
    {...$$restProps}
  >
    <slot />
  </button>
{/if}
