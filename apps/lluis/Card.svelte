<script>
  export let backgroundColor = "white"
  export let foregroundColor = "white"
</script>

<div
  {...$$restProps}
  class="lluis-card"
  style="--backgroundColor: {backgroundColor}; --foregroundColor: {foregroundColor};"
>
  <div class="lluis-card-content">
    <slot name="content" />
  </div>

  <div class="lluis-card-footer">
    <slot name="footer" />
  </div>

  <div class="corner-icon">
    <slot name="icon" />
  </div>
</div>

<style>
  .lluis-card {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: none;
    border-style: solid;
    border-width: 1px 1px 4px 1px;
    border-color: #dbdbdb;
    background-color: var(--backgroundColor);
    color: var(--foregroundColor);
    border-radius: 4px;
    height: 100%;
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
