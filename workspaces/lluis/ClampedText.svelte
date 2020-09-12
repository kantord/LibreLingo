<script>
  export let text
</script>

<p class="is-6 clamp">{text}</p>

<style>
  .clamp {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
</style>
