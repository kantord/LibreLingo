<script>
  export let value = 0.0
  export let max = 1.0
</script>

<progress {value} {max}>
  {value * 100}%
</progress>

<style>
  progress {
    appearance: none;
    display: block;
    width: 100%;
    height: 1rem;
    border-radius: 6px;
    overflow: hidden;
    border: none;
    background-color: var(--deprecated-color-white);
    padding: 0;
  }

  progress::-webkit-progress-bar {
    background-color: var(--deprecated-color-white);
  }

  progress::-webkit-progress-value {
    background-color: var(--deprecated-color-blue);
  }

  progress::-moz-progress-bar {
    background-color: var(--deprecated-color-blue);
  }
</style>
