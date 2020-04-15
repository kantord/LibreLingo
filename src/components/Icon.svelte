<script>
  export let size = "medium"
  export let prefix = "fas"
  export let icon
</script>

<span class="{`icon is-${size}`}">
  <i class="{`${prefix} fa-${icon} ${size === 'large' ? 'fa-2x' : ''}`}"></i>
</span>
