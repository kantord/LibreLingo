<script>
  import { tweened } from "svelte/motion"

  export let value

  const progress = tweened(0)
  $: progress.set(value)
</script>

<div>
  <progress class="progress is-warning" value="{$progress}" max="1">
    {$progress * 100}%
  </progress>
</div>

<style>
  @import "../variables";
  progress {
    border-radius: 20px;
  }
  div {
    padding: 30px 0;
  }
</style>
