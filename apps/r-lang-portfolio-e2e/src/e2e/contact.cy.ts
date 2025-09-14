describe('Contact Page', () => {
  beforeEach(() => {
    cy.visit('/contact-me');
  });

  it('should display contact form with all required fields', () => {
    cy.get('form').should('be.visible');
    cy.get('input[name="name"]').should('exist');
    cy.get('input[name="email"]').should('exist');
    cy.get('textarea[name="message"]').should('exist');
    cy.get('button[type="submit"]').should('exist');
  });

  it('should have proper form labels and accessibility', () => {
    cy.get('label[for="name"]').should('contain', 'Name');
    cy.get('label[for="email"]').should('contain', 'Email');
    cy.get('label[for="message"]').should('contain', 'Message');

    cy.get('input[name="name"]').should('have.attr', 'required');
    cy.get('input[name="email"]').should('have.attr', 'required');
    cy.get('textarea[name="message"]').should('have.attr', 'required');
  });

  it('should allow user to fill out and submit the form', () => {
    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('textarea[name="message"]').type('This is a test message');

    cy.get('input[name="name"]').should('have.value', 'Test User');
    cy.get('input[name="email"]').should('have.value', 'test@example.com');
    cy.get('textarea[name="message"]').should(
      'have.value',
      'This is a test message'
    );

    cy.get('button[type="submit"]').click();

    cy.get('form').should('exist');
  });

  it('should handle form submission successfully', () => {
    cy.intercept('POST', '/contact-me', {
      statusCode: 200,
      body: {
        success: 'Email sent successfully! I look forward to replying soon!',
      },
    }).as('contactSubmission');

    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('textarea[name="message"]').type('This is a test message');

    cy.get('button[type="submit"]').click();
    cy.wait('@contactSubmission');

    cy.contains(
      'Email sent successfully! I look forward to replying soon!'
    ).should('be.visible');
    cy.get('form').should('be.visible');
  });

  it('should handle form submission errors gracefully', () => {
    cy.intercept('POST', '/contact-me', {
      statusCode: 500,
      body: {
        error:
          'Failed to send email. Please try again or contact me on LinkedIn.',
      },
    }).as('contactError');

    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('textarea[name="message"]').type('This is a test message');

    cy.get('button[type="submit"]').click();
    cy.wait('@contactError');

    cy.contains(
      'Failed to send email. Please try again or contact me on LinkedIn.'
    ).should('be.visible');
    cy.get('form').should('be.visible');
  });

  it('should validate form fields and show appropriate errors', () => {
    cy.get('input[name="email"]').type('invalid-email');
    cy.get('button[type="submit"]').click();

    cy.get('form').should('be.visible');
  });

  it('should show loading state during form submission', () => {
    cy.intercept('POST', '/contact-me', {
      statusCode: 200,
      delay: 1000,
      body: {
        success: 'Email sent successfully! I look forward to replying soon!',
      },
    }).as('slowContactSubmission');

    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('textarea[name="message"]').type('This is a test message');

    cy.get('button[type="submit"]').click();

    cy.get('button[type="submit"]').should('contain', 'Sending message');
    cy.get('button[type="submit"]').should('be.disabled');

    cy.wait('@slowContactSubmission');
    cy.contains(
      'Email sent successfully! I look forward to replying promptly.'
    ).should('be.visible');
    cy.get('button[type="submit"]').should('contain', 'Send Message');
    cy.get('button[type="submit"]').should('not.be.disabled');
  });

  it('should be responsive on different screen sizes', () => {
    cy.viewport(375, 667);
    cy.get('form').should('be.visible');
    cy.get('input[name="name"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');

    cy.viewport(1920, 1080);
    cy.get('form').should('be.visible');
    cy.get('input[name="name"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');
  });
});
