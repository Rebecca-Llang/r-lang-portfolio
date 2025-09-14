describe('Deployment Health Checks', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load the home page without errors', () => {
    cy.get('body').should('be.visible');
    cy.get('h1').should('contain', 'Haere Mai!');
    cy.get('h2').should('contain', 'Rebecca Lang');
  });

  it('should display profile image and have working navigation', () => {
    cy.get('[data-testid="rebecca-photo"]')
      .should('be.visible')
      .and('have.attr', 'src')
      .and('not.be.empty');

    // Test navigation links exist and work
    const navLinks = ['/contact-me', '/cv', '/about-me', '/projects'];
    navLinks.forEach((link) => {
      cy.get(`a[data-testid="${link}"]`).should('be.visible');
      cy.get(`a[data-testid="${link}"]`).should('have.attr', 'href', link);
    });

    // Test one navigation link to ensure it works
    cy.get('a[data-testid="/projects"]').click();
    cy.url({ timeout: 10000 }).should('include', '/projects');
    cy.get('body').should('be.visible');
  });

  it('should load images and have proper meta tags', () => {
    cy.get('img').each(($img) => {
      cy.wrap($img).should('be.visible');
      cy.wrap($img).should('have.attr', 'src');
    });

    cy.get('head').within(() => {
      cy.get('title').should('contain', 'Welcome to my portfolio!');
      cy.get('meta[name="description"]').should('exist');
      cy.get('meta[name="viewport"]').should('exist');
    });
  });

  it('should be responsive on different screen sizes', () => {
    // Test mobile
    cy.viewport('iphone-x');
    cy.get('body').should('be.visible');
    cy.get('h1').should('be.visible');

    // Test desktop
    cy.viewport(1920, 1080);
    cy.get('body').should('be.visible');
    cy.get('h1').should('be.visible');
  });

  it('should handle errors gracefully and not have console errors', () => {
    // Test 404 handling
    cy.visit('/non-existent-page', { failOnStatusCode: false });
    cy.get('body').should('be.visible');

    // Test console errors
    cy.visit('/', {
      onBeforeLoad(win) {
        cy.stub(win.console, 'error').as('consoleError');
      },
    });
    cy.get('@consoleError').should('not.be.called');
  });
});
