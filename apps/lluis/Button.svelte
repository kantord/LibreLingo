<script lang="typescript">
  import { createEventDispatcher } from "svelte"
  import LinkOrButton from "./primitives/LinkOrButton.svelte"

  const dispatch = createEventDispatcher()
  export let href: string | null = null
  export let size: "small" | "normal" | "medium" | "large" = "normal"
  export let loading = false
  export let asHref: string | null = null
  export let type: "button" | "submit" = "button"
  export let style: "primary" | "secondary" = "secondary"
  export let color: string | undefined = undefined
  export let textColor: string | undefined = undefined
  export let target: string | undefined = undefined
  export let tabIndex: number | undefined = undefined
  export let disabled = false
</script>

<div class="lluis-button" class:small={size === "small"} class:large={size === "large"} data-style={style}>
  <LinkOrButton href={href} on:click="{() => dispatch('click')}" type={type} target={target} tabIndex={tabIndex} disabled={disabled}>
    <slot />
  </LinkOrButton>
</div>

{#if asHref != null}
  <a class="hidden-link" href={asHref} />
{/if}

<style type="text/scss">
  .lluis-button {
    display: inline-block;
  }

  div>:global(*) {
    display: block;
    border-radius: var(--button-radius-small);
    padding: 6px 20px;
    margin: 4px;
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

  div[data-style=primary]>:global(*) {
    border: 1px solid var(--button-primary-border);
    color: var(--button-primary-text-color) !important; /* TODO: remove when hero is remoevd */
    background-color: var(--button-primary-background-color) !important;
  }

  div[data-style=secondary]>:global(*) {
    border: 1px solid var(--button-secondary-border);
    color: var(--button-secondary-text-color) !important;
    background-color: var(--button-secondary-background-color) !important;
  }

  .small>:global(*) {
    font-size: 16px;
    padding: 3px 12px;
  }

  .medium>:global(*) {
    font-size: 18px;
    padding: 3px 12px;
  }

  .large>:global(*) {
    font-size: 20px;
    padding: 9px 28px;
  }
</style>
