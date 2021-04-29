<script lang="typescript">
  export let href: string
  export let primary = false
  export let light = false
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
  export let tabindex = 0
  export let key = false
  export let loading = false

  let styleTokens = `
    --color:${color};
    --textColor:${textColor};
  `
</script>

<a
  style="{styleTokens}"
  class="button is-{size}"
  class:is-primary="{primary}"
  class:is-light="{light}"
  class:is-info="{info}"
  class:is-inverted="{inverted}"
  class:is-outlined="{outlined}"
  class:is-hidden="{hidden}"
  class:is-loading="{loading}"
  class:customColor
  class:customTextColor
  class:key
  {href}
  {tabindex}
  {target}>
  <slot />
</a>

<style type="text/scss">
  .button.customColor {
    background-color: var(--color);
  }

  .button.customTextColor {
    color: var(--textColor);
  }

  .key {
    font-family: monospace;
    border-radius: 8px;
    text-transform: none;
    margin: 1em;
    margin-left: 0;
    margin-top: 0;
  }
</style>
