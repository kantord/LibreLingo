<script lang="typescript">
  import ImageSet from "./ImageSet"

  export let imageSet
  export let stale
  export let completed
</script>

{#if imageSet && imageSet.length}
  <div class="media-left" class:stale class:completed>
    <div class="image-set">
      <ImageSet imageSet="{imageSet}" stale="{stale}" completed="{completed}" />
    </div>
  </div>
{/if}

<style type="text/scss">
  @import "../../variables";

  .stale,
  .completed {
    mix-blend-mode: screen;

    .image-set {
      filter: saturate(0);
    }
  }
</style>
