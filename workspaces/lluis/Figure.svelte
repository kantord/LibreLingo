<script lang="typescript">
  export let size
  export let className
  export let isRounded = false;
</script>

<figure class="image { size ? `is-${size}` : '' } {className}" class:is-rounded={isRounded}>
  <slot/>
</figure>


<style type="text/scss">
  @import './node_modules/bulma/sass/utilities/_all';
  @import './node_modules/bulma/sass/elements/image.sass';
</style>