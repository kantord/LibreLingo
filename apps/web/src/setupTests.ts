import { server } from "./mocks/server"
import _ from "node-fetch"

// Start the server before all tests.
beforeAll(() => server.listen())

// Reset any handlers that we may add during individual tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Stop the server after all tests have run.
afterAll(() => server.close())
