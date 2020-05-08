<script>
  export let size = null
  export let sizeDesktop = null
  export let sizeTablet = null
</script>

<div
  class:is-one-third-desktop="{sizeDesktop === 'one-third'}"
  class:is-half-tablet="{sizeTablet === 'half'}"
  class:is-one-quarter="{size === 'one-quarter'}"
  class:is-one-fourth="{size === 'one-fourth'}"
  class:is-three-fifths="{size === 'three-fifths'}"
  class:is-1="{size === '1'}"
  class="column">
  <slot />
</div>
