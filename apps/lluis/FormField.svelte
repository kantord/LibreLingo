<script lang="typescript">
  import Icon from "lluis/Icon.svelte"

  export let name
  export let id
  export let icon
  export let type = "text"
  export let value
  export let formStatus = {}
  let error = null
  $: {error = formStatus[id]}
</script>

<div class="field">
  <label class="label" for={id}>{name}</label>
  <div class="control has-icons-left">
    {#if type === "text"}
      <input
        class="input"
        type="text"
        name={id}
        id={id}
	class:is-danger={error != null}
        bind:value="{value}" />
    {/if}
    {#if type === "password"}
      <input
        class="input"
        type="password"
        name={id}
        id={id}
	class:is-danger={error != null}
        bind:value="{value}" />
    {/if}
    <Icon size="small" icon={icon} left />
  </div>
  {#if error != null}
    <p class="help is-danger">{error}</p>
  {/if}
</div>
