<script lang="typescript">
  import settings from "../settings"
  import authStore from "../auth"
  import NavBar from "lluis/NavBar.svelte"
  import Icon from "lluis/Icon.svelte"
  import Button from "lluis/Button.svelte"
  import Logo from "lluis/Logo.svelte"
  import NavBarLinkButton from "lluis/NavBarLinkButton.svelte"
  import NavBarItem from "lluis/NavBarItem.svelte"
  import NavBarButtonSet from "lluis/NavBarButtonSet.svelte"
  export let hasAuth = false

  type WindowWithLogout = Window & {
    _Logout: () => void
  }
  const _Logout = () => (window as unknown as WindowWithLogout)._Logout()
</script>

<NavBar>
  <div slot="left">
    <Logo src="/images/logo.svg" alt="LibreLingo" />
  </div>

  <div slot="right">
    <NavBarButtonSet>
      {#if hasAuth && settings.features.authEnabled}
        {#if $authStore.user}
          <NavBarItem>
            <Icon size="small" icon="user" />
            <span>{$authStore.user.name}</span>
          </NavBarItem>
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
          <NavBarLinkButton href="/sign-up">
            Sign up
          </NavBarLinkButton>
          <NavBarLinkButton href="/login">
            Log in
          </NavBarLinkButton>
        {/if}
      {/if}
    </NavBarButtonSet>
  </div>
</NavBar>

<style>
  div {
    height: 100%;
  }
</style>
