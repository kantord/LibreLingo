/* eslint-disable @typescript-eslint/no-var-requires */

const { defineConfig } = require("cypress")

module.exports = defineConfig({
  video: false,
  projectId: "6pycst",
  retries: {
    runMode: 2,
    openMode: 0,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config)
    },
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/integration/**/*.{feature,features}",
  },
})
