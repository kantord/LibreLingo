<script lang="ts" context="module">
  import { waitLocale } from "svelte-i18n"
  import isBrowser from "../utils/isBrowser"

  export async function preload() {
    return waitLocale()
  }

  /* Adding var css styels to JSON format */

  const defaultTheme = {
    // Colors
    white: "#fff",
    "color-primary": "#864dcb",
    "color-dark": "red",
    "color-accent": "hsl(36, 80%, 50%)",

    // Text colors
    "text-color-default": "#000",
    "text-color-inverted": "#fff",

    // Font sizes
    "font-size-normal": "calc(var(--spacing-base) * 4)", // 14/16
    "font-size-large": "calc(var(--spacing-base) * 6)", // 21/24
    "font-size-xlarge": "calc(var(--spacing-base) * 8)", // 28/32
    "font-size-xxlarge": "calc(var(--spacing-base) * 10)", // 35/40

    // Spacing
    "spacing-none": "0",
    "spacing-xs": "calc(var(--spacing-base) * 2)", // 7/8
    "spacing-s": "calc(var(--spacing-base) * 4)", // 14/16
    "spacing-m": "calc(var(--spacing-base) * 8)", // 28/32
    "spacing-l": "calc(var(--spacing-base) * 10)", // 35/40
    "spacing-xl": "calc(var(--spacing-base) * 20)", // 70/80

    // Responsive design
    "page-max-width": "1920px",
    "page-padding": "16px",
    "hero-max-width": "960px",

    // Button specific styles
    // Primary
    "button-color-primary": "var(--color-primary)",
    "button-border-color-primary": "transparent",
    "button-color-primary-hover": "var(--color-primary-dark)",

    // Accent
    "button-color-accent": "var(--color-accent)",
    "button-border-color-accent": "transparent",

    // Secondary
    "button-color-secondary": "var(--white)",
    "button-border-color-secondary": "var(--button-color-primary)",

    // NavBar specific styles
    "navbar-background": "rgba(255, 255, 255, .85)",
    "navbar-height": "96px",
  }
  let theme
  theme = Object.entries(defaultTheme)
    .map(([key, value]) => `--${key}:${value}`)
    .join(";")
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

<main style={theme}>
  <slot />
</main>

<style>
  :root {
    --spacing-base: 3.5px;
  }

  @media (min-width: 993px) {
    :root {
      --spacing-base: 4px;
    }
  }
</style>
