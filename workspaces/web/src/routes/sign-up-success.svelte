<script>
  import db from "../db/db.js"
  import { onMount } from "svelte"
  import hotkeys from "hotkeys-js"
  import NavBar from "../components/NavBar.svelte"
  import Button from "lluis/Button"
</script>

<NavBar dark />

<section class="section">
  <div class="container">
    <h2 class="is-size-2">Registration successsful!</h2>
    <p>You can now log in.</p>
    <Button href="/login">Log in</Button>
  </div>
</section>
