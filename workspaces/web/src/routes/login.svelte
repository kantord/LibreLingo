<script>
  import db from "../db/db.js"
  import { onMount } from "svelte"
  import hotkeys from "hotkeys-js"
  import NavBar from "../components/NavBar.svelte"
  import Icon from "../components/Icon.svelte"
  import Button from "lluis/Button"

  let error = null
  let username = ""
  let password = ""

  const handleLogin = async () => {
    try {
      await window._Login(username, password)
    } catch (e) {
      error = e
    }
  }

  onMount(() => {
    hotkeys.unbind("enter")
    hotkeys("enter", () => {
      handleLogin()
    })
  })
</script>

<NavBar dark />

<section class="section">

  <div class="container">

    <form on:submit|preventDefault="{handleLogin}">
      <h2 class="is-size-2">Log in</h2>

      <div class="field">
        <label class="label" for="username">Username</label>
        <div class="control has-icons-left">
          <input
            class="input"
            type="text"
            name="username"
            id="username"
            bind:value="{username}" />
          <Icon size="small" icon="user" left />
        </div>
      </div>

      <div class="field">
        <label class="label" for="password">Password</label>
        <p class="control has-icons-left">
          <input
            class="input"
            type="password"
            name="password"
            id="password"
            bind:value="{password}" />
          <Icon size="small" icon="lock" left />
        </p>
      </div>

      {#if error !== null}
        <p class="help is-danger">{error}</p>
      {/if}

      <Button on:click="{handleLogin}">Log in</Button>
    </form>
  </div>

</section>
