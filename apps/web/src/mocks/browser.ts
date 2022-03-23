import { setupWorker } from "msw"
import { rest } from "msw"
import { getHandlers } from "./handlers"

export const worker = setupWorker(...getHandlers(rest, { mockAll: false }))
