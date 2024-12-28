const { defineConfig } = require("cypress");
const cucumber=require('cypress-cucumber-preprocessor').default;
const { generateMockData } = require('./cypress/e2e/cucumber/helpers/utils.js');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor',cucumber()),
      on('task', {
        generateMockDataTask() {
          generateMockData();
          return null;
        }
      })
    },
    specPattern:'cypress/e2e/cucumber/feature/*.feature'
  },
});
