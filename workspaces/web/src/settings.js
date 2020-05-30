import Cookies from "js-cookie"
import settings from "../settings.json"

const isDevelopment =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"

const database = !isDevelopment
    ? settings.database.production
    : settings.database.development

const authEnabled = Cookies.get("authEnabled") === "true"

export default {
    ...settings,
    database,
    features: {
        authEnabled,
    },
}
