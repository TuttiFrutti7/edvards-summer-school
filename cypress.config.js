const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://coe-webstore.tdlbox.com/us/sign-in",
    setupNodeEvents(on, config) {},
  },
});
