import sirv from "sirv"
import polka from "polka"
import compression from "compression"
import * as sapper from "@sapper/server"
import { rest } from "msw"
import { setupServer } from "msw/node"
import { getHandlers } from "../src/mocks/handlers"
import "./i18n"

// eslint-disable-next-line no-undef
const { PORT, NODE_ENV } = process.env
const dev = NODE_ENV === "development"

if (dev) {
  const server = setupServer(...getHandlers(rest, { mockAll: false }))
  server.listen()
}

polka() // You can also use Express
  .use(
    "/",
    compression({ threshold: 0 }),
    sirv("static", { dev }),
    sapper.middleware()
  )
  .listen(PORT, (err) => {
    if (err) console.log("error", err)
  })
