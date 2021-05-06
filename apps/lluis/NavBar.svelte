<script lang="typescript">
  export let dark = false
  export let is_hidden_mobile = false
</script>

<nav
  class="navbar"
  class:is-hidden-mobile={is_hidden_mobile}
  role="navigation"
  aria-label="main navigation"
>

  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src="/images/logo.svg" alt="LibreLingo" />
    </a>
  </div>

  <div class="navbar-start"></div>

  <div class="navbar-end">
    <div class="navbar-item">
  <div class="buttons">
  <slot name="buttons" />
  </div>
    </div>
  </div>

</nav>

<style type="text/scss">
  .navbar {
    background: var(--navbar-dark-background);
    color: var(--navbar-dark-text-color);
    border: 0;
    .navbar-end {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
</style>
