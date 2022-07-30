// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands"
import "@percy/cypress"
import { handlerDefinitions } from "../../src/mocks/handlers.js"

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on("window:before:load", (win) => {
  win.isCypress = true
})

beforeEach(() => {
  console.log("Setting up request interceptors")
  handlerDefinitions.map(({ method, url, handler }) => {
    console.log(`Intercepting ${method}: '${url}'`)
    cy.intercept(method, url, (req, ...rest) => {
      req.reply(handler(req, ...rest))
    })
  })
})
