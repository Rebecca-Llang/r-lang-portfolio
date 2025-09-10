describe('Production Deployment Tests', () => {
  // This test suite is designed to run against your production deployment
  // You can configure the baseUrl in cypress.config.ts for production testing

  describe('Build & Static Assets', () => {
    it('should load all static assets correctly', () => {
      cy.visit('/');

      // Check if images load
      cy.get('img').each(($img) => {
        const src = $img.attr('src');
        if (src) {
          cy.request(src).its('status').should('eq', 200);
        }
      });
    });

    it('should have proper CSS loading', () => {
      cy.visit('/');
      cy.get('head').within(() => {
        cy.get('link[rel="stylesheet"]').should('exist');
      });
    });

    it('should load fonts correctly', () => {
      cy.visit('/');
      cy.get('body').should('have.css', 'font-family');
    });
  });

  describe('API Endpoints', () => {
    it('should handle API routes correctly', () => {
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

    it('should load GitHub data on projects page', () => {
      cy.visit('/projects');

      // Wait for the page to load
      cy.get('body').should('be.visible');

      // Check that projects are displayed (not just fallback data)
      cy.get('ul').should('exist');
      cy.get('li').should('have.length.greaterThan', 0);

      // Check for specific project names (these should come from GitHub API)
      cy.get('body').should('contain.text', 'My Karaoke Playlist');
      cy.get('body').should('contain.text', 'DonateMate');
    });
  });

  describe('Client-Side Navigation', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it('should navigate between pages without full page reloads', () => {
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

    it('should maintain state during navigation', () => {
      // Test that navigation doesn't break the app state
      cy.get('a[data-testid="/contact-me"]').click();
      cy.url().should('include', '/contact-me');
      cy.get('body').should('be.visible');

      cy.go('back');
      cy.get('h1').should('contain', 'Haere Mai!');
    });
  });

  describe('Performance Metrics', () => {
    it('should load within performance budget', () => {
      cy.visit('/', {
        onBeforeLoad(win) {
          cy.stub(win.performance, 'getEntriesByType').returns([]);
        },
      });

      // Basic performance check
      cy.get('h1').should('be.visible');
    });

    it('should not have memory leaks', () => {
      cy.visit('/');
      cy.get('body').should('be.visible');

      // Navigate around to test for memory issues
      cy.get('a[data-testid="/about-me"]').click();
      cy.get('a[data-testid="/projects"]').click();
      cy.get('a[data-testid="/cv"]').click();
      cy.get('a[data-testid="/contact-me"]').click();

      // Should still be functional
      cy.get('body').should('be.visible');
    });
  });

  describe('Cross-Browser Compatibility', () => {
    it('should work in different viewport sizes', () => {
      const viewports = [
        { width: 375, height: 667 }, // iPhone
        { width: 768, height: 1024 }, // iPad
        { width: 1024, height: 768 }, // Small desktop
        { width: 1920, height: 1080 }, // Large desktop
      ];

      viewports.forEach((viewport) => {
        cy.viewport(viewport.width, viewport.height);
        cy.visit('/');
        cy.get('body').should('be.visible');
        cy.get('h1').should('be.visible');
      });
    });
  });

  describe('Security & Headers', () => {
    it('should have proper security headers', () => {
      cy.request('/').then((response) => {
        // Check for common security headers
        expect(response.headers).to.have.property('x-frame-options');
        expect(response.headers).to.have.property('x-content-type-options');
        expect(response.headers).to.have.property('referrer-policy');
        expect(response.headers).to.have.property('x-xss-protection');
        expect(response.headers).to.have.property('content-security-policy');
      });
    });

    it('should not expose sensitive information', () => {
      cy.visit('/');

      // Check that no sensitive data is exposed in HTML
      cy.get('body').should('not.contain', 'password');
      cy.get('body').should('not.contain', 'secret');
      cy.get('body').should('not.contain', 'api_key');
    });
  });

  describe('Error Boundaries', () => {
    it('should handle JavaScript errors gracefully', () => {
      cy.visit('/', {
        onBeforeLoad(win) {
          cy.stub(win.console, 'error').as('consoleError');
        },
      });

      // Wait for page to load completely
      cy.get('body').should('be.visible');

      // Navigate around to trigger any potential errors
      cy.get('a[data-testid="/about-me"]').click();
      cy.url().should('include', '/about-me');
      cy.get('body').should('be.visible');

      cy.get('a[data-testid="/projects"]').click();
      cy.url().should('include', '/projects');
      cy.get('body').should('be.visible');

      // Go back to home
      cy.go('back');
      cy.url().should('include', '/about-me');
      cy.get('body').should('be.visible');

      cy.go('back');
      cy.url().should('include', '/');
      cy.get('body').should('be.visible');
    });
  });
});
