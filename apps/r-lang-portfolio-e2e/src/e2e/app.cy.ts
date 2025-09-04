import { getGreeting } from '../support/app.po';

describe('r-lang-portfolio-e2e', () => {
  // home page tests

  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains(/Haere Mai!/);
  });

  it('should display an image of Rebecca', () => {
    cy.get('[data-testid="rebecca-photo"]').should('exist').and('be.visible');
  });

  // navigation tests

  it('should have a working navigation link to contact page', () => {
    cy.get('a[href*="contact-me"][data-testid="/contact-me"]').click();
    cy.wait(1000); // Wait for navigation to complete
    cy.url().should('include', '/contact-me');
  });

  it('should have a working navigation link to cv page', () => {
    cy.get('a[href*="cv"][data-testid="/cv"]').click();
    cy.wait(1000); // Wait for navigation to complete
    cy.url().should('include', '/cv');
  });

  it('should have a working navigation link to about me page', () => {
    cy.get('a[href*="about-me"][data-testid="/about-me"]').click();
    cy.wait(1000); // Wait for navigation to complete
    cy.url().should('include', '/about-me');
  });

  it('should have a working navigation link to projects page', () => {
    cy.get('a[href*="projects"][data-testid="/projects"]').click();
    cy.wait(1000); // Wait for navigation to complete
    cy.url().should('include', '/projects');
  });
});
