<script>
  import db from "../db/db.js"
  import { onMount } from "svelte"
  import hotkeys from "hotkeys-js"
  import NavBar from "../components/NavBar.svelte"
  import Button from "lluis/Button"
  import FormField from "lluis/FormField"

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

<svelte:head>
  <title>Log in - LibreLingo</title>
</svelte:head>

<NavBar dark />

<section class="section">

  <div class="container">

    <form on:submit|preventDefault="{handleLogin}">
      <h2 class="is-size-2">Log in</h2>

      <FormField
        name="Username"
        icon="user"
        id="username"
        bind:value="{username}" />

      <FormField
        name="Password"
        icon="lock"
        id="password"
        type="password"
        bind:value="{password}" />

      {#if error !== null}
        <p class="help is-danger">{error}</p>
      {/if}

      <Button on:click="{handleLogin}">Log in</Button>
    </form>
  </div>

</section>
