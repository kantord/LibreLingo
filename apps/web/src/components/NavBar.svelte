<script lang="typescript">
  import settings from "../settings"
  import authStore from "../auth"
  import SponsorButton from "./SponsorButton.svelte"
  import GitHubButton from "./GitHubButton.svelte"
  import NavBar from "lluis/NavBar.svelte"
  import Icon from "lluis/Icon.svelte"
  import Button from "lluis/Button.svelte"
  import ButtonLink from "lluis/ButtonLink.svelte"
  export let dark = false
  export let is_hidden_mobile = false
  export let hasAuth = false

  type WindowWithLogout = Window & {
    _Logout: () => void
  }
  const _Logout = () => (window as unknown as WindowWithLogout)._Logout()

</script>

<NavBar>
  <span slot="buttons">
    <SponsorButton />
    <GitHubButton />
    {#if hasAuth && settings.features.authEnabled}
      {#if $authStore.user}
        <Button size="small" outlined inverted info>
          <Icon size="small" icon="user" />
          <span>{$authStore.user.name}</span>
        </Button>
        <Button
          on:click="{() => _Logout()}"
          size="small"
          outlined
          inverted
          info
        >
          Log out
        </Button>
      {:else}
        <ButtonLink href="/sign-up" size="small" outlined inverted info>
          Sign up
        </ButtonLink>
        <ButtonLink href="/login" size="small" outlined inverted info>
          Log in
        </ButtonLink>
      {/if}
    {/if}
  </span>
</NavBar>

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
