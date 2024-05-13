<script lang="ts">
  export let multiline = false
  export let reversed = false
</script>

<div
  class="columns"
  class:is-multiline={multiline}
  class:is-reversed={reversed}
>
  <slot />
</div>

<style type="text/scss">
  @import "./node_modules/bulma/sass/utilities/_all";

  @include until($tablet) {
    .is-reversed {
      flex-direction: column-reverse;
      display: flex;
    }
  }
</style>
