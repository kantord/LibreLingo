<script>
  import Button from "lluis/Button"
  export let value
  export let specialCharacters
  export let languageCode
  export let disabled
  let inputFieldRef = null

  $: {
    if (disabled) {
      inputFieldRef.blur()
    }
  }

  const focusMe = (el) => {
    setTimeout(() => {
      if (el.disabled) {
        el.blur()
      } else {
        el.focus()
      }
    }, 1)
  }

  function insertAtCaret(element, text) {
    if (document.selection) {
      element.focus()
      var sel = document.selection.createRange()
      sel.text = text
      element.focus()
    } else if (element.selectionStart || element.selectionStart === 0) {
      var startPos = element.selectionStart
      var endPos = element.selectionEnd
      var scrollTop = element.scrollTop
      element.value =
        element.value.substring(0, startPos) +
        text +
        element.value.substring(endPos, element.value.length)
      element.focus()
      element.selectionStart = startPos + text.length
      element.selectionEnd = startPos + text.length
      element.scrollTop = scrollTop
    } else {
      element.value += text
      element.focus()
    }
  }

  const handleVirtualKey = (character) => () => {
    inputFieldRef.focus()
    insertAtCaret(inputFieldRef, character)
    value = inputFieldRef.value
  }
</script>

<!-- svelte-ignore a11y-autofocus -->
<input
  tabindex="0"
  data-test="answer"
  type="text"
  class="input is-rounded is-large"
  autofocus
  placeholder="Type your answer…"
  {disabled}
  spellcheck="false"
  autocapitalize="none"
  lang="{languageCode}"
  use:focusMe
  bind:value
  bind:this="{inputFieldRef}" />

<div class="keyboard">
  {#each specialCharacters as specialCharacter}
    <Button
      class="virtual-key"
      tabindex="-1"
      light
      key
      size="medium"
      {disabled}
      on:click="{handleVirtualKey(specialCharacter)}">
      {specialCharacter}
    </Button>
  {/each}
</div>

<style>
  input,
  input:focus {
    box-shadow: none;
    border-width: 0;
  }

  .keyboard {
    margin-top: 2em;
  }
</style>
