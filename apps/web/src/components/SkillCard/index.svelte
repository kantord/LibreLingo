<script lang="typescript">
  import {  onMount } from "svelte"

  import live from "../../db/live"
  import getSkillStats from "../../db/skill/getSkillStats"
  import Icon from "lluis/Icon.svelte"
  import Buttons from "./Buttons.svelte"
  import ContentLeft from "./ContentLeft.svelte"
  import ContentCenter from "./ContentCenter.svelte"

  export let title
  export let levels
  export let practiceHref
  export let introduction
  export let id
  export let imageSet = []
  export let summary

  let completed = null
  let started = null
  let stale = null
  let progress = null
  let introductionPageHref = introduction ? `${practiceHref}/introduction` : null

  onMount(() => {
      live((db) =>
          getSkillStats(db, { id })
              .then((stats) => {
                  completed = stats.progress >= levels
                  progress = stats.progress
                  started = stats.started
                  stale = stats.stale && completed
              })
              // eslint-disable-next-line @typescript-eslint/no-empty-function
              .catch(() => {})
      )
  })
</script>

<div
  class="card"
  data-test="skill card"
  data-started="{started}"
  data-completed="{completed}"
  data-stale="{stale}">
  {#if completed}
    {#if stale}
      <span class="icon">
        <Icon icon="dumbbell" size="large" />
      </span>
    {:else}
      <span class="icon">
        <Icon icon="check-square" size="large" />
      </span>
    {/if}
  {/if}
  <div class="card-content">
    <div class="media">
      <ContentLeft
        imageSet="{imageSet}"
        stale="{stale}"
        completed="{completed}" />
      <ContentCenter
        progress="{progress}"
        stale="{stale}"
        levels="{levels}"
        title="{title}"
        completed="{completed}"
        started="{started}"
        summary="{summary}" />
    </div>
  </div>
  <footer class="card-footer">
    <div href="{practiceHref}" class="card-footer-item">
      <Buttons
        title="{title}"
        practiceHref="{introductionPageHref || practiceHref}"
        started="{started}"
        completed="{completed}" />
    </div>
  </footer>
</div>

<style type="text/scss">
  @import "../../variables";

  .card-content {
    height: 147px;
  }

  .card {
    $completed-color: lighten(desaturate($green, 15%), 20%);
    $stale-color: lighten(desaturate($green, 45%), 20%);
    background: white;

    &[data-completed="true"] {
      background-color: $completed-color;

      &[data-stale="true"] {
        background-color: $stale-color;

        & > .icon {
          position: absolute;
          right: 1em;
          top: 0.5em;
        }
      }

      .title,
      .media-content,
      .icon {
        color: $white;
      }
    }

    & > .icon {
      position: absolute;
      right: 0.5em;
      top: 0.5em;
    }
  }
</style>
