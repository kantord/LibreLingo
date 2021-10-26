<script lang="typescript">
  import LinkOrButton from "../primitives/LinkOrButton.svelte"
  import { createEventDispatcher } from "svelte"

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
    display: block;
    padding: 6px;
    color: var(--navbar-text-color);
    border-radius: var(--button-radius-small);

    &:hover, &:focus {
      background-color: var(--navbar-highlight-color);
    }
  }
</style>
