<script>
  export let shadow = true
  export let glow = false
  let imageURL =
    shadow === true
      ? "images/mascot-error.svg"
      : "images/mascot-error-noshadow.svg"
</script>

<img data-test="mascot-error" src="{imageURL}" alt="" class:glow />

<style>
  .glow {
    filter: drop-shadow(0 0 2em #ffffff1c);
  }
</style>
