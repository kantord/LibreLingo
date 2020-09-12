<script>
  import ImageSet from "./ImageSet"

  export let imageSet
  export let stale
  export let completed
</script>

{#if imageSet && imageSet.length}
  <div class="media-left" class:stale class:completed>
    <div class="image-set">
      <ImageSet imageSet="{imageSet}" />
    </div>
  </div>
{/if}

<style>
  @import "../../variables";

  .stale,
  .completed {
    mix-blend-mode: screen;

    .image-set {
      filter: saturate(0);

      img {
        box-sizing: border-box;
        border: 1px solid rgba($white, 0.3);
      }
    }
  }
</style>
