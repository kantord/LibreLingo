<script lang="typescript">
  export let additionalClasses = ""
</script>

<div class="{`content ${additionalClasses || ''}`}">
  <slot />
</div>

<style type="text/scss">
  @import "./node_modules/bulma/sass/elements/content.sass";
</style>
