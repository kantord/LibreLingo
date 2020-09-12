<script>
  export let images
</script>

<figure class="image image-set is-96x96">
  <img src="{images[0]}" alt="" />
  <img src="{images[1]}" alt="" />
  <img src="{images[2]}" alt="" />
</figure>

<style>
  .image-set {
    position: relative;
    overflow: hidden;
  }

  .image-set img {
    left: 15%;
    top: 15%;
    width: 70%;
    position: absolute;
  }

  .image-set img:first-child {
    position: absolute;
    left: 0;
    top: 0;
  }

  .image-set img:last-child {
    position: absolute;
    left: 30%;
    top: 30%;
  }
</style>
