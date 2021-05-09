<script lang="typescript">
  export let dark = false
  export let is_hidden_mobile = false
</script>

<nav
  class:is-hidden-mobile={is_hidden_mobile}
  role="navigation"
  aria-label="main navigation"
>

  <div class="left">
    <a href="/">
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
  nav {
    display: flex;
    position: relative;
    left: 0;
    right: 0;

    background: var(--navbar-background);
    color: var(--navbar-text-color);
    border: 0;
    .navbar-end {
      position: absolute;
      right: 0;
      top: 0;
    }

    .left {
      img {
        height: var(--navbar-height);
      }
    }
  }
</style>
