import settings from "../settings.json"

const isDevelopment =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"

const database = !isDevelopment
    ? settings.database.production
    : settings.database.development

export default {
    database,
}
