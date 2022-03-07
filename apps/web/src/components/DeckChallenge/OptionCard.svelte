<script lang="ts">
  import Card from "lluis/Card.svelte"
  import Stack from "lluis/Stack.svelte"

  export let active: boolean
  export let inactive: boolean
  export let correct: boolean
  export let number: number
  export let picture: string
  export let formInTargetLanguage: string
</script>

<li class:active class:inactive>
  <Card
    data-test={active ? "active" : inactive ? "inactive" : "neutral"}
    data-test-correct={correct}
  >
    <div slot="media">
      <img src={`images/${picture}`} alt="" data-test={`card-img-${number}`} />
    </div>
    <div slot="footer">
     <Stack justify="center"> 
        {formInTargetLanguage}
     </Stack> 
    </div>
  </Card>
</li>

<style type="text/scss">
  @import "../../variables";


  li {
    border: 3px solid transparent;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 20em;
    margin: 0;
    transition: opacity 0.15s, border-color 0.2s;
    cursor: pointer;
    transition: transform 0.1s;
    background: white;
    overflow: hidden;
  }

  .lluis-card-image img {
    object-fit: cover;
    border-radius: 0;
    left: 8px;
    right: 8px;
    top: 8px;
    width: calc(100% - 16px);
  }

  li.inactive {
    opacity: 0.65;
    border-color: rgba(0, 0, 0, 0);
    transform: scale(0.95);
  }

  li:hover {
    border-color: $link-active-border;
  }

  li.active {
    border-color: $info;
    box-sizing: content-box;
    transform: scale(1.05);
  }
</style>
