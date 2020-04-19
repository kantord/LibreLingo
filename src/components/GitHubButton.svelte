<script context="module">
  export async function preload(page) {
    const repo = await fetch("https://api.github.com/repos/kantord/LibreLingo")

    const { stargazers_count } = await repo.json()
    return {
      stargazers_count
    }
  }
</script>

<script>
  import { onMount } from "svelte"
  import Icon from "./Icon"
  const pMemoize = require("p-memoize")
  export let stars = (process.browser === true ? window.stars : null) || "   "

  onMount(async () => {
    if (process.browser === true && window.isCypress) {
      stars = 999
      return
    }

    pMemoize(fetch, { maxAge: 5 * 60 * 1000 })(
      "https://api.github.com/repos/kantord/LibreLingo"
    )
      .then(res => res.json())
      .then(({ stargazers_count }) => {
        stars = stargazers_count
        if (process.browser === true) {
          window.star_count = stargazers_count
        }
      })
  })
</script>

<a
  class="button is-outlined is-inverted is-info is-small"
  href="https://github.com/kantord/LibreLingo"
  target="_blank">
  {#if stars}
    <span class="tag is-white">
      <span class="stars">{stars}</span>
      <span class="icon">
        <Icon icon="star" />
      </span>
    </span>
  {/if}
  <span>Star on GitHub</span>
</a>

<style>
  @import "../variables";
  $button-color: $text-strong !default;
  $button-focus-color: $link-focus !default;
  $button-active-color: $link-active !default;
  $button-hover-color: $link-hover !default;
  $button-focus-color: $link-focus !default;

  .tag {
    color: $button-color;
    padding-left: 0;
    color: white !important;
    background: transparent !important;

    .stars {
      padding-top: 0.1em;
      font-family: monospace;
    }

    .icon {
      margin-left: 0 !important;
    }
  }

  .button:active,
  .button.is-active {
    .tag {
      color: $button-active-color !important;
    }
  }

  .button:hover,
  .button.is-hovered {
    .tag {
      color: $button-hover-color !important;
    }
  }

  .button:focus,
  .button.is-focused {
    .tag {
      color: $button-focus-color !important;
    }
  }
</style>
