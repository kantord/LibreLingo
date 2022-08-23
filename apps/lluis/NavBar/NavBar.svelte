<nav class="navbar">
  <div class="navbar__content container-lg" class:has-middle={$$slots.middle}>
    <slot name="left" />
    {#if $$slots.middle}
      <slot name="middle" />
    {/if}
    <slot name="right" />
  </div>
</nav>
