<script lang="typescript" context="module">
  export async function preload() {
      const repo = await fetch("https://api.github.com/repos/kantord/LibreLingo")

      const { stargazers_count } = await repo.json()
      return {
          stargazers_count,
      }
  }
</script>

<script lang="typescript">
  import { onMount } from "svelte"
  import isBrowser from "../utils/isBrowser"
  import Icon from "lluis/Icon.svelte"
  import Button from "lluis/Button.svelte"
  import isCypress from "../utils/isCypress"
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const pMemoize = require("p-memoize")

  type WindowWithStars = Window & {
    stars: number
    star_count: number
  }

  export let stars =
    (isBrowser() === true
        ? (window as unknown as WindowWithStars).stars
        : null) || "   "
  export let size: "small" | "normal" = "small"

  onMount(async () => {
      if (isBrowser() === true && isCypress()) {
          stars = 999
          return
      }

      pMemoize(fetch, { maxAge: 5 * 60 * 1000 })(
          "https://api.github.com/repos/kantord/LibreLingo"
      )
          .then((res) => res.json())
          .then(({ stargazers_count }) => {
              stars = stargazers_count
              if (isBrowser() === true) {
                  (window as unknown as WindowWithStars).star_count = stargazers_count
              }
          })
  })
</script>

<Button
  target="_blank"
  size="{size}"
  href="https://github.com/kantord/LibreLingo"
>
  {#if stars}
    <span class="tag is-white">
      <span class="stars">{stars}</span>
      <span class="icon">
        <Icon icon="star" />
      </span>
    </span>
  {/if}
  <span class="is-hidden-mobile">GitHub</span>
</Button>

<style type="text/scss">
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
