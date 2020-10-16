<script lang="typescript">
  import settings from "../settings"
  import authStore from "../auth"
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
  aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src="/images/logo.svg" alt="LibreLingo" />
    </a>
  </div>

  <div class="navbar-start"></div>

  <div class="navbar-end">
    <div class="navbar-item">
      <div class="buttons">
		<Button href="http://github.com/sponsors/kantord" size="small" outlined inverted info>
		<svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true" style="fill: #ea4aaa!important;margin-right: 5px">
		<path fill-rule="evenodd" d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 01-.69 0L8 14.25z">
		</path>
		</svg>
		Sponsor
        </Button>
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
              info>
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
