<script lang="ts">
  import type { SizeType } from "./types"

  export let sizeMobile: null | SizeType = null
  export let sizeTablet: null | SizeType = null
  export let sizeDesktop: null | SizeType = null
  export let isSubtitle = false
  export let isSpaced = false
  export let size = isSubtitle ? 5 : 3
  export let textWeight: null | "semibold" = null
  export let align: null | "centered" = null
  export let multiline = false
</script>

<h1
  class:title={!isSubtitle}
  class:subtitle={isSubtitle}
  class:multiline
  class={`is-size-${size}
  ${sizeMobile ? `is-size-${sizeMobile}-mobile` : ""}
  ${sizeTablet ? `is-size-${sizeTablet}-tablet` : ""}
  ${sizeDesktop ? `is-size-${sizeDesktop}-desktop` : ""}
  ${textWeight ? `has-text-weight-${textWeight}` : ""}
  ${align ? `has-text-${align}` : ""}`}
  class:is-spaced={isSpaced}
>
  <slot />
</h1>

<style type="text/scss">
  @import "./node_modules/bulma/sass/utilities/_all";
  @import "./node_modules/bulma/sass/elements/title.sass";

  h1 {
    max-width: 100%;
    &:not(.multiline) {
      text-overflow: ellipsis;

      /* Needed to make ellipsis work */
      overflow: hidden;
      white-space: nowrap;
    }

    color: inherit !important;
  }
</style>
