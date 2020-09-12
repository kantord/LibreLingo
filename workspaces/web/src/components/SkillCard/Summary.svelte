<script>
  import ClampedText from "lluis/ClampedText"

  export let summary
</script>

<ClampedText text="{`Learn: ${summary.join(', ')}`}" />
