<script lang="typescript">
  import type { SizeType } from "./types"

  export let size: null | SizeType = null
  export let sizeDesktop: null | SizeType = null
  export let sizeTablet: null | SizeType = null
</script>

<div
  data-size={size}
  data-size-desktop={sizeDesktop}
  data-size-tablet={sizeTablet}
  class:is-one-third-desktop={sizeDesktop === "1/3"}
  class:is-half-tablet={sizeTablet === "1/2"}
  class:is-one-third-tablet={sizeTablet === "1/3"}
  class:is-one-quarter={size === "1/4"}
  class:is-one-third={size === "1/3"}
  class:is-three-fifths={size === "3/5"}
  class:is-1={size === "1"}
  class="column"
>
  <slot />
</div>
