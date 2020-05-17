<script>
  export let multiline = false
  export let reversed = false
</script>

<div
  class="columns"
  class:is-multiline="{multiline}"
  class:is-reversed="{reversed}">
  <slot />
</div>

<style>
  @import "../../variables";

  @include until($tablet) {
    .is-reversed {
      flex-direction: column-reverse;
      display: flex;
    }
  }
</style>
