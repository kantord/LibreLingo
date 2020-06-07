import * as sapper from "@sapper/app"
import "./mystyles.scss"
import "@openfonts/josefin-sans_all"
import "./i18n"
import { library, dom } from "@fortawesome/fontawesome-svg-core"
import {
    faVolumeUp,
    faCheckSquare,
    faDumbbell,
    faStar,
    faUser,
    faLock,
} from "@fortawesome/free-solid-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

library.add(faVolumeUp)
library.add(faCheckSquare)
library.add(faDumbbell)
library.add(faTwitter)
library.add(faStar)
library.add(faUser)
library.add(faLock)
dom.watch()

sapper.start({
    target: document.querySelector("#sapper"),
})
