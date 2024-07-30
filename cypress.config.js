const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    username: 'bob@inbox.lv',
    password: 'password'
  },
  e2e: {
    baseUrl: 'https://coe-webstore.tdlbox.com/',
    setupNodeEvents(on, config) {},
  },
});
