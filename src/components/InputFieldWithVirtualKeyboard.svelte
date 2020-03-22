<script>
  export let value;
  export let specialCharacters;
  export let languageCode;
  export let disabled;
  let inputFieldRef = null;

  $: {
    if (disabled) {
      inputFieldRef.blur();
    }
  }

  const focusMe = el => {
    setTimeout(() => {
      if (el.disabled) {
        el.blur();
      } else {
        el.focus();
      }
    }, 1);
  };

  function insertAtCaret(element, text) {
    if (document.selection) {
      element.focus();
      var sel = document.selection.createRange();
      sel.text = text;
      element.focus();
    } else if (element.selectionStart || element.selectionStart === 0) {
      var startPos = element.selectionStart;
      var endPos = element.selectionEnd;
      var scrollTop = element.scrollTop;
      element.value =
        element.value.substring(0, startPos) +
        text +
        element.value.substring(endPos, element.value.length);
      element.focus();
      element.selectionStart = startPos + text.length;
      element.selectionEnd = startPos + text.length;
      element.scrollTop = scrollTop;
    } else {
      element.value += text;
      element.focus();
    }
  }

  const handleVirtualKey = character => () => {
    inputFieldRef.focus();
    insertAtCaret(inputFieldRef, character);
    value = inputFieldRef.value;
  };
</script>

<input
  tabindex="0"
  data-test="answer"
  type="text"
  class="input"
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
    <button
      type="button"
      tabindex="-1"
      class="button key is-small is-light"
      {disabled}
      on:click="{handleVirtualKey(specialCharacter)}">
      {specialCharacter}
    </button>
  {/each}
</div>

<style>
  .keyboard {
    margin-top: 2em;

    .key {
      font-family: monospace;
      margin: 1em;
      margin-left: 0;
      margin-top: 0;
    }
  }
</style>
