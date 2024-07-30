const { defineConfig } = require("cypress");

module.exports = defineConfig({
<<<<<<< HEAD
  env: {
    username: 'bob@inbox.lv',
    password: 'password'
  },
  e2e: {
    baseUrl: 'https://coe-webstore.tdlbox.com/',
    setupNodeEvents(on, config) {},
=======
e2e: {
  env: {
    username: 'bob@inbox.lv',
    password: 'password'
  },
  e2e: {
    baseUrl: 'https://coe-webstore.tdlbox.com/',
    setupNodeEvents(on, config) {},
>>>>>>> main
  },
});
