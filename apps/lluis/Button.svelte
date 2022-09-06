<script lang="ts">
  import { createEventDispatcher } from "svelte"
  import LinkOrButton from "./primitives/LinkOrButton.svelte"
  import Spinner from "./Spinner.svelte"
  import Stack from "lluis/Stack.svelte"

  const dispatch = createEventDispatcher()
  export let href: string | null = null
  export let size: "small" | "medium" | "large" = "medium"
  export let loading = false
  export let asHref: string | null = null
  export let type: "button" | "submit" = "button"
  export let style: "primary" | "secondary" | "accent" | "key" = "primary"
  export let target: string | undefined = undefined
  export let tabIndex: number | undefined = undefined
  export let disabled = false
</script>


<LinkOrButton
  ref="lluis-button"
  data-size={size}
  {href}
  on:click={() => dispatch("click")}
  {type}
  {target}
  {tabIndex}
  {disabled}
>
  {#if loading}
    <Spinner />
  {:else}
    <Stack>
      <div slot="icon-left" />
      <slot />
    </Stack>
  {/if}
</LinkOrButton>

{#if asHref != null}
  <a class="hidden-link" href={asHref}>&nbsp;</a>
{/if}

<style>
  :global([ref=lluis-button]) {
    font-size: var(--font-size-normal);
    line-height: calc(var(--font-size-normal) * 1.5);
    gap: 0.5rem;
    align-items: center;
    display: inline-flex;
    justify-content: center;
    border-radius: 2.5rem;
    padding: 0 1.5rem;
    height: 2.5rem;
    color: var(--text-color-inverted);
    background-color: var(--button-color-primary);
    border: 1px solid transparent;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.15s;
  }

  :global([ref=lluis-button][data-size=medium]) {
    font-size: var(--font-size-large);
    line-height: calc(var(--font-size-large) * 1.5);
  }

  :global([ref=lluis-button][data-size=large]) {
    font-size: var(--font-size-xlarge);
    line-height: calc(var(--font-size-xlarge) * 1.5);
  }

  :global([ref=lluis-button][data-style=accent]) {
    background-color: var(--button-color-accent);
    color: var(--text-color-default);
  }

  :global([ref=lluis-button][data-style=secondary]) {
    background-color: var(--button-color-secondary);
    color: var(--text-color-default);
  }
</style>
