/* eslint-disable @typescript-eslint/no-var-requires */
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const percyHealthCheck = require("@percy/cypress/task")
const cucumber = require("cypress-cucumber-preprocessor").default
const { renameSync } = require("fs")

module.exports = (on) => {
    on("task", percyHealthCheck)
    on("file:preprocessor", cucumber())
    on("after:screenshot", ({ path }) => {
        renameSync(path, path.replace(/ \(\d*\)/i, ""))
    })
}
