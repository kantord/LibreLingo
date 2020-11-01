<script lang="typescript">
  export let isContainer = false
  export let size = null
  export let style = ""
</script>

<div class="tags {`${ isContainer && size ? `are-${size}` : ''}`}" {style}>
  <slot />
</div>


<style type="text/scss">
  @import './node_modules/bulma/sass/utilities/_all';
</style>