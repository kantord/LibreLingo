<script>
  import { onMount } from "svelte";
  import hotkeys from "hotkeys-js";
  import shuffle from "lodash.shuffle";
  import OptionCard from "../components/OptionCard.svelte";
  export let options;
  export let selectedOption;
  export let disabled;

  // determines which keys correspond to which card
  // skips a number for the fake item (i. e. invisible on desktop)
  let keymap = options.reduce(
    (acc, item) => [...acc, (acc.slice(-1)[0] || 0) + (item.fake ? 2 : 1)],
    []
  );

  onMount(() => {
    hotkeys.unbind("1,2,3");
    hotkeys("1,2,3", (_, { key }) => {
      if (disabled) return;
      selectedOption = keymap[parseInt(key) - 1] - 1;
    });
  });
</script>

<ul class="options">
  {#each options as { pictures, meaningInSourceLanguage, formInTargetLanguage, correct, fake }, i}
    <label for="{i}" class:fake="{fake && true}">
      <input
        type="radio"
        bind:group="{selectedOption}"
        value="{i}"
        name="{i}"
        id="{i}"
        {disabled} />
      <OptionCard
        {correct}
        active="{selectedOption === i}"
        inactive="{selectedOption !== null && selectedOption !== i}"
        picture="{shuffle(pictures)[0]}"
        number="{i + 1 - (keymap[i] - i) + 1}"
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
    display: flex;
    justify-content: center;
  }

  input {
    display: none;
  }

  label {
    width: 100%;
    padding: 1em;
  }

  @include from($tablet) {
    .fake {
      display: none;
    }
  }

  @include until($tablet) {
    .options {
      flex-wrap: wrap;
    }

    label {
      width: 50%;
    }
  }
</style>
