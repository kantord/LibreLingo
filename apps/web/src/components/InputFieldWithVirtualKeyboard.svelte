<script lang="typescript">
  import Button from "lluis/Button.svelte"
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
      if (element.selectionStart || element.selectionStart === 0) {
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
  tabindex={0}
  data-test="answer"
  type="text"
  class="input"
  autofocus
  placeholder="Type your answer…"
  disabled="{disabled}"
  spellcheck="false"
  autocapitalize="none"
  lang="{languageCode}"
  use:focusMe
  bind:value
  bind:this="{inputFieldRef}"
/>

<div class="keyboard">
  {#each specialCharacters as specialCharacter}
    <Button
      tabindex={-1}
      light
      key
      size="small"
      disabled="{disabled}"
      on:click="{handleVirtualKey(specialCharacter)}"
    >
      {specialCharacter}
    </Button>
  {/each}
</div>

<style type="text/scss">
  .keyboard {
    margin-top: 2em;
  }
</style>
