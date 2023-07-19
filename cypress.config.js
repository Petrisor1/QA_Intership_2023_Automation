const { defineConfig } = require('cypress')

module.exports = defineConfig({
  
  e2e: {
    baseApiUrl:'https://api.amprenta.at.assistcloud.services',
    baseUrl: 'https://amprenta.at.assistcloud.services',
     
     
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
