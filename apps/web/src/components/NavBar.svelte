<script lang="typescript">
  import settings from "../settings"
  import authStore from "../auth"
  import SponsorButton from "./SponsorButton"
  import GitHubButton from "./GitHubButton"
  import Icon from "lluis/Icon.svelte"
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
        <SponsorButton />
        <GitHubButton />
        {#if hasAuth && settings.features.authEnabled}
          {#if $authStore.user}
            <Button size="small" outlined inverted info>
              <Icon size="small" icon="user" />
              <span>{$authStore.user.name}</span>
            </Button>
            <Button
              on:click="{() => window._Logout()}"
              size="small"
              outlined
              inverted
              info
            >
              Log out
            </Button>
          {:else}
            <Button href="/sign-up" size="small" outlined inverted info>
              Sign up
            </Button>
            <Button href="/login" size="small" outlined inverted info>
              Log in
            </Button>
          {/if}
        {/if}
      </div>
    </div>
  </div>
</nav>

<style type="text/scss">
  @import "../variables";

  .navbar.dark {
    background: $blue;
    color: $white-light;
  }

  .navbar {
    border: 0;
    .navbar-end {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
</style>
