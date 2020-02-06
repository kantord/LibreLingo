import * as sapper from "@sapper/app"
import "./mystyles.scss"
import "@openfonts/josefin-sans_all"
import "@fortawesome/fontawesome-free/js/all.min.js"

sapper.start({
    target: document.querySelector("#sapper")
})
