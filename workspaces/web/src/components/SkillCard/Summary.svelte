<script lang="typescript">
  import ClampedText from "lluis/ClampedText"

  export let summary
  export let stale
  export let completed
</script>

<div class:completed class:stale>
  <ClampedText text="{`Learn: ${summary.join(', ')}`}" />
</div>

<style type="text/scss">
  @import "../../variables";

  .completed,
  .stale {
    color: $white;
  }
</style>
