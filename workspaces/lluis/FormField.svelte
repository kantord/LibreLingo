<script>
  import Icon from "lluis/Icon.svelte"

  export let name
  export let id
  export let icon
  export let type = "text"
  export let value
  export let formStatus = {}
  let error = null
  $: {
    error = formStatus[id]
  }
</script>

<div class="field">
  <label class="label is-large" for="{id}">{name}</label>
  <div class="control has-icons-left">
    {#if type === 'text'}
      <input
        class="input is-large is-rounded"
        type="text"
        name="{id}"
        {id}
        class:is-danger="{error != null}"
        bind:value />
    {/if}
    {#if type === 'password'}
      <input
        class="input is-large is-rounded"
        type="password"
        name="{id}"
        {id}
        class:is-danger="{error != null}"
        bind:value />
    {/if}
    <Icon size="small" {icon} left />
  </div>
  {#if error != null}
    <p class="help is-danger">{error}</p>
  {/if}
</div>

<style>
  input,
  input:focus {
    box-shadow: none;
    border-width: 0;
  }
</style>
