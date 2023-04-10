import { register, init } from "svelte-i18n"

register("en", () => require("./translation/en.json"))
register("es", () => require("./translation/es.json"))
register("fr", () => require("./translation/fr.json"))
register("de", () => require("./translation/de.json"))
register("it", () => require("./translation/it.json"))
register("eo", () => require("./translation/eo.json"))
register("pl", () => require("./translation/pl.json"))

init({
  fallbackLocale: "en",
  initialLocale: "en",
})
