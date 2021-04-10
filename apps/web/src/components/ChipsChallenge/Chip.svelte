<script>
  import { createEventDispatcher } from "svelte"

  export let text
  const dispatch = createEventDispatcher()

</script>

<span class="chip" data-id={text} on:click="{() => dispatch('click')}">
  <span class="tag is-medium">{text}</span>
</span>
