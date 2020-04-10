<script>
  import db from "../db"
  import sound from "../media/sound"
  import hotkeys from "hotkeys-js"
  import { onMount } from "svelte"
  import { goto } from "@sapper/app"

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
            ...(practiced || []),
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

<section class="hero">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">Lesson completed!</h1>
      <h2 class="subtitle">
        You've completed {rawChallenges.length} challenges
      </h2>
      <a class="button primary" href="{courseURL}">Continue to course page</a>
    </div>
  </div>
</section>
