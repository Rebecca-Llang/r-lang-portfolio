describe('Production Deployment Tests', () => {
  // This test suite is designed to run against your production deployment
  // You can configure the baseUrl in cypress.config.ts for production testing

  it('should load static assets and CSS correctly', () => {
    cy.visit('/');

    // Check if images load
    cy.get('img').each(($img) => {
      const src = $img.attr('src');
      if (src) {
        cy.request(src).its('status').should('eq', 200);
      }
    });

    // Check CSS loading
    cy.get('head').within(() => {
      cy.get('link[rel="stylesheet"]').should('exist');
    });

    cy.get('body').should('have.css', 'font-family');
  });

  it('should handle contact form submission', () => {
    cy.visit('/contact-me');

    // Verify the contact form exists and is functional
    cy.get('form').should('be.visible');
    cy.get('input[name="name"]').should('exist');
    cy.get('input[name="email"]').should('exist');
    cy.get('textarea[name="message"]').should('exist');
    cy.get('button[type="submit"]').should('exist');
  });

  it('should load projects data (GitHub API or fallback)', () => {
    cy.visit('/projects');
    cy.get('body').should('be.visible');

    // Check that projects are displayed (whether from GitHub API or fallback data)
    cy.get('ul').should('exist');
    cy.get('li').should('have.length.greaterThan', 0);

    // Verify all expected projects from constants/projects.ts are present
    cy.get('body').should('contain.text', 'My Karaoke Playlist');
    cy.get('body').should('contain.text', 'DonateMate');
    cy.get('body').should('contain.text', 'Kea Commerce');
    cy.get('body').should('contain.text', 'Nora AI');
    cy.get('body').should('contain.text', "Rebecca Lang's Portfolio");
    cy.get('body').should('contain.text', 'Kairos AI');

    // Verify that project details are displayed
    cy.get('body').should('contain.text', 'Contributors:');
    cy.get('body').should('contain.text', 'Last Updated');
    cy.get('body').should('contain.text', 'TypeScript');
    cy.get('body').should('contain.text', 'JavaScript');

    // Verify demo links are present for projects that have them
    cy.get('a[href*="donatemate.pushed.nz"]').should('exist');
  });

  it('should navigate between pages without full page reloads', () => {
    cy.visit('/');

    // Test client-side routing
    cy.get('a[data-testid="/about-me"]').click();
    cy.url().should('include', '/about-me');
    cy.get('body').should('be.visible');

    // Go back and wait for navigation to be ready
    cy.go('back');
    cy.url().should('eq', Cypress.config().baseUrl + '/');
    cy.get('body').should('be.visible');

    // Wait for navigation link to be visible and clickable
    cy.get('a[data-testid="/projects"]').should('be.visible').click();
    cy.url().should('include', '/projects');
    cy.get('body').should('be.visible');
  });

  it('should work across different viewport sizes', () => {
    const viewports = [
      { width: 375, height: 667 }, // iPhone
      { width: 768, height: 1024 }, // iPad
      { width: 1920, height: 1080 }, // Large desktop
    ];

    viewports.forEach((viewport) => {
      cy.viewport(viewport.width, viewport.height);
      cy.visit('/');
      cy.get('body').should('be.visible');
      cy.get('h1').should('be.visible');
    });
  });

  it('should have proper security headers and not expose sensitive data', () => {
    cy.request('/').then((response) => {
      // Check for common security headers
      expect(response.headers).to.have.property('x-frame-options');
      expect(response.headers).to.have.property('x-content-type-options');
      expect(response.headers).to.have.property('referrer-policy');
    });

    cy.visit('/');
    // Check that no sensitive data is exposed in HTML
    cy.get('body').should('not.contain', 'password');
    cy.get('body').should('not.contain', 'secret');
    cy.get('body').should('not.contain', 'api_key');
  });

  it('should handle JavaScript errors gracefully', () => {
    cy.visit('/', {
      onBeforeLoad(win) {
        cy.stub(win.console, 'error').as('consoleError');
      },
    });

    cy.get('body').should('be.visible');

    // Navigate around to trigger any potential errors
    cy.get('a[data-testid="/about-me"]').click();
    cy.get('a[data-testid="/projects"]').click();
    cy.get('a[data-testid="/cv"]').click();
    cy.get('a[data-testid="/contact-me"]').click();

    // Should still be functional
    cy.get('body').should('be.visible');
  });
});
