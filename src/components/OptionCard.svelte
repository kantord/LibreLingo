<script>
  export let active;
  export let inactive;
  export let number;
  export let picture;
  export let formInTargetLanguage;
</script>

<li class:active class:inactive>
  <div class="card">
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
    transition: opacity 0.15s, outline 0.2s;
    cursor: pointer;
  }

  li {
    display: flex;
    flex-direction: column;
    width: 25vw;
    max-width: 20em;
    margin: 0;
  }

  .card-image img {
    object-fit: cover;
  }

  .inactive .card {
    opacity: 0.65;
    outline: 1px solid rgba(0, 0, 0, 0);
  }

  :hover .card {
    outline: 1px solid $link-active-border;
  }

  .active .card {
    outline: 1px solid $info;
    box-sizing: content-box;
  }

  @include mobile {
    .card-content {
      padding: $size-7;
    }
  }
</style>
