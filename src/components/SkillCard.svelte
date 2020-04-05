<script>
  import db from "../db"

  export let title
  export let practiceHref
  export let imageSet
  export let summary

  let completed = null

  db &&
    db
      .get(practiceHref)
      .then(function(doc) {
        completed = doc.practiced.length >= 1
      })
      .catch(function() {
        completed = false
      })
</script>

<div class="card" data-completed="{completed}">
  {#if completed}
    <span class="icon is-medium">
      <i class="fas fa-check-square fa-2x"></i>
    </span>
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
    <a href="{practiceHref}" class="card-footer-item">
      <button class="button is-primary">Learn {title}</button>
    </a>
  </footer>
</div>

<style>
  @import "../variables";

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
    &[data-completed="true"] {
      background-color: $done-color;

      .title,
      .media-content,
      .icon {
        color: $white;
      }

      .button {
        background-color: $white;
        color: darken($done-color, 8%);
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
