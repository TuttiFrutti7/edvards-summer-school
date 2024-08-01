const { defineConfig } = require('cypress');
require('dotenv').config()

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    overwrite: false,
  },
  env: {
    username: process.env.SITE_EMAIL,
    password: process.env.SITE_PASSWORD,
  },
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    baseUrl: 'https://coe-webstore.tdlbox.com/',
    trashAssetsBeforeRuns: true,
    setupNodeEvents(on, config) {},
  },
});
