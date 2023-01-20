<script lang="ts">
  type HeadingLevel = 1 | 2
  export let level: HeadingLevel
</script>

{#if level == 1}
  <h1>
    <slot />
  </h1>
{/if}

{#if level == 2}
  <h2>
    <slot />
  </h2>
{/if}

<style>
  h1 {
    font-size: var(--font-size-xxlarge);
  }

  h2 {
    font-size: var(--font-size-xlarge);
  }

  h1,
  h2 {
    font-weight: 400;
    line-height: 1.4; /* TODO: find multiplier that works with all font sizes */
  }
</style>
