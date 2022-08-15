<script lang="typescript">
  import settings from "../settings"
  import authStore from "../auth"
  import NavBar from "lluis/NavBar/NavBar.svelte"
  import Icon from "lluis/Icon.svelte"
  import Hidden from "lluis/Hidden.svelte"
  import NavBarButton from "lluis/NavBar/NavBarButton.svelte"
  import Logo from "lluis/Logo.svelte"
  import NavBarItem from "lluis/NavBar/NavBarItem.svelte"
  import NavBarButtonSet from "lluis/NavBar/NavBarButtonSet.svelte"
  export let hasAuth = false
  export let repositoryURL = null

  type WindowWithLogout = Window & {
    _Logout: () => void
  }
  const _Logout = () => (window as unknown as WindowWithLogout)._Logout()
</script>

<NavBar data-test="navbar">
  <div slot="left" class="navbar__logo navbar__logo--icon col-2">
    <Logo src="/images/logo-icon.svg" alt="LibreLingo" />
  </div>

  <div slot="middle" class="navbar__middle col-8">
    <!-- TODO: Move from ChallengeScreen -->
    <Hidden>
      <progress class="progress" value="" max=""></progress>
    </Hidden>
  </div>

  <div slot="right" class="navbar__nav col-2">
    <NavBarButtonSet>
      <!-- TODO: Implement flag -->
      <Hidden>
        <a href="/"><img src="/images/flag-spanish.png" alt="Flag" class="navbar__flag"></a>
      </Hidden>
      {#if hasAuth && settings.features.authEnabled}
        {#if $authStore.user}
          <NavBarItem>
            <Icon size="small" icon="user" />
            <span>{$authStore.user.name}</span>
          </NavBarItem>
          <NavBarButton on:click="{() => _Logout()}">Log out</NavBarButton>
        {:else}
          <NavBarButton href="/sign-up">Sign up</NavBarButton>
          <NavBarButton href="/login">Log in</NavBarButton>
        {/if}
      {/if}
    </NavBarButtonSet>
  </div>
</NavBar>