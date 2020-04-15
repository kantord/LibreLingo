<script>
  import { library, dom } from "@fortawesome/fontawesome-svg-core"
  import {
    faVolumeUp,
    faCheckSquare,
    faDumbbell
  } from "@fortawesome/free-solid-svg-icons"
  library.add(faVolumeUp)
  library.add(faCheckSquare)
  library.add(faDumbbell)
  dom.watch()

  export let size = "medium"
  export let icon
</script>

<span class="{`icon fa-${size}`}">
  <i class="{`fas fa-${icon}`}"></i>
</span>
