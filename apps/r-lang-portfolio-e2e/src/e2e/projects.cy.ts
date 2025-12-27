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

  it('should display all projects with fallback data when needed', () => {
    cy.visit('/projects');

    cy.get('h1').should('contain', 'Projects');
    cy.get('main').should('be.visible');

    // Verify all expected projects are displayed (whether from GitHub API or fallback)
    cy.get('main').should('contain', 'My Karaoke Playlist');
    cy.get('main').should('contain', 'DonateMate');
    cy.get('main').should('contain', 'Kea Commerce');
    cy.get('main').should('contain', 'Nora AI');
    cy.get('main').should('contain', "Rebecca Lang's Portfolio");

    // Verify no error messages
    cy.get('body').should('not.contain', 'SyntaxError');
    cy.get('body').should('not.contain', 'Unable to load projects');
  });

  it('should display project details including languages and contributors', () => {
    cy.visit('/projects');
    cy.wait(2000);

    // Verify project details are displayed (from GitHub API or fallback)
    cy.get('body').should('contain', 'Contributors:');
    cy.get('body').should('contain', 'Last Updated');

    // Check that at least one project shows languages
    cy.get('main').should('contain', 'TypeScript');
    cy.get('main').should('contain', 'JavaScript');

    // Check that contributors are shown
    cy.get('body').should('contain', 'Rebecca-Llang');
  });

  it('should display demo links for projects that have them', () => {
    cy.visit('/projects');

    // DonateMate and Portfolio should have demo links
    cy.get('a').contains('Live Demo').should('exist');
    cy.get('a[href*="donatemate.pushed.nz"]').should('exist');
    cy.get('a[href*="rebecca-lang-portfolio.onrender.com"]').should('exist');
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
