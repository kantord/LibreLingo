<script>
  import db from "../db/db.js"
  import NavBar from "../components/NavBar.svelte"
  import Icon from "../components/Icon.svelte"
  import Button from "lluis/Button"

  let error = null
</script>

<NavBar dark />

<section class="section">

  <div class="container">

    <h2 class="is-size-2">Log in</h2>

    <div class="field">
      <label class="label">Username</label>
      <div class="control has-icons-left">
        <input class="input" type="text" value="" name="username" />
        <Icon size="small" icon="user" left />
      </div>
    </div>

    <div class="field">
      <label class="label">Password</label>
      <p class="control has-icons-left">
        <input class="input" type="password" name="password" />
        <Icon size="small" icon="lock" left />
      </p>
    </div>

    {#if error !== null}
      <p class="help is-danger">{error}</p>
    {/if}

    <Button
      on:click="{() => {
        if (window._test_credentials_correct === false) {
          error = 'Incorrect username or password'
        }
        if (window._test_credentials_correct === true) {
          window._fakeLogin()
        }
      }}">
      Log in
    </Button>

  </div>

</section>
