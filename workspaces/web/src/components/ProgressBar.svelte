<script lang="typescript">
  import { tweened } from "svelte/motion"

  export let value

  const progress = tweened(0)
  $: progress.set(value)
</script>

<div>
  <progress class="progress" value="{$progress}" max="1">
    {$progress * 100}%
  </progress>
</div>

<style type="text/scss">
  @import "../variables";
  div {
    padding-bottom: $size-6;
  }

  .progress {
    border: 1px solid transparentize($blue, 0.9);
  }
</style>
