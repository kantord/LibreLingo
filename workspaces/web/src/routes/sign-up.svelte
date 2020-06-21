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

  const emailRegexp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  const validateUsername = () => {
    if (!username) {
      errors = {
        ...errors,
        username: "Please choose a username",
      }

      return
    }

    if (username.length < 4) {
      errors = {
        ...errors,
        username: "Please choose a username that has at least 4 characters",
      }

      return
    }
  }

  const validateEmail = () => {
    if (!email) {
      errors = {
        ...errors,
        email: "Please tell us your email address",
      }

      return
    }

    if (!emailRegexp.test(email)) {
      errors = {
        ...errors,
        email: "This does not look like a valid email address",
      }

      return
    }
  }

  const validatePassword = () => {
    if (!password) {
      errors = {
        ...errors,
        password: "Please choose a password",
      }
    }

    if (!password_confirmation) {
      errors = {
        ...errors,
        password_confirmation:
          "Please verify your chosen password by repeating it",
      }

      return
    }

    if (password !== password_confirmation) {
      errors = {
        ...errors,
        password_confirmation: "The passwords don't match",
      }

      return
    }
  }

  const handleSignUp = async () => {
    validateUsername()
    validateEmail()
    validatePassword()
  }

  onMount(() => {
    hotkeys.unbind("enter")
    hotkeys("enter", () => {
      handleSignUp()
    })
  })
</script>

<NavBar dark />

<section class="section">

  <div class="container">

    <form on:submit|preventDefault="{handleSignUp}">
      <h2 class="is-size-2">Sign up</h2>

      <FormField
        name="Username"
        icon="user"
        id="username"
        formStatus="{errors}"
        bind:value="{username}" />
      <FormField
        name="Email"
        icon="envelope"
        id="email"
        formStatus="{errors}"
        bind:value="{email}" />
      <FormField
        name="Password"
        icon="lock"
        id="password"
        type="password"
        formStatus="{errors}"
        bind:value="{password}" />
      <FormField
        name="Repeat password"
        icon="lock"
        id="password_confirmation"
        type="password"
        formStatus="{errors}"
        bind:value="{password_confirmation}" />

      {#if error !== null}
        <p class="help is-danger">{error}</p>
      {/if}

      <Button on:click="{handleSignUp}">Sign up</Button>
    </form>
  </div>

</section>
