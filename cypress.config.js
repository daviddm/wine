const { defineConfig } = require("cypress");

module.exports = defineConfig({
  videoCompression: false,
  chromeWebSecurity: false,
  // experimentalStudio: true,
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
  e2e: {
    // experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
