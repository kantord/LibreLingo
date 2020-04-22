<script>
  import GitHubButton from "./GitHubButton"
  export let dark = false
  export let is_hidden_mobile = false
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

  <div class="navbar-start"></div>

  <div class="navbar-end">
    <div class="navbar-item">
      <GitHubButton />
    </div>
  </div>
</nav>

<style>
  @import "../variables";

  .navbar.dark {
    background: $blue;
    color: $white-light;
  }

  .navbar {
    .navbar-end {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
</style>
