<script lang="ts">
  import Progress from "lluis/Progress.svelte"
  import { tweened } from "svelte/motion"

  export let value

  const progress = tweened(0)
  $: progress.set(value)
</script>

<div>
  <Progress value={$progress} />
</div>

<style type="text/scss">
  @import "../variables";
  div {
    padding-bottom: $size-6;
  }
</style>
