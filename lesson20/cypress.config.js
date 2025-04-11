const { defineConfig } = require('cypress');
const path = require('path');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on);

      const env = config.env.envName || 'default';
      const envFilePath = path.resolve(__dirname, `cypress/fixtures/configFiles/env.${env}.json`);
      const envConfig = require(envFilePath);
      config.baseUrl = envConfig.baseUrl;
      config.env.username = envConfig.username;
      config.env.password = envConfig.password;
      config.reporter = 'cypress-mochawesome-reporter';
      config.reporterOptions = {
        reportDir: `cypress/reports/${env}`,
        overwrite: false,
        html: true,
        json: true,
      };

      return config;
    },
  },
});
