<script>
  import Backdrop from "./Backdrop.svelte"
</script>

<div class="hero">
  <Backdrop />
  <div class="content">
    <slot />
  </div>
</div>

<style>
  .hero {
    position: relative;
    max-width: var(--hero-max-width);
    margin: auto;
    aspect-ratio: 17/10;
    padding-left: 10%;
    padding-right: 10%;
    overflow: hidden;
  }

  @media screen and (max-width: 992px) {
    .hero {
      aspect-ratio: unset;
    }
  }

  .content {
    width: 100%;
    height: 100%;
    z-index: 1;
  }
</style>
