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

<div class="horizontal-scroller">
  <div
    class="horizontal-scroller__content"
    bind:this={scroller}
    on:scroll={updateScrollPosition}
  >
    <slot />
  </div>

  {#if scrollPosition > 0}
    <div class="horizontal-scroller__shadow-left">
      <Icon icon="circle-arrow-left" />
    </div>
  {/if}

  {#if needsScroll && scrollPosition < scrollWidth}
    <div class="horizontal-scroller__shadow-right">
      <Icon icon="circle-arrow-right" />
    </div>
  {/if}
</div>
