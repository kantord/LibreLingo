<script lang="typescript">
  export let href: string
</script>

<a href={href}>
  <slot />
</a>

<style type="text/scss">
  a {
    display: block;
    padding: 6px;
    color: var(--navbar-text-color);
  }
</style>
