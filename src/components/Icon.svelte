<script>
  import { library, dom } from "@fortawesome/fontawesome-svg-core"
  import {
    faVolumeUp,
    faCheckSquare,
    faDumbbell,
    faTwitter
  } from "@fortawesome/free-solid-svg-icons"
  library.add(faVolumeUp)
  library.add(faCheckSquare)
  library.add(faDumbbell)
  library.add(faTwitter)
  dom.watch()

  export let size = "medium"
  export let icon
</script>

<span class="{`icon fa-${size}`}">
  <i class="{`fas fa-${icon}`}"></i>
</span>
