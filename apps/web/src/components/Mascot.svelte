<script lang="ts">
  export let shadow = true
  export let glow = false
  let imageURL =
    shadow === true
        ? "images/mascot-jetpack.svg"
        : "images/mascot-jetpack-noshadow.svg"
</script>

<img data-test="mascot-jetpack" src="{imageURL}" alt="" class:glow />

<style type="text/scss">
  .glow {
    filter: drop-shadow(0 0 2em #ffffff1c);
  }
</style>
