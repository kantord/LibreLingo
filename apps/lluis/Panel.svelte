<script lang="ts">
  export let background: "default" | "success" | "failure" | "info" = "default"
</script>

<div class="panel" data-background={background}>
  <div class="content">
    <slot name="left" />
    <slot name="right" />
  </div>
</div>

<style type="text/scss">
  .panel {
    position: fixed;
    display: block;
    left: 0;
    bottom: 0;
    right: 0;
    padding: var(--deprecated-spacing-medium);

    &[data-background="default"] {
      background: var(--deprecated-panel-background);
    }

    &[data-background="success"] {
      background: var(--deprecated-panel-background-success);
      color: var(--deprecated-panel-background);
    }

    &[data-background="failure"] {
      background: var(--deprecated-panel-background-failure);
      color: var(--deprecated-panel-background);
    }

    &[data-background="info"] {
      background: var(--deprecated-panel-background-info);
      color: var(--deprecated-panel-background);
    }

    .content {
      display: flex;
      max-width: 960px;
      margin: auto;

      :global([slot="left"]) {
        flex-grow: 1;
      }

      :global([slot="right"]) {
        flex-grow: 0;
      }
    }
  }
</style>
