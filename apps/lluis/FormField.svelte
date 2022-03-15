<script lang="typescript">
  import Icon from "lluis/Icon.svelte"

  export let name: string
  export let id: string
  export let icon: string
  export let type = "text"
  export let value: string | boolean | number
  export let formStatus = {}
  let error = null
  $: {
    error = formStatus[id]
  }
</script>

<div class="field">
  <label class="label" for={id}>{name}</label>
  <div class="control has-icons-left">
    {#if type === "text"}
      <input
        class="input"
        type="text"
        name={id}
        {id}
        class:is-danger={error != null}
        bind:value
      />
    {/if}
    {#if type === "password"}
      <input
        class="input"
        type="password"
        name={id}
        {id}
        class:is-danger={error != null}
        bind:value
      />
    {/if}
    <Icon size="small" {icon} left />
  </div>
  {#if error != null}
    <p class="help is-danger">{error}</p>
  {/if}
</div>
