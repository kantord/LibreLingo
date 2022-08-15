<script lang="typescript">
  import Columns from "lluis/Columns.svelte"
  import Column from "lluis/Column.svelte"

  export let state: "default" | "success" | "failure" | "info" = "default"
</script>

<div class="layout-container panel" data-state={state}>
  <Columns>
    <Column size="8" centered>
      <div class="panel__content">
        <slot name="left" />
        <slot name="right" />
      </div>
    </Column>
  </Columns>
</div>