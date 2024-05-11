<script lang="ts">
  import { format } from "svelte-i18n"
  import isBrowser from "./utils/isBrowser"

  export let key: string
</script>

<span data-tkey={key}>
  {#if isBrowser() === false && process.env.WEBPACK_MODE === "development"}
    <slot />
  {:else}
    {$format(key)}
  {/if}
</span>
