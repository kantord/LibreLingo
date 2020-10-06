<script lang="typescript">
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
        {formInTargetLanguage}
      </div>
    </div>
  </div>
</li>

<style type="text/scss">
  @import "../variables";

  .option {
    padding: 0.75em 0;
    transition: opacity 0.15s, outline 0.2s;
    cursor: pointer;
  }

  .inactive .option {
    opacity: 0.65;
  }

  @include mobile {
    .option-content {
      padding: $size-7;
    }
  }
</style>
