<script>
  import { createEventDispatcher } from "svelte"

  const dispatch = createEventDispatcher()
  export let href
  export let primary = false
  export let info = false
  export let inverted = false
  export let outlined = false
  export let hidden = false
  export let color = null
  export let textColor = null
  export let customColor = color != null
  export let customTextColor = textColor != null
  export let target = "_self"
  export let size = "default"
  export let type = null

  let styleTokens = `
    --color:${color};
    --textColor:${textColor};
  `
</script>

{#if href}

  <a
    style="{styleTokens}"
    class="button is-{size}"
    class:is-primary="{primary}"
    class:is-info="{info}"
    class:is-inverted="{inverted}"
    class:is-outlined="{outlined}"
    class:is-hidden="{hidden}"
    class:customColor
    class:customTextColor
    {href}
    {target}>
    <slot />
  </a>
{/if}

{#if type}
  <button
    style="{styleTokens}"
    class="button is-{size}"
    class:is-primary="{primary}"
    class:is-info="{info}"
    class:is-inverted="{inverted}"
    class:is-outlined="{outlined}"
    class:is-hidden="{hidden}"
    class:customColor
    class:customTextColor
    on:click="{() => dispatch('click')}"
    {type}>
    <slot />
  </button>

{/if}

<style>
  @import "../../variables";
  $button-color: $text-strong !default;
  $button-focus-color: $link-focus !default;
  $button-active-color: $link-active !default;
  $button-hover-color: $link-hover !default;
  $button-focus-color: $link-focus !default;

  .button.customColor {
    background-color: var(--color);
  }

  .button.customTextColor {
    color: var(--textColor);
  }
</style>
