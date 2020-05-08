<script>
  export let size = null
</script>

<div class="column" class:is-one-quarter="{size === 'one-quarter'}">
  <slot />
</div>
