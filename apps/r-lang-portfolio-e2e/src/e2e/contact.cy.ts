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
    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('textarea[name="message"]').type('This is a test message');

    cy.get('button[type="submit"]').click();

    // Wait for success message
    cy.contains(
      'Email sent successfully! I look forward to replying promptly.',
      { timeout: 10000 }
    ).should('be.visible');
  });

  it('should handle validation errors gracefully', () => {
    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="email"]').type('test@invalid'); // Valid format but invalid domain
    cy.get('textarea[name="message"]').type('This is a test message');

    cy.get('button[type="submit"]').click();

    cy.contains('Please enter a valid email address', { timeout: 5000 }).should(
      'be.visible'
    );
  });

  it('should handle form submission and show success message', () => {
    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('textarea[name="message"]').type('This is a test message');

    cy.get('button[type="submit"]').click();

    // Focus on the outcome that matters to users
    cy.contains(
      'Email sent successfully! I look forward to replying promptly.',
      { timeout: 10000 }
    ).should('be.visible');

    // Verify form is reset after successful submission
    cy.get('input[name="name"]').should('have.value', '');
    cy.get('input[name="email"]').should('have.value', '');
    cy.get('textarea[name="message"]').should('have.value', '');
  });

  it('should be responsive on different screen sizes', () => {
    cy.viewport(375, 667);
    cy.get('form').should('be.visible');

    cy.viewport(1920, 1080);
    cy.get('form').should('be.visible');
  });
});
