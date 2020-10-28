<script lang="typescript">
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
  import Title from "lluis/Title"

  export let rawChallenges
  export let courseURL
  export let skillId
  export let stats

  onMount(async () => {
    sound.fanfare.play()
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
            <Title size={2} sizeMobile={3}>Lesson completed!</Title>
            <Title size={2} isSubtitle={true}>
              You've completed
              {stats.correct}
              challenges
            </Title>
            <Button size="medium" href="{courseURL}">
              Continue to course page
            </Button>
            <div class="bottom">
              <Title size={5}>Excited about LibreLingo?</Title>
              <TwitterButton />
            </div>
          </div>
        </Column>
      </Columns>
    </div>
  </div>
</section>

<style type="text/scss">
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
