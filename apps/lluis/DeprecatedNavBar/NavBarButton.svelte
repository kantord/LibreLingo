<script lang="ts">
  import LinkOrButton from "../primitives/LinkOrButton.svelte"
  import { createEventDispatcher } from "svelte"

  const dispatch = createEventDispatcher()
  export let href: string | null = null
  export let target: "_blank" | undefined = undefined
</script>

<div>
  <LinkOrButton {href} on:click={() => dispatch("click")} {target}>
    <slot />
  </LinkOrButton>
</div>

<style type="text/scss">
  div :global(*) {
    height: 36px;
    display: block;
    padding: 6px;
    color: var(--deprecated-navbar-text-color);
    border-radius: var(--deprecated-button-radius-small);

    &:hover,
    &:focus {
      background-color: var(--deprecated-navbar-highlight-color);
    }
  }
</style>
