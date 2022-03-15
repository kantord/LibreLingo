<script lang="typescript">
  export let size = "medium"
  export let prefix = "fas"
  export let icon: string
  export let left = false
</script>

<span class={`icon is-${size}`} class:is-left={left}>
  <i class={`${prefix} fa-${icon} ${size === "large" ? "fa-2x" : ""}`} />
</span>
