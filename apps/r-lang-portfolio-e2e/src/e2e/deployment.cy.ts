describe('Deployment Health Checks', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Critical Page Functionality', () => {
    it('should load the home page without errors', () => {
      cy.get('body').should('be.visible');
      cy.get('h1').should('contain', 'Haere Mai!');
      cy.get('h2').should('contain', 'Rebecca Lang');
    });

    it('should display the profile image correctly', () => {
      cy.get('[data-testid="rebecca-photo"]')
        .should('be.visible')
        .and('have.attr', 'src')
        .and('not.be.empty');
    });

    it('should have working navigation', () => {
      // Test all navigation links
      const navLinks = ['/contact-me', '/cv', '/about-me', '/projects'];

      navLinks.forEach((link) => {
        cy.get(`a[data-testid="${link}"]`).should('be.visible');
        cy.get(`a[data-testid="${link}"]`).click();
        cy.url().should('include', link);
        cy.go('back');
      });
    });
  });

  describe('Performance & Loading', () => {
    it('should load within acceptable time', () => {
      cy.visit('/', { timeout: 10000 });
      cy.get('h1').should('be.visible');
    });

    it('should load images without errors', () => {
      cy.get('img').each(($img) => {
        cy.wrap($img).should('be.visible');
        cy.wrap($img).should('have.attr', 'src');
      });
    });
  });

  describe('Responsive Design', () => {
    it('should be responsive on mobile', () => {
      cy.viewport('iphone-x');
      cy.get('body').should('be.visible');
      cy.get('h1').should('be.visible');
      cy.get('[data-testid="rebecca-photo"]').should('be.visible');
    });

    it('should be responsive on tablet', () => {
      cy.viewport('ipad-2');
      cy.get('body').should('be.visible');
      cy.get('h1').should('be.visible');
      cy.get('[data-testid="rebecca-photo"]').should('be.visible');
    });

    it('should be responsive on desktop', () => {
      cy.viewport(1920, 1080);
      cy.get('body').should('be.visible');
      cy.get('h1').should('be.visible');
      cy.get('[data-testid="rebecca-photo"]').should('be.visible');
    });
  });

  describe('SEO & Meta Tags', () => {
    it('should have proper meta tags', () => {
      cy.get('head').within(() => {
        cy.get('title').should('contain', 'Welcome to my portfolio!');
        cy.get('meta[name="description"]').should('exist');
        cy.get('meta[name="viewport"]').should('exist');
      });
    });

    it('should have proper OpenGraph tags', () => {
      cy.get('head').within(() => {
        cy.get('meta[property="og:title"]').should('exist');
        cy.get('meta[property="og:description"]').should('exist');
        cy.get('meta[property="og:type"]').should('exist');
      });
    });
  });

  describe('Accessibility', () => {
    it('should have proper alt text for images', () => {
      cy.get('img').each(($img) => {
        cy.wrap($img).should('have.attr', 'alt');
      });
    });

    it('should have proper heading structure', () => {
      cy.get('h1').should('exist');
      cy.get('h2').should('exist');
    });

    it('should have proper link text', () => {
      cy.get('a').each(($link) => {
        cy.wrap($link).should('not.be.empty');
      });
    });
  });

  describe('Error Handling', () => {
    it('should handle 404 pages gracefully', () => {
      cy.visit('/non-existent-page', { failOnStatusCode: false });
      // Should either show a 404 page or redirect to home
      cy.get('body').should('be.visible');
    });

    it('should not have console errors', () => {
      cy.visit('/', {
        onBeforeLoad(win) {
          cy.stub(win.console, 'error').as('consoleError');
        },
      });

      cy.get('@consoleError').should('not.be.called');
    });
  });
});
