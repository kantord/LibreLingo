<script lang="typescript">
  import { createEventDispatcher } from "svelte"
  import LinkOrButton from "./primitives/LinkOrButton.svelte"

  const dispatch = createEventDispatcher()
  export let href: string | null = null
</script>

<div>
  <LinkOrButton href={href} on:click="{() => dispatch('click')}">
    <slot />
  </LinkOrButton>
</div>

<style type="text/scss">
  div :global(*) {
    color: var(--button-text-color);
    background-color: var(--button-background-color) !important;
    border-radius: var(--button-radius-small);
    padding: 6px 20px;

    &:hover, &:focus {
      filter: brightness(1.2);
    }

    &:active {
      filter: brightness(.9);
    }
  }
</style>
