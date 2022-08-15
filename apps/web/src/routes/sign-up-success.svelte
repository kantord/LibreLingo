<script lang="typescript">
  // TODO: deal with this ignore comment
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  import db from "../db/db.js"
  import NavBar from "../components/NavBar.svelte"
  import Button from "lluis/Button.svelte"
</script>

<NavBar />

<main class="main-content layout-container" role="main">
  <Columns>
    <Column size="4" centered>
      <h2>Registration successful!</h2>
      <p>You can now log in.</p>
      <Button href="/login">Log in</Button>
    </Column>
  </Columns>
</main>
