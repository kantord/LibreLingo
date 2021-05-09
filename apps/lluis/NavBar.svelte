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

  <div class="middle"></div>

  <div class="right">
    <slot name="buttons" />
  </div>

</nav>

<style type="text/scss">
  nav {
    display: flex;
    position: relative;
    left: 0;
    right: 0;
    height: var(--navbar-height);
    padding: 8px 16px;

    background: var(--navbar-background);
    color: var(--navbar-text-color);
    border: 0;
    .navbar-end {
      position: absolute;
      right: 0;
      top: 0;
    }

    >* {
      img {
        height: var(--navbar-logo-height);
      }
    }

    .middle {
      flex-grow: 1;
    }
  }
</style>
