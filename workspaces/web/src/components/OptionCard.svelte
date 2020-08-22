<script>
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

<style>
  @import "../variables";

  .card {
    transition: opacity 0.15s, border-color 0.2s;
    cursor: pointer;
    transition: transform 0.1s;
    background: white;
    overflow: hidden;
    border-radius: 20px;
    border: 2px solid $grey-lighter;
    box-shadow: none;
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
    border-radius: 12px;
    left: 12px;
    right: 12px;
    top: 12px;
    width: calc(100% - 24px);
  }

  .inactive .card {
    opacity: 0.65;
    transform: scale(0.95);
  }

  :hover .card {
    border-color: $primary;
    background-color: $purple-lighter;
  }

  .active .card {
    border-color: $primary;
    background-color: $purple-lighter;
    box-sizing: content-box;
    transform: scale(1.05);
  }

  @include mobile {
    .card-content {
      padding: $size-7;
    }
  }
</style>
