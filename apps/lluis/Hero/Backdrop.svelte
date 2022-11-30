<div class="backdrop">
  <div>
    <img
      src="/images/home-background-shape-back.svg"
      alt=""
      aria-hidden="true"
    />
  </div>
  <div class="backdrop-front">
    <img
      src="/images/home-background-shape-front.svg"
      alt=""
      aria-hidden="true"
    />
  </div>
</div>

<style>
  .backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 500px;
  }

  .backdrop > * {
    width: 100%;
    position: absolute;
  }

  .backdrop > * > img {
    width: 98%;
  }

  .backdrop-front {
    top: 10%;
    left: 2%;
  }

  .backdrop {
    width: 100%;
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
