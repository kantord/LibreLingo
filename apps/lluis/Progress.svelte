<script>
  export let value = 0.0
</script>

<progress {value} max="1">
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
    background-color: var(--white);
    padding: 0;
  }

  progress::-webkit-progress-bar {
    background-color: var(--white);
  }

  progress::-webkit-progress-value {
    background-color: var(--blue);
  }

  progress::-moz-progress-bar {
    background-color: var(--blue);
  }
</style>
