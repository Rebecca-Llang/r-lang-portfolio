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
    baseUrl: 'https://rebecca-lang-portfolio.onrender.com',
    injectDocumentDomain: true,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    video: true,
    screenshotOnRunFailure: true,
  },
};
