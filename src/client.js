import * as sapper from "@sapper/app"
import "./mystyles.scss"
import "@openfonts/josefin-sans_all"
import "./i18n"

sapper.start({
    target: document.querySelector("#sapper"),
})
