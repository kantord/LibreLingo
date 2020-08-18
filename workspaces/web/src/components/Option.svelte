<script>
  export let active
  export let inactive
  export let correct
  export let formInTargetLanguage
</script>

<li class:active class:inactive>
  <div
    class="option"
    data-test="{active ? 'active' : inactive ? 'inactive' : 'neutral'}"
    data-test-correct="{correct}">
    <div class="option-content">
      <div class="is-size-5 is-size-6-mobile">
        <input type="radio" checked="{active}" />
        {formInTargetLanguage}
      </div>
    </div>
  </div>
</li>

<style>
  @import "../variables";

  .option {
    transition: opacity 0.15s, outline 0.2s;
    cursor: pointer;
    padding: 20px;
    background-color: $grey-lighter;
    border-radius: 40px;
    margin: 20px;
  }

  .active .option {
    background-color: $purple-lighter;
  }

  input {
    visibility: hidden;
  }

  @include mobile {
    .option-content {
      padding: $size-7;
    }
  }
</style>
