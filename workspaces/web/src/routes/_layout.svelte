<script lang="typescript" context="module">
  import { waitLocale } from "svelte-i18n"
  import authStore from "../auth"

  export async function preload() {
    return waitLocale()
  }
</script>

<script lang="typescript">
  import settings from "../settings"

  export let segment
</script>

<svelte:head>
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:description"
    content="an experiment to create a community-owned language-learning
    platform" />
  <meta name="twitter:title" content="LibreLingo" />

  <meta
    name="twitter:image"
    content="https://librelingo.app/images/social_cover_1.png" />
  <meta name="twitter:creator" content="@cacophonism" />

  <meta property="og:title" content="LibreLingo" />
  <meta
    property="og:description"
    content="an experiment to create a community-driven language-learning
    platform" />
  <meta
    property="og:image"
    content="https://librelingo.app/images/social_cover_1.png" />

</svelte:head>

{#if process.browser !== true}
  <div class="pageloader is-active">
    <span class="title">LibreLingo</span>
  </div>
{/if}

<main>
  <slot />
</main>
