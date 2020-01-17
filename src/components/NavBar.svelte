<script>
  export let dark;
  export let is_hidden_mobile;
</script>

<nav
  class="navbar"
  class:dark
  class:is-hidden-mobile="{is_hidden_mobile}"
  role="navigation"
  aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src="/images/logo.svg" alt="LibreLingo" />
    </a>
  </div>

  <div class="navbar-end is-hidden-tablet is-hidden-mobile">
    <a class="navbar-item" href="https://github.com/kantord/LibreLingo">
      GitHub
    </a>
  </div>
</nav>

<style>
  @import "../variables";

  .navbar.dark {
    background: $blue;
    color: $white-light;
  }
</style>
