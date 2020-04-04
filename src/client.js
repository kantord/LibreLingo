import * as sapper from "@sapper/app"
import "./mystyles.scss"
import "@openfonts/josefin-sans_all"
import "./i18n"
import { library, dom } from "@fortawesome/fontawesome-svg-core"
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons"
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons"
library.add(faVolumeUp)
library.add(faCheckSquare)
dom.watch()

sapper.start({
    target: document.querySelector("#sapper")
})
