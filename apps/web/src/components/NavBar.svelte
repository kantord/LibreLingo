<script lang="typescript">
  import settings from "../settings"
  import authStore from "../auth"
  import SponsorButton from "./SponsorButton.svelte"
  import GitHubButton from "./GitHubButton.svelte"
  import NavBar from "lluis/NavBar.svelte"
  import Icon from "lluis/Icon.svelte"
  import Button from "lluis/Button.svelte"
  import Logo from "lluis/Logo.svelte"
  import ButtonLink from "lluis/ButtonLink.svelte"
  import ButtonSet from "lluis/ButtonSet.svelte"
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
    <ButtonSet>
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
    </ButtonSet>
  </div>
</NavBar>
