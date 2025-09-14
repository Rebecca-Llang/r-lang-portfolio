describe('Projects Page', () => {
  beforeEach(() => {
    cy.visit('/projects');
  });

  it('should display projects heading and main project cards', () => {
    cy.get('h1').should('contain', 'Projects');
    cy.get('main').should('contain', 'My Karaoke Playlist');
    cy.get('main').should('contain', 'DonateMate');
    cy.get('main').should('contain', 'Kea Commerce');
    cy.get('main').should('contain', 'Nora AI');
    cy.get('main').should('contain', "Rebecca Lang's Portfolio");
  });

  it('should display key project information and technologies', () => {
    // Test a few key projects with their technologies
    cy.get('main').should('contain', 'My Karaoke Playlist');
    cy.get('main').should('contain', 'TypeScript');
    cy.get('main').should('contain', 'React');

    cy.get('main').should('contain', 'DonateMate');
    cy.get('main').should('contain', 'Auth0');

    cy.get('main').should('contain', 'Nora AI');
    cy.get('main').should('contain', 'Python');
  });

  it('should have working project links', () => {
    cy.get('a[target="_blank"]').should('have.attr', 'href');
    cy.get('a').contains('Live Demo').should('have.attr', 'href');

    cy.get('a[target="_blank"]').should(
      'have.attr',
      'rel',
      'noopener noreferrer'
    );
  });

  it('should load GitHub data and display project information', () => {
    cy.wait(2000);
    cy.get('main').should('be.visible');
    cy.get('main').should('contain', 'Last Updated');
  });

  it('should handle GitHub API failures gracefully', () => {
    cy.visit('/projects');

    cy.get('h1').should('contain', 'Projects');
    cy.get('main').should('be.visible');

    cy.get('body').should('not.contain', 'SyntaxError');
  });

  it('should use fallback contributors when GitHub contributors API fails', () => {
    cy.intercept('GET', '**/contributors**', {
      statusCode: 500,
      body: { error: 'API rate limit exceeded' },
    }).as('contributorsApiFailure');

    cy.visit('/projects');
    cy.wait(2000);
    cy.get('body').should('contain', 'Contributors:');
    cy.get('body').should('contain', 'Rebecca-Llang');
    cy.get('body').should('contain', 'william-sadler');
    cy.get('body').should('contain', 'olivia-burgess');
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

  it('should load without console errors', () => {
    cy.window().then((win) => {
      cy.spy(win.console, 'error').as('consoleError');
    });

    cy.visit('/projects');
    cy.get('@consoleError').should('not.have.been.called');
  });
});
