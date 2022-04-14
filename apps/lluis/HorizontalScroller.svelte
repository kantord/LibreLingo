<script>
  import { onMount } from "svelte"
  import Icon from "./Icon.svelte"

  let scroller
  let scrollPosition = 0
  let scrollWidth = 200
  let containerWidth = 100
  let needsScroll = scrollWidth > containerWidth

  const updateScrollPosition = () => {
    scrollPosition = scroller.scrollLeft
    containerWidth = scroller.offsetWidth
    scrollWidth = scroller.scrollWidth - containerWidth
  }

  onMount(() => {
    window.addEventListener("resize", updateScrollPosition)
    updateScrollPosition()

    return () => {
      window.removeEventListener("resize", updateScrollPosition)
    }
  })
</script>

<div class="wrapper">
  <div class="content" bind:this={scroller} on:scroll={updateScrollPosition}>
    <slot />
  </div>

  {#if scrollPosition > 0}
    <div class="shadow-left"><Icon icon="circle-arrow-left" /></div>
  {/if}

  {#if needsScroll && scrollPosition < scrollWidth}
    <div class="shadow-right"><Icon icon="circle-arrow-right" /></div>
  {/if}
</div>

<style type="text/scss">
  .wrapper {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-x: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .shadow-right,
  .shadow-left {
    display: flex;
    position: absolute;
    width: 24px;
    height: 48px;
    top: 0;
    bottom: 0;
    align-items: center;
    bottom: calc(100vh - 68px);
  }

  .shadow-left {
    left: 0;
    background: linear-gradient(270deg, transparent, white, white);
  }

  .shadow-right {
    right: 0;
    background: linear-gradient(90deg, transparent, white, white);
  }
</style>
