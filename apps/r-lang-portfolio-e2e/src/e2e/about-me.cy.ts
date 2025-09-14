describe('About Me Page', () => {
  beforeEach(() => {
    cy.visit('/about-me');
  });

  it('should display main content and images', () => {
    cy.get('h1').should('contain', 'About Me');
    cy.get('main').should('contain', 'Kia ora!');
    cy.get('main').should('contain', 'full-stack software engineer');

    // Check images are visible
    cy.get('[data-testid="tieke-photo"]').should('be.visible');
    cy.get('[data-testid="shelby-photo"]').should('be.visible');
  });

  it('should display interests and skills sections', () => {
    cy.get('main').should('contain', 'Interests');
    cy.get('main').should('contain', 'Painting');
    cy.get('main').should('contain', 'Programming');

    cy.get('main').should('contain', 'Core Skills');
    cy.get('main').should('contain', 'Teamwork');
    cy.get('main').should('contain', 'Problem Solving');
  });

  it('should display project highlight with working links', () => {
    cy.get('main').should('contain', 'Project Highlight');
    cy.get('main').should('contain', 'DonateMate');

    // Test key navigation links
    cy.get('a')
      .contains('View Projects')
      .should('have.attr', 'href', '/projects');
    cy.get('a').contains('Core Skills').should('have.attr', 'href', '/cv');
  });

  it('should display video component', () => {
    cy.get('main').find('video, iframe').should('exist');
  });

  it('should be responsive on different screen sizes', () => {
    // Test mobile
    cy.viewport(375, 667);
    cy.get('h1').should('be.visible');
    cy.get('[data-testid="tieke-photo"]').should('be.visible');

    // Test desktop
    cy.viewport(1920, 1080);
    cy.get('h1').should('be.visible');
    cy.get('[data-testid="tieke-photo"]').should('be.visible');
  });
});
