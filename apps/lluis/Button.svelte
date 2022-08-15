<script lang="typescript">
  import { createEventDispatcher } from "svelte"
  import LinkOrButton from "./primitives/LinkOrButton.svelte"
  import Icon from "lluis/Icon.svelte"

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

<div
  class="btn"
  data-style={style}
  class:btn--small={size === "small"}
  class:btn--medium={size === "medium"}
  class:btn--large={size === "large"}
>
  <LinkOrButton
    {href}
    on:click={() => dispatch("click")}
    {type}
    {target}
    {tabIndex}
    {disabled}
  >
    {#if loading}
      <span class="spinner">
        <Icon icon="spinner" />
      </span>
    {:else}
      <slot />
    {/if}
  </LinkOrButton>
</div>

{#if asHref != null}
  <a class="hidden-link" href={asHref}>&nbsp;</a>
{/if}
