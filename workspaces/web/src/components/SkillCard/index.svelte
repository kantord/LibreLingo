<script>
  import { onDestroy, onMount } from "svelte"

  import live from "../../db/live"
  import getSkillStats from "../../db/skill/getSkillStats"
  import Icon from "lluis/Icon"
  import Button from "lluis/Button"
  import Summary from "./Summary"
  import ImageSet from "./ImageSet"

  export let title
  export let levels
  export let practiceHref
  export let id
  export let imageSet = []
  export let summary

  let completed = null
  let started = null
  let stale = null
  let progress = null

  onMount(() => {
    live((db) =>
      getSkillStats(db, { id })
        .then((stats) => {
          completed = stats.progress >= levels
          progress = stats.progress
          started = stats.started
          stale = stats.stale
        })
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
      {#if imageSet && imageSet.length}
        <div class="media-left">
          <div class="image-set">
            <ImageSet
              images="{[`images/${imageSet[0]}_tinier.jpg`, `images/${imageSet[1]}_tinier.jpg`, `images/${imageSet[2]}_tiny.jpg`]}" />
          </div>
        </div>
      {/if}
      <div class="media-content">
        <p class="title is-4">{title}</p>
        {#if completed || !started}
          <Summary summary="{summary}" />
        {/if}
        {#if !completed && started}
          <progress
            class="progress"
            value="{progress}"
            max="{levels}"></progress>
        {/if}
      </div>
    </div>
  </div>
  <footer class="card-footer">
    <div href="{practiceHref}" class="card-footer-item">
      <div class="button-container">
        {#if completed}
          <Button primary href="{practiceHref}">Practice {title}</Button>
        {:else if started}
          <Button primary href="{practiceHref}">Continue {title}</Button>
        {:else}
          <Button primary href="{practiceHref}">Learn {title}</Button>
        {/if}
      </div>
    </div>
  </footer>
</div>

<style>
  @import "../../variables";

  .card-content {
    height: 147px;
  }

  .card {
    $done-color: lighten(desaturate($green, 15%), 20%);
    $stale-color: lighten(desaturate($green, 45%), 20%);
    background: white;

    &[data-completed="true"] {
      background-color: $done-color;

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

      .media-left {
        mix-blend-mode: screen;

        .image-set {
          filter: saturate(0);

          img {
            box-sizing: border-box;
            border: 1px solid rgba($white, 0.3);
          }
        }
      }
    }

    & > .icon {
      position: absolute;
      right: 0.5em;
      top: 0.5em;
    }
  }
</style>
