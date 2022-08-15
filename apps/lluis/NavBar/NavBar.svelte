<script lang="typescript">
  import Column from "lluis/Column.svelte"
  import Columns from "lluis/Columns.svelte"
</script>

<nav class="navbar">
  <div class="navbar__content layout-container">
    <Columns>
      <slot name="left" />
      <slot name="middle" />
      <slot name="right" />
    </Columns>
  </div>
</nav>
