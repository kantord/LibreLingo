<script>
  import { onMount } from "svelte"
  import hotkeys from "hotkeys-js"
  import shuffle from "lodash.shuffle"
  import Option from "../components/Option.svelte"
  export let options
  export let selectedOption
  export let disabled

  onMount(() => {
    hotkeys.unbind("1,2,3")
    hotkeys("1,2,3", (_, { key }) => {
      if (disabled) return
      selectedOption = parseInt(key) - 1
    })
  })
</script>

<ul class="options">
  {#each options as { meaningInSourceLanguage, formInTargetLanguage, correct, fake }, i}
    <label for="{i}" class:fake="{fake && true}">
      <input
        type="radio"
        bind:group="{selectedOption}"
        value="{i}"
        name="{i}"
        id="{i}"
        {disabled} />
      <Option
        {correct}
        active="{selectedOption === i}"
        inactive="{selectedOption !== null && selectedOption !== i}"
        {formInTargetLanguage} />
    </label>
  {/each}
</ul>

<style>
  @import "../variables";

  .options {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-left: -0.5em;
    margin-right: -0.5em;
    user-select: none;
  }

  input {
    display: none;
  }
</style>
