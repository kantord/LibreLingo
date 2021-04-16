<script lang="typescript">
  import ClampedText from "lluis/ClampedText.svelte"

  export let summary: Array<string>
  export let stale: boolean
  export let completed: boolean
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
