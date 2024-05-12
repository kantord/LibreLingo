import { setupServer } from "msw/node"
import { rest } from "msw"
import { getHandlers } from "./handlers"

export const server = setupServer(...getHandlers(rest))
