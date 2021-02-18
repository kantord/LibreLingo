<script lang="typescript">
  export let active
  export let inactive
  export let number
  export let picture
  export let correct
  export let formInTargetLanguage
</script>

<li class:active class:inactive>
  <div
    class="card"
    data-test="{active ? 'active' : inactive ? 'inactive' : 'neutral'}"
    data-test-correct="{correct}">
    <div class="card-image">
      <figure class="image is-1by1">
        <img src="{`images/${picture}`}" alt="" />
      </figure>
    </div>
    <div class="card-content">
      <div class="is-size-5 has-text-centered is-size-6-mobile">
        {formInTargetLanguage}
      </div>
      <div
        class="is-size-6 has-text-centered is-hidden-touch is-hidden-tablet-only">
        {number}
      </div>
    </div>
  </div>
</li>

<style type="text/scss">
  @import "../variables";

  .card {
    transition: opacity 0.15s, border-color 0.2s;
    cursor: pointer;
    transition: transform 0.1s;
    background: white;
    overflow: hidden;
  }

  li {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 20em;
    margin: 0;
  }

  .card-image img {
    object-fit: cover;
    border-radius: 0;
    left: 8px;
    right: 8px;
    top: 8px;
    width: calc(100% - 16px);
  }

  .inactive .card {
    opacity: 0.65;
    border-color: rgba(0, 0, 0, 0);
    transform: scale(0.95);
  }

  :hover .card {
    border-color: $link-active-border;
  }

  .active .card {
    border-color: $info;
    box-sizing: content-box;
    transform: scale(1.05);
  }

  @include mobile {
    .card-content {
      padding: $size-7;
    }
  }
</style>
