<nav data-test-id="site-navbar" aria-label="main navigation">
  <div class="left">
    <slot name="left" />
  </div>

  <div class="middle" />

  <div class="right">
    <slot name="right" />
  </div>
</nav>

<style>
  nav {
    display: flex;
    position: relative;
    left: 0;
    right: 0;
    height: var(--deprecated-navbar-height);
    padding: var(--deprecated-navbar-padding-vertical)
      var(--deprecated-navbar-padding-horizontal);

    background: var(--deprecated-navbar-background);
    color: var(--deprecated-navbar-text-color);
    border: 0;
  }

  nav >* img {
      height: var(--deprecated-navbar-logo-height);
  }

   nav .middle {
      flex-grow: 1;
    }
</style>
