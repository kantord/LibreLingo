<script lang="ts">
  import Button from "lluis/DeprecatedButton.svelte"
  import Translate from "../../Translate.svelte"

  export let practiceHref
  export let completed
  export let started
</script>

<div class="container">
  {#if completed}
    <Button style="primary" href={practiceHref}>
      <Translate key="course_page.button_practice">Practice</Translate>
    </Button>
  {:else if started}
    <Button style="primary" href={practiceHref}>
      <Translate key="course_page.button_continue">Continue learning</Translate>
    </Button>
  {:else}
    <Button style="primary" href={practiceHref}>
      <Translate key="course_page.button_learn">Learn</Translate>
    </Button>
  {/if}
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
  }
</style>
