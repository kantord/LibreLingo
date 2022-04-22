<div class="lluis-card">
  <div class="lluis-card-content">
    <slot name="content" />
  </div>

  <div class="lluis-card-footer">
    <slot name="footer" />
  </div>
</div>

<style>
  .lluis-card {
    box-shadow: none;
    border-style: solid;
    border-width: 1px 1px 4px 1px;
    border-color: #dbdbdb;
    background-color: white;
    border-radius: 4px;
  }

  .lluis-card-content {
    padding: 1.5rem;
  }

  .lluis-card-footer {
    padding: 0.75rem;
  }
</style>
