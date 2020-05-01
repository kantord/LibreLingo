<script>
  export let href
  export let primary = false
  export let inverted = false
  export let outlined = false
  export let hidden = false
  export let color = "initial"
  export let textColor = "initial"
  export let target = "_self"
  export let size = "default"

  let styleTokens = `
    --color:${color};
    --textColor:${textColor};
  `
</script>

<a
  style="{styleTokens}"
  class="button is-{size}"
  class:is-primary="{primary}"
  class:is-inverted="{inverted}"
  class:is-outlined="{outlined}"
  class:is-hidden="{hidden}"
  {href}
  {target}>
  <slot />
</a>

<style>
  @import "../../variables";

  .button {
    background-color: var(--color);
    color: var(--textColor);
  }
</style>
