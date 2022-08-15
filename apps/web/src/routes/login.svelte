<script lang="typescript">
  // TODO: deal with this ignore comment
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  import db from "../db/db.js"
  import NavBar from "../components/NavBar.svelte"
  import Button from "lluis/Button.svelte"
  import Column from "lluis/Column.svelte"
  import Columns from "lluis/Columns.svelte"
  import FormField from "lluis/FormField.svelte"

  let error: string | null = null
  let username = ""
  let password = ""

  type WindowWithLogin = Window & {
    _Login: (username: string, password: string) => Promise<void>
  }

  const handleLogin = async () => {
      try {
          await (window as unknown as WindowWithLogin)._Login(username, password)
      } catch (e) {
          error = e
      }
  }
</script>

<svelte:head>
  <title>Log in - LibreLingo</title>
</svelte:head>

<NavBar />

<main class="main-content layout-container" role="main">
  <Columns>
    <Column size="4" centered>
      <h2>Log in</h2>
      <form on:submit|preventDefault="{handleLogin}" class="form grid">
        <FormField
          name="Username"
          id="username"
          bind:value="{username}"
        />

        <FormField
          name="Password"
          id="password"
          type="password"
          bind:value="{password}"
        />

        {#if error !== null}
          <p class="form__error">{error}</p>
        {/if}

        <Button on:click="{handleLogin}" type="submit">Log in</Button>
      </form>
    </Column>
  </Columns>
</main>
