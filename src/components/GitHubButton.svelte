<script context="module">
  export async function preload(page) {
    const repo = await fetch("https://api.github.com/repos/kantord/LibreLingo")

    const { stargazers_count } = await repo.json()
    return {
      stargazers_count,
    }
  }
</script>

<script>
  import { onMount } from "svelte"
  import Icon from "./Icon"
  import Button from "./ui-kit/Button"
  const pMemoize = require("p-memoize")
  export let stars = (process.browser === true ? window.stars : null) || "   "
  export let size = "small"

  onMount(async () => {
    if (process.browser === true && window.isCypress) {
      stars = 999
      return
    }

    pMemoize(fetch, { maxAge: 5 * 60 * 1000 })(
      "https://api.github.com/repos/kantord/LibreLingo"
    )
      .then((res) => res.json())
      .then(({ stargazers_count }) => {
        stars = stargazers_count
        if (process.browser === true) {
          window.star_count = stargazers_count
        }
      })
  })
</script>

<Button
  target="_blank"
  outlined
  inverted
  info
  {size}
  href="https://github.com/kantord/LibreLingo">
  {#if stars}
    <span class="tag is-white">
      <span class="stars">{stars}</span>
      <span class="icon">
        <Icon icon="star" />
      </span>
    </span>
  {/if}
  <span>Fork me on GitHub</span>
</Button>

<style>
  @import "../variables";

  .tag {
    color: inherit !important;
    padding-left: 0;
    background: transparent !important;

    .stars {
      padding-top: 0.1em;
      font-family: monospace;
    }

    .icon {
      margin-left: 0 !important;
    }
  }
</style>
