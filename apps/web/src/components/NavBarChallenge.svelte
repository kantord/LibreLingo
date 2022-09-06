<script lang="typescript">
  import NavBar from "lluis/NavBar/NavBar.svelte"
  import Icon from "lluis/Icon.svelte"
  import Logo from "lluis/Logo.svelte"
  import NavBarButtonSet from "lluis/NavBar/NavBarButtonSet.svelte"
</script>

<NavBar data-test="navbar">
  <div slot="left" class="navbar__logo navbar__logo--icon">
    <Logo src="/images/logo-icon.svg" alt="LibreLingo" />
  </div>

  <div slot="middle" class="navbar__middle">
    <!-- TODO: Move from ChallengeScreen -->
    <progress class="progress navbar__progress" value="" max=""></progress>
  </div>

  <div slot="right" class="navbar__nav">
    <NavBarButtonSet>
      <!-- TODO: Link to course -->
      <a href="/">
        <Icon icon="xmark" size="large" />
      </a>
    </NavBarButtonSet>
  </div>
</NavBar>
