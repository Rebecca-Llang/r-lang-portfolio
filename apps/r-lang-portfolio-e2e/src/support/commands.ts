/// <reference types="cypress" />
declare global {
  namespace Cypress {
    interface Chainable {
      contact(name: string, email: string, message: string): Chainable;
    }
  }
}

Cypress.Commands.add(
  'contact',
  (name: string, email: string, message: string) => {
    cy.visit('/contact-me');
    cy.get('input[name="name"]').type(name);
    cy.get('input[name="email"]').type(email);
    cy.get('textarea[name="message"]').type(message);
    cy.get('form').submit();
  }
);

export {};
