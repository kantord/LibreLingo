<script context="module">
  import { waitLocale } from "svelte-i18n"
  export async function preload() {
    return waitLocale()
  }
</script>

<script>
  import { stores } from "@sapper/app"
  const { preloading, page, session } = stores()
  let userAgent = $session["user-agent"]
</script>

{#if process.browser !== true && userAgent !== 'cypress'}
  <div class="pageloader is-active">
    <span class="title">LibreLingo</span>
  </div>
{/if}

<main>
  <slot />
</main>
