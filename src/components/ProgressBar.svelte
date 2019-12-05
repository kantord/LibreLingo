<script>
  import { tweened } from "svelte/motion";

  export let value;

  const progress = tweened(0);
  $: progress.set(value);
</script>

<div>
  <progress class="progress" value="{$progress}" max="1">
    {$progress * 100}%
  </progress>
</div>

<style>
  @import "../variables";

  div {
    padding: $size-6;
  }
</style>
