<script lang="typescript">
  export let sizeMobile = null
  export let sizeTablet = null
  export let sizeDesktop = null
  export let isSubtitle = false
  export let isSpaced = false
  export let size = isSubtitle ? 5 : 3
  export let textWeight = null
  export let align = null
</script>

<h1
  class:title={!isSubtitle}
  class:subtitle={isSubtitle}
  class="{`is-size-${size}
  ${sizeMobile ? `is-size-${sizeMobile}-mobile` : '' }
  ${sizeTablet ? `is-size-${sizeTablet}-tablet` : ''}
  ${sizeDesktop ? `is-size-${sizeDesktop}-desktop` : ''}
  ${textWeight? `has-text-weight-${textWeight}` : '' }
  ${align? `has-text-${align}` : '' }`}"
  class:is-spaced={isSpaced}>
  <slot />
</h1>

<style type="text/scss">
  @import './node_modules/bulma/sass/utilities/_all';
  @import "./node_modules/bulma/sass/elements/title.sass";
</style>