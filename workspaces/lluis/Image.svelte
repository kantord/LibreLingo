<script lang="typescript">
  export let src
  export let alt
  export let size
  export let className
  export let isRounded = false;
</script>

<figure class="image { size ? `is-${size}` : '' } {className}" class:is-rounded={isRounded}>
  <img {src} {alt}>
</figure>


<style type="text/scss">
  @import './node_modules/bulma/sass/utilities/_all';
  @import './node_modules/bulma/sass/elements/image.sass';

  .screenshot {
    box-shadow: 0 0 2em #ffffff42;
  }
</style>