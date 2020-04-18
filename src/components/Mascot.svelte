<script>
  export let shadow = true
  let imageURL =
    shadow === true
      ? "images/mascot-jetpack.svg"
      : "images/mascot-jetpack-noshadow.svg"
</script>

<img data-test="mascot-jetpack" src="{imageURL}" alt="" />
