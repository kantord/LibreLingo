<script lang="typescript">
  import { createEventDispatcher } from "svelte"
  import LinkOrButton from "./primitives/LinkOrButton.svelte"

  const dispatch = createEventDispatcher()
  export let href: string | null = null
  export let size: "small" | "normal" | "large" = "normal"
</script>

<div class="lluis-button" class:small={size === "small"} class:large={size === "large"}>
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
    transition-property: filter;
    transition-duration: .1s;
    transition-timing-function: ease-in-out;

    &:hover, &:focus {
      filter: brightness(1.2);
    }

    &:active {
      filter: brightness(.9);
      transform: scale(0.9);
    }
  }

  .small :global(*) {
    font-size: 16px;
    padding: 3px 12px;
  }

  .large :global(*) {
    font-size: 18px;
    padding: 9px 28px;
  }
</style>
