<script>
  export let size = null
  export let sizeDesktop = null
  export let sizeTablet = null
</script>

<div
  class:is-one-third-desktop="{sizeDesktop === 'one-third'}"
  class:is-half-tablet="{sizeTablet === 'half'}"
  class:is-one-quarter="{size === 'one-quarter'}"
  class="column">
  <slot />
</div>
