<script>
  import { scale } from "svelte/transition"
  import db from "../db"
  import sound from "../media/sound"
  import hotkeys from "hotkeys-js"
  import { onMount } from "svelte"
  import { goto } from "@sapper/app"
  import Icon from "./Icon"
  import Mascot from "./Mascot"

  export let rawChallenges
  export let courseURL
  export let skill

  onMount(async () => {
    sound.fanfare.play()
  })

  onMount(() => {
    const _id = `${courseURL}/skill/${skill}`
    db.get(_id)
      .then(function(doc) {
        db.put({
          ...doc,
          practiced: [
            ...(doc.practiced || []),
            {
              at: new Date().valueOf()
            }
          ]
        })
      })
      .catch(function() {
        db.put({
          _id,
          practiced: [
            {
              at: new Date().valueOf()
            }
          ]
        })
      })
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
    <div class="container">
      <div class="columns" in:scale>
        <div class="column is-three-fifths">
          <Mascot />
        </div>
        <div class="column">
          <h1 class="title is-2">Lesson completed!</h1>
          <h2 class="subtitle">
            You've completed {rawChallenges.length} challenges
          </h2>
          <a class="button primary is-medium" href="{courseURL}">
            Continue to course page
          </a>
          <div class="bottom">
            <h2 class="title is-5">Excited about LibreLingo?</h2>
            <a
              class="button secondary twitter"
              target="_blank"
              href="https://twitter.com/intent/tweet?hashtags=LibreLingo%2Copensource&url=https%3A%2F%2Flibrelingo.app&text=LibreLingo%20-%20an%20experiment%20to%20create%20a%20community-owned%20language%20learning%20tool%0A">
              <Icon icon="twitter" prefix="fab" />
              <div>Tweet about LibreLingo</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .bottom {
    position: absolute;
    bottom: 0;
  }
  .twitter {
    background-color: #55acee;
    color: white;
  }
</style>
