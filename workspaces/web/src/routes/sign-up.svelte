<script>
  import db from "../db/db.js"
  import { onMount } from "svelte"
  import hotkeys from "hotkeys-js"
  import NavBar from "../components/NavBar.svelte"
  import Icon from "../components/Icon.svelte"
  import Button from "lluis/Button"

  let error = null
  let username = ""
  let email = ""
  let password = ""
  let password_confirmation = ""
  let errors = {}

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
      <h2 class="is-size-2">Sign up</h2>

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
        <label class="label" for="email">Email</label>
        <div class="control has-icons-left">
          <input
            class="input"
            type="text"
            name="email"
            id="email"
            bind:value="{email}" />
          <Icon size="small" icon="envelope" left />
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

      <div class="field">
        <label class="label" for="password_confirmation">Repeat password</label>
        <p class="control has-icons-left">
          <input
            class="input"
            type="password"
            name="password_confirmation"
            id="password_confirmation"
            bind:value="{password_confirmation}" />
          <Icon size="small" icon="lock" left />
        </p>
      </div>

      {#if error !== null}
        <p class="help is-danger">{error}</p>
      {/if}

      <Button on:click="{handleLogin}">Sign up</Button>
    </form>
  </div>

</section>
