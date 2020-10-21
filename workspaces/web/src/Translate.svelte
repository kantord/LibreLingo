<script>
  import { format } from "svelte-i18n"

  export let key
</script>

<span data-tkey={key}>
  {#if process.browser === false && process.env.WEBPACK_MODE === "development"}
    <slot />
  {:else}
    {$format(key)}
  {/if}
</span>
