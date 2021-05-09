<script lang="typescript">
  export let src: string
  export let alt: string
</script>

<a href="/" class="logo">
  <img src={src} alt={alt}/>
</a>

<style type="text/scss">
  .logo {
    display: block;

    img {
      height: var(--navbar-logo-height);
    }
  }
</style>
