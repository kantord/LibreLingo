<script>
  export let href
  export let primary = false
  export let inverted = false
  export let outlined = false
  export let hidden = false
</script>

<a
  class="button"
  class:is-primary="{primary}"
  class:is-inverted="{inverted}"
  class:is-outlined="{outlined}"
  class:is-hidden="{hidden}"
  {href}>
  <slot />
</a>

<style>
  @import "../../variables";
</style>
