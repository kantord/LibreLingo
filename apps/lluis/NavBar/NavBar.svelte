<nav data-test-id="site-navbar" aria-label="main navigation">
  <div class="left">
    <slot name="left" />
  </div>

  <div class="middle" />

  <div class="right">
    <slot name="right" />
  </div>
</nav>

<style type="text/scss">
  nav {
    display: flex;
    position: relative;
    left: 0;
    right: 0;
    height: var(--navbar-height);
    padding: var(--navbar-padding-vertical) var(--navbar-padding-horizontal);

    background: var(--navbar-background);
    color: var(--navbar-text-color);
    border: 0;

    > * {
      img {
        height: var(--navbar-logo-height);
      }
    }

    .middle {
      flex-grow: 1;
    }
  }
</style>
