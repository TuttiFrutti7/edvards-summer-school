const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    overwrite: false,
  },
  env: {
    username: "bob@inbox.lv",
    password: "",
  },
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    baseUrl: "https://coe-webstore.tdlbox.com/",
    trashAssetsBeforeRuns: true,
    setupNodeEvents(on, config) {},
  },
});
