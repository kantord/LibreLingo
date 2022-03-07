<script lang="typescript">
  import Card from "lluis/Card"

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
    <div slot="content">
      <img src={`images/${picture}`} alt="" data-test={`card-img-${number}`} />
    </div>
    <div slot="footer">
      <div data-test={`card-text-${number}`}>
        {formInTargetLanguage}
      </div>
      <div>
        {number}
      </div>
    </div>
  </Card>
</li>

<style type="text/scss">
  @import "../../variables";

  .card {
    transition: opacity 0.15s, border-color 0.2s;
    cursor: pointer;
    transition: transform 0.1s;
    background: white;
    overflow: hidden;
  }

  li {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 20em;
    margin: 0;
  }

  .card-image img {
    object-fit: cover;
    border-radius: 0;
    left: 8px;
    right: 8px;
    top: 8px;
    width: calc(100% - 16px);
  }

  .inactive .card {
    opacity: 0.65;
    border-color: rgba(0, 0, 0, 0);
    transform: scale(0.95);
  }

  :hover .card {
    border-color: $link-active-border;
  }

  .active .card {
    border-color: $info;
    box-sizing: content-box;
    transform: scale(1.05);
  }

  @include mobile {
    .card-content {
      padding: $size-7;
    }
  }
</style>
