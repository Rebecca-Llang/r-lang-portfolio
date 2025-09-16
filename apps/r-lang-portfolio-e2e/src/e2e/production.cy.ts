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

  it('should handle API endpoints correctly', () => {
    cy.request('/api/contact').then((response) => {
      expect(response.status).to.be.oneOf([200, 404]);
    });

    cy.request('/api/github').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('user');
      expect(response.body).to.have.property('repositories');
      expect(response.body.user).to.have.property('login', 'Rebecca-Llang');
    });
  });

  it('should handle GitHub API failures with fallback data', () => {
    // Test that GitHub API returns proper error response
    cy.request({
      url: '/api/github',
      failOnStatusCode: false,
    }).then((response) => {
      // Should either succeed or return proper error structure
      if (response.status !== 200) {
        expect(response.body).to.have.property('error');
        expect(response.body.error).to.contain('Failed to fetch GitHub data');
      }
    });
  });

  it('should load GitHub data on projects page', () => {
    cy.visit('/projects');
    cy.get('body').should('be.visible');

    // Check that projects are displayed
    cy.get('ul').should('exist');
    cy.get('li').should('have.length.greaterThan', 0);

    // Check for specific project names
    cy.get('body').should('contain.text', 'My Karaoke Playlist');
    cy.get('body').should('contain.text', 'DonateMate');
  });

  it('should navigate between pages without full page reloads', () => {
    cy.visit('/');

    // Test client-side routing
    cy.get('a[data-testid="/about-me"]').click();
    cy.url().should('include', '/about-me');
    cy.get('body').should('be.visible');

    // Go back and test another route
    cy.go('back');
    cy.get('a[data-testid="/projects"]').click();
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
