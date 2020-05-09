<script>
  export let size = null
  export let sizeDesktop = null
  export let sizeTablet = null
</script>

<div
  data-size="{size}"
  data-size-desktop="{sizeDesktop}"
  data-size-tablet="{sizeTablet}"
  class:is-one-third-desktop="{sizeDesktop === 'one-third'}"
  class:is-half-tablet="{sizeTablet === 'half'}"
  class:is-one-third-tablet="{sizeTablet === 'one-third'}"
  class:is-one-quarter="{size === 'one-quarter'}"
  class:is-one-fourth="{size === 'one-fourth'}"
  class:is-one-third="{size === 'one-third'}"
  class:is-three-fifths="{size === 'three-fifths'}"
  class:is-1="{size === '1'}"
  class="column">
  <slot />
</div>
