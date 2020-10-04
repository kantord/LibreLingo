<script>
  import { scale } from "svelte/transition"
  import db from "../db/db"
  import savePractice from "../db/skill/savePractice"
  import sound from "../media/sound"
  import hotkeys from "hotkeys-js"
  import { onMount } from "svelte"
  import { goto } from "@sapper/app"
  import Mascot from "./Mascot"
  import TwitterButton from "./TwitterButton"
  import Button from "lluis/Button"
  import Column from "lluis/Column"
  import Columns from "lluis/Columns"

  export let rawChallenges
  export let courseURL
  export let skillId
  export let stats

  onMount(async () => {
    sound.fanfare()
  })

  onMount(async () => {
    await savePractice(db, { id: skillId, ...stats })
  })

  onMount(() => {
    hotkeys.unbind("enter")
    hotkeys("enter", () => {
      goto(courseURL)
    })
  })
</script>

<section class="hero is-fullheight-with-navbar">
  <div class="hero-body">
    <div class="container" in:scale>
      <Columns>
        <Column size="3/5">
          <div class="mascot">
            <Mascot />
          </div>
        </Column>
        <Column>
          <div class="is-centered-mobile">
            <h1 class="title is-size-2 is-size-3-mobile">Lesson completed!</h1>
            <h2 class="subtitle">
              You've completed {stats.correct} challenges
            </h2>
            <Button size="medium" href="{courseURL}">
              Continue to course page
            </Button>
            <div class="bottom">
              <h2 class="title is-5">Excited about LibreLingo?</h2>
              <TwitterButton />
            </div>
          </div>
        </Column>
      </Columns>
    </div>
  </div>
</section>

<style>
  @import "../variables";

  @include from($tablet) {
    .bottom {
      position: absolute;
      bottom: 0;
    }
  }

  @include until($tablet) {
    .mascot {
      width: 45%;
      margin: auto;
      margin-top: -3em;
    }

    .bottom {
      margin-top: 4em;
    }

    .is-centered-mobile {
      text-align: center;
    }
  }
</style>
