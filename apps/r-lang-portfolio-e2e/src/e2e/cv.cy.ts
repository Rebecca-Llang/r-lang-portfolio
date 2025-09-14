describe('CV Page', () => {
  beforeEach(() => {
    cy.visit('/cv');
  });

  it('should display CV heading and all main sections', () => {
    cy.get('h1').should('contain', 'Curriculum Vitae');
    cy.get('main').should('contain', 'About Me');
    cy.get('main').should('contain', 'Education');
    cy.get('main').should('contain', 'Experience');
    cy.get('main').should('contain', 'Skills');
    cy.get('main').should('contain', 'Interests');
    cy.get('main').should('contain', 'Projects');
  });

  it('should display key content in each section', () => {
    // About Me
    cy.get('main').should('contain', 'Kia ora!');
    cy.get('main').should('contain', 'full-stack software engineer');

    // Education
    cy.get('main').should(
      'contain',
      'Certificate in Applied Software Development'
    );
    cy.get('main').should('contain', 'Dev Academy, NZ');

    cy.get('main').should('contain', 'Software Development at Dev Academy');
    cy.get('main').should('contain', 'Manager');

    cy.get('main').should('contain', 'Tech Skills');
    cy.get('main').should('contain', 'JavaScript');
    cy.get('main').should('contain', 'TypeScript');
    cy.get('main').should('contain', 'React');
    cy.get('main').should('contain', 'Soft Skills');
    cy.get('main').should('contain', 'Teamwork');
  });

  it('should display projects and interests', () => {
    cy.get('main').should('contain', 'My Karaoke Playlist');
    cy.get('main').should('contain', 'DonateMate');
    cy.get('main').should('contain', 'Painting');
    cy.get('main').should('contain', 'Programming');
  });

  it('should have working project links', () => {
    cy.get('a').contains('→').should('have.attr', 'href');
    cy.get('a').contains('Live Demo').should('have.attr', 'href');
  });

  it('should have proper navigation anchors', () => {
    cy.get('#about-me').should('exist');
    cy.get('#education').should('exist');
    cy.get('#experience').should('exist');
    cy.get('#skills').should('exist');
    cy.get('#interests').should('exist');
    cy.get('#projects').should('exist');
  });

  it('should be responsive on different screen sizes', () => {
    // Test mobile
    cy.viewport(375, 667);
    cy.get('h1').should('be.visible');
    cy.get('main').should('be.visible');

    // Test desktop
    cy.viewport(1920, 1080);
    cy.get('h1').should('be.visible');
    cy.get('main').should('be.visible');
  });
});
