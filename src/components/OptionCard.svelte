<script>
  export let active;
  export let number;
  export let picture;
  export let formInTargetLanguage;
</script>

<li class:active>
  <div class="card">
    <img src="{`images/${picture}`}" alt="" />
    <div class="number">{number}</div>
    <div class="text">{formInTargetLanguage}</div>
  </div>
</li>

<style>
  li {
    display: flex;
    flex-direction: column;
    width: 25vw;
    max-width: 20em;
    margin: 0;
  }

  img {
    display: block;
    margin: 1em auto 0;
    width: 10vw;
    height: 10vw;
    object-position: center;
    object-fit: cover;
  }

  .card {
    border: 1px solid silver;
    border-radius: 1em;
    margin: 0.5em;
  }

  .active .card {
    border-color: gray;
    background-color: silver;
  }
  .number {
    font-size: 2em;
    text-align: center;
  }

  .text {
    text-align: center;
  }
</style>
