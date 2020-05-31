<script>
  import settings from "../settings"
  import authStore from "../auth"
  import GitHubButton from "./GitHubButton"
  import Button from "lluis/Button"
  export let dark = false
  export let is_hidden_mobile = false
  export let hasAuth = false
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
    <div class="navbar-item">
      {#if hasAuth && settings.features.authEnabled}
        {#if $authStore.user}
          <Button>{$authStore.user.name}</Button>
          <Button on:click="{() => window._Logout()}">Logout</Button>
        {:else}
          <Button on:click="{() => window._Login('jan', 'apple')}">
            Login
          </Button>
        {/if}
      {/if}
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
