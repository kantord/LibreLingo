<script lang="typescript">
  export let color = null
  export let theme = null
  export let size = null
  export let isDelete = false
  export let isRounded = false
  export let style = ""
</script>

<span {style} class="tag {`tag ${size ? `is-${size}`: ''} ${theme ? `is-${theme}`: ''} ${color ? `is-${color}`: ''}`}"
class:is-rounded={isRounded}
class:is-delete={isDelete}
>
  {#if !isDelete}
    <slot/>
  {/if}
</span>

<style type="text/scss">
  @import './node_modules/bulma/sass/utilities/_all';
</style>