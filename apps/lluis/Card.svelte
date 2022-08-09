<script>
  export let backgroundColor = "white"
  export let foregroundColor = "black"
</script>

<div
  {...$$restProps}
  class="lluis-card"
  style="--backgroundColor: {backgroundColor}; --foregroundColor: {foregroundColor};"
>
  {#if $$slots.media}
    <div class="lluis-card-media">
      <slot name="media" />
    </div>
  {/if}

  {#if $$slots.content}
    <div class="lluis-card-content">
      <slot name="content" />
    </div>
  {/if}

  {#if $$slots.footer}
    <div class="lluis-card-footer">
      <slot name="footer" />
    </div>
  {/if}

  {#if $$slots.footer}
    <div class="corner-icon">
      <slot name="icon" />
    </div>
  {/if}
</div>

<style>
  .lluis-card {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: none;
    background-color: var(--backgroundColor);
    color: var(--foregroundColor);
    border-radius: 4px;
    height: 100%;
  }

  .lluis-card-media {
    padding: 0.5rem;
  }

  .lluis-card-content {
    padding: 1.5rem;
  }

  .lluis-card-footer {
    padding: 0.75rem;
  }

  .corner-icon {
    position: absolute;
    right: 0.5em;
    top: 0.5em;
  }
</style>
