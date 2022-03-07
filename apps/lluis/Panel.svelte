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
    padding: var(--spacing-medium);

    &[data-background="default"] {
      background: var(--panel-background);
    }

    &[data-background="success"] {
      background: var(--panel-background-success);
      color: var(--panel-background);
    }

    &[data-background="failure"] {
      background: var(--panel-background-failure);
      color: var(--panel-background);
    }

    &[data-background="info"] {
      background: var(--panel-background-info);
      color: var(--panel-background);
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
