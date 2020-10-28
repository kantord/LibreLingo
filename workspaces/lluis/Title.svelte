<script lang="typescript">
  export let sizeMobile = null
  export let sizeTablet = null
  export let sizeDesktop = null
  export let isSubtitle = false
  export let isSpaced = false
  export let size = isSubtitle ? 5 : 3
</script>

<h1
  class:title={!isSubtitle}
  class:subtitle={isSubtitle}
  class="{`is-size-${size} is-size-${sizeMobile || size}-mobile is-size-${sizeTablet || size}-tablet is-size-${sizeDesktop || size}-desktop`}"
  class:is-spaced={isSpaced}>
  <slot />
</h1>
