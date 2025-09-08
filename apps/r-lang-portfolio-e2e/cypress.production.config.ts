import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

export default {
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {},
      ciWebServerCommand: '',
      ciBaseUrl: '',
    }),
    // Configure this to point to your production URL
    baseUrl: 'https://rebecca-lang-portfolio.onrender.com', // Your Render production domain
    // Please ensure you use `cy.origin()` when navigating between domains and remove this option.
    // See https://docs.cypress.io/app/references/migration-guide#Changes-to-cyorigin
    injectDocumentDomain: true,
    // Increase timeouts for production testing
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    // Record video and screenshots for debugging
    video: true,
    screenshotOnRunFailure: true,
  },
};
