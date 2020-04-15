<script context="module">
  import { waitLocale } from "svelte-i18n"

  export async function preload() {
    return waitLocale()
  }
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

</svelte:head>

{#if process.browser !== true}
  <div class="pageloader is-active">
    <span class="title">LibreLingo</span>
  </div>
{/if}

<main>
  <slot />
</main>
