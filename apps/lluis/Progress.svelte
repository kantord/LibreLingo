<script>
  export let value = 0.0
</script>

<progress value={value} max="1">
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
    background: blue;
    padding: 0;
  }

  progress::-webkit-progress-bar {
    background-color: red;
  }

  progress::-webkit-progress-value {
    background-color: green;
  }

  progress::-moz-progress-bar {
    background-color: red;
  }

  progress::-moz-progress-value {
    background-color: green;
  }
</style>
