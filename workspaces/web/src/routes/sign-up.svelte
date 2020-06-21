<script>
  import db from "../db/db.js"
  import { onMount } from "svelte"
  import hotkeys from "hotkeys-js"
  import NavBar from "../components/NavBar.svelte"
  import Icon from "lluis/Icon.svelte"
  import Button from "lluis/Button"
  import FormField from "lluis/FormField"

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

      <FormField
        name="Username"
        icon="user"
        id="username"
        bind:value="{username}" />
      <FormField name="Email" icon="envelope" id="email" bind:value="{email}" />
      <FormField
        name="Password"
        icon="lock"
        id="password"
        type="password"
        bind:value="{password}" />
      <FormField
        name="Repeat password"
        icon="lock"
        id="password_confirmation"
        type="password_confirmation"
        bind:value="{password_confirmation}" />

      {#if error !== null}
        <p class="help is-danger">{error}</p>
      {/if}

      <Button on:click="{handleLogin}">Sign up</Button>
    </form>
  </div>

</section>
