<script>
  import db from "../../db"
  import { isStale } from "./logic"
  import Icon from "../Icon"
  import Button from "../ui-kit/Button"

  export let title
  export let practiceHref
  export let id
  export let imageSet = []
  export let summary

  let completed = null
  let stale = null

  db &&
    db
      .get(`skills/${id}`)
      .then(function(doc) {
        completed = doc.practiced.length >= 1
        stale = isStale({ practices: doc.practiced })
      })
      .catch(function(error) {
        completed = false
      })
</script>

<div class="card" data-completed="{completed}" data-stale="{stale}">
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
          <figure class="image image-set is-96x96">
            <img src="{`images/${imageSet[0]}_tinier.jpg`}" alt="" />
            <img src="{`images/${imageSet[1]}_tinier.jpg`}" alt="" />
            <img src="{`images/${imageSet[2]}_tiny.jpg`}" alt="" />
          </figure>
        </div>
      {/if}
      <div class="media-content">
        <p class="title is-4">{title}</p>
        <p class="is-6 clamp">Learn: {summary.join(', ')}</p>
      </div>

    </div>
  </div>
  <footer class="card-footer">
    <div href="{practiceHref}" class="card-footer-item">
      <div class="button-container">
        {#if completed}
          <Button
            primary
            href="{practiceHref}"
            color="white"
            textColor="{stale ? '#afb2ab' : '#b2ca93'}">
            Practice {title}
          </Button>
        {:else}
          <Button primary href="{practiceHref}">Learn {title}</Button>
        {/if}
      </div>
    </div>
  </footer>
</div>

<style>
  @import "../../variables";

  .image-set {
    position: relative;
    overflow: hidden;
  }

  .image-set img {
    left: 15%;
    top: 15%;
    width: 70%;
    position: absolute;
  }

  .image-set img:first-child {
    position: absolute;
    left: 0;
    top: 0;
  }

  .image-set img:last-child {
    position: absolute;
    left: 30%;
    top: 30%;
  }

  .card-content {
    height: 147px;
  }

  .clamp {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  .card {
    $done-color: lighten(desaturate($green, 15%), 20%);
    $stale-color: lighten(desaturate($green, 45%), 20%);
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
