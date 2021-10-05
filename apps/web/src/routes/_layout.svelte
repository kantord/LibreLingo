<script lang="typescript" context="module">
  import { waitLocale } from "svelte-i18n"
  import isBrowser from "../utils/isBrowser"

  /* Adding var css styels to JSON format */

  const defaultTheme = {
      "spacing-small": "8px",
      "spacing-medium": "12px",
      "spacing-large": "calc(var(--spacing-small) + var(--spacing-medium))",
      "blue": "#325f74",
      "white": "#faf4f0",

      "animation-short": ".1s",

      /* primary button stuff */
      "button-primary-background-color": "#325f74",
      "button-primary-text-color": "#fff",
      "button-primary-border": "transparent",
      /* secondary button stuff */
      "button-secondary-background-color": "#f5f5f5",
      "button-secondary-text-color": "#111",
      "button-secondary-border": "#b5b5b5",
      /* virtual keyboard button stuff */
      "button-key-background-color": "#f5f5f5",
      "button-key-text-color": "#111",
      "button-key-border": "#b5b5b5",
      /* generic button stuff */
      "button-radius-small": "calc(var(--spacing-small) / 2)",

      "navbar-background": "var(--blue)",
      "navbar-text-color": "var(--white)",
      "navbar-highlight-color":" rgba(255, 255, 255, .1)",
      "navbar-height": "52px",
      "navbar-padding-vertical": "var(--spacing-small)",
      "navbar-padding-horizontal": "var(--spacing-medium)",
      "navbar-logo-height": "calc(var(--navbar-height) - 2 * var(--spacing-small))",

      "panel-background": "white",
      "panel-background-success": "#84b83f",
      "panel-background-failure": "#ab2149",
      "panel-background-info": "#fcb141",
  }
  let theme 
  theme = Object.entries(defaultTheme)
      .map(([key, value]) => `--${key}:${value}`)
      .join(";")

  export async function preload() {
      return waitLocale()
  }
</script>

<script lang="typescript">
  export let segment
</script>

<svelte:head>
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:description"
    content="an experiment to create a community-owned language-learning
    platform"
  />
  <meta name="twitter:title" content="LibreLingo" />

  <meta
    name="twitter:image"
    content="https://librelingo.app/images/social_cover_1.png"
  />
  <meta name="twitter:creator" content="@cacophonism" />

  <meta property="og:title" content="LibreLingo" />
  <meta
    property="og:description"
    content="an experiment to create a community-driven language-learning
    platform"
  />
  <meta
    property="og:image"
    content="https://librelingo.app/images/social_cover_1.png"
  />
</svelte:head>

{#if isBrowser() !== true}
  <div class="pageloader is-active"><span class="title">LibreLingo</span></div>
{/if}

<main style="{theme}">
  <slot />
</main>