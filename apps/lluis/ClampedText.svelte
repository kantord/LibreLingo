<script lang="ts">
  export let text
</script>

<p class="is-6 clamp">{text}</p>

<style type="text/scss">
  .clamp {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
</style>
