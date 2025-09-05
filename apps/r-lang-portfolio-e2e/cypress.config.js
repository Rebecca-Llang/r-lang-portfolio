import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

export default {
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'npx nx run portfolio:dev',
      },
      ciWebServerCommand: 'npx nx run portfolio:serve:production',
      ciBaseUrl: 'http://localhost:4200',
    }),
    baseUrl: 'http://localhost:4200',
    // Please ensure you use `cy.origin()` when navigating between domains and remove this option.
    // See https://docs.cypress.io/app/references/migration-guide#Changes-to-cyorigin
    injectDocumentDomain: true,
  },
};
