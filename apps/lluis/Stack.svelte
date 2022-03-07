<script lang="typescript">
  export let direction: "row" | "column" = "row"

  let compiledStyle = `
  flex-direction: ${direction};
  `
</script>

<div style={compiledStyle}>
  <slot />
</div>

<style>
  div {
    display: flex;
  }
</style>
