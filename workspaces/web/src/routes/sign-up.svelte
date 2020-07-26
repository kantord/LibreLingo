<script>
  import db from "../db/db.js"
  import settings from "../settings"
  import NavBar from "../components/NavBar.svelte"
  import Button from "lluis/Button"
  import FormField from "lluis/FormField"

  let loading = false

  let username = ""
  let email = ""
  let password = ""
  let password_confirmation = ""
  let license_accepted = false
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

      return
    }

    if (password.length < 6) {
      errors = {
        ...errors,
        password:
          "Your password is too short. Please choose a password that's at least 5 characters long.",
      }

      return
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

  const validateLicense = () => {
    if (!license_accepted) {
      errors = {
        ...errors,
        license: "You have to accept the agreements.",
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

  const handleTestingFakes = () => {
    if (window._test_fake_signup) {
      if (window._test_user_already_exists) {
        errors = {
          ...errors,
          _form: "User already exists. Please choose another username.",
        }
        return
      }
    }
  }

  let handleSignUp
  $: {
    handleSignUp = async () => {
      loading = true
      errors = {}
      validateUsername()
      validateEmail()
      validatePassword()
      validateLicense()
      handleTestingFakes()
      const isFormValid = Object.keys(errors).length === 0

      if (process.browser === true) {
        if (window._test_fake_signup) {
          setTimeout(function () {
            if (isFormValid === true) {
              loading = false
              window.location = "/sign-up-success"
            } else {
              loading = false
            }
          }, 500)
        } else {
          if (isFormValid) {
            fetch(settings.database.signUpEndpoint, {
              method: "post",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                username,
                email,
                password,
              }),
            })
              .then((data) => data.json())
              .then(({ success, error }) => {
                if (success) {
                  loading = false
                  window.location = "/sign-up-success"
                } else {
                  loading = false
                  if (error.code === "invalid-payload") {
                    errors = error.details
                  } else {
                    errors = { _form: "Server error" }
                  }
                }
              })
          } else {
            loading = false
          }
        }
      }
    }
  }
</script>

<svelte:head>
  <title>Sign up - LibreLingo</title>
</svelte:head>

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

      <div class="field">
        <div class="control">
          <label class="checkbox">
            <input
              type="checkbox"
              name="license"
              id="license"
              bind:checked="{license_accepted}" />
            I agree to the
            <a href="/tos">Terms and Conditions</a>
            and the
            <a href="/license">GNU Affero General Public License</a>
          </label>
        </div>
        {#if errors['license'] != null}
          <p class="help is-danger">{errors['license']}</p>
        {/if}
      </div>

      {#if errors._form != null}
        <p class="help is-danger">{errors._form}</p>
      {/if}

      <Button on:click="{handleSignUp}" {loading} asHref="/sign-up-success" submit>
        Sign up
      </Button>
    </form>
  </div>

</section>
