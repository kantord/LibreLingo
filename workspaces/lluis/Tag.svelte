<script lang="typescript">
  export let isContainer = false
  export let color = null
  export let theme = null
  export let size = null
  export let isDelete = false
  export let isRounded = false
  export let style = ""
</script>

{#if isContainer}
  <div class="tags {`${ isContainer && size ? `are-${size}` : ''}`}" {style}>
    <slot />
  </div>
{:else}
  <span {style} class="tag {`tag ${size ? `is-${size}`: ''} ${theme ? `is-${theme}`: ''} ${color ? `is-${color}`: ''}`}"
  class:is-rounded={isRounded}
  class:is-delete={isDelete}
  >
    {#if !isDelete}
      <slot/>
    {/if}
  </span>
{/if}

<style type="text/scss">
  @import './node_modules/bulma/sass/utilities/_all';
  // @import "./node_modules/bulma/sass/elements/tag.sass";

  .tags .tag:not(:last-child) {
    margin-right: .5rem;
  }

  .tags .tag {
      margin-bottom: .5rem;
  }
</style>