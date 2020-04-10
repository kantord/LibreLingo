import * as sapper from "@sapper/app"
import "./mystyles.scss"
import "@openfonts/josefin-sans_all"
import "./i18n"
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

sapper.start({
    target: document.querySelector("#sapper")
})
