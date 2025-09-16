import { getGreeting } from '../support/app.po';

describe('Home Page', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message and main content', () => {
    getGreeting().contains(/Haere Mai!/);
    cy.get('h2').should('contain', 'Rebecca Lang');
    cy.get('main').should('contain', 'Software Development Portfolio');
  });

  it('should display profile image', () => {
    cy.get('[data-testid="rebecca-photo"]')
      .should('be.visible')
      .and('have.attr', 'src')
      .and('not.be.empty');
  });

  it('should have working navigation to all pages', () => {
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

  it('should be responsive on different screen sizes', () => {
    // Test mobile
    cy.viewport(375, 667);
    cy.get('h1').should('be.visible');
    cy.get('[data-testid="rebecca-photo"]').should('be.visible');

    // Test desktop
    cy.viewport(1920, 1080);
    cy.get('h1').should('be.visible');
    cy.get('[data-testid="rebecca-photo"]').should('be.visible');
  });

  it('should load without console errors', () => {
    cy.window().then((win) => {
      cy.spy(win.console, 'error').as('consoleError');
    });

    cy.visit('/');
    cy.get('@consoleError').should('not.have.been.called');
  });
});
