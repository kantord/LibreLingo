<script>
  export let imageSet
  export let completed
  export let stale
</script>

<figure class="image image-set is-96x96" class:completed class:stale>
  <img src="{`images/${imageSet[0]}_tinier.jpg`}" alt="" />
  <img src="{`images/${imageSet[1]}_tinier.jpg`}" alt="" />
  <img src="{`images/${imageSet[2]}_tiny.jpg`}" alt="" />
</figure>

<style>
  @import "../../variables";

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

  .stale,
  .completed {
    img {
      box-sizing: border-box;
      border: 1px solid rgba($white, 0.3);
    }
  }
</style>
