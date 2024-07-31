const { defineConfig } = require('cypress');
require('dotenv').config()

module.exports = defineConfig({
  env: {
    username: process.env.SITE_EMAIL,
    password: process.env.SITE_PASSWORD,
  },
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    baseUrl: 'https://coe-webstore.tdlbox.com/',
    setupNodeEvents(on, config) {},
  },
});
